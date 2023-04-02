import { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Alarm({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [dateTime, setDateTime] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const getReminderValue = async () => {
    try {
      const value = await AsyncStorage.getItem("reminder");
      return value !== null ? value : "no reminder set";
    } catch (e) {
      console.log(e);
      return "Pengingat belum diatur";
    }
  };

  const saveReminderValue = async (value) => {
    try {
      await AsyncStorage.setItem("reminder", value);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    getReminderValue().then((value) => {
      if (value !== "no reminder set") {
        setDateTime(new Date(value));
      }
      console.log(value);
    });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ingatkan saya pada :</Text>
      <Text style={styles.reminderTime}>
        {dateTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
      <TouchableOpacity onPress={() => setShowDateTimePicker(true)}>
        <View style={styles.reminderButton}>
          <Ionicons name="ios-alarm" size={28} color="#ffffff" />
          <Text style={styles.reminderButtonText}>Atur Pengingat</Text>
        </View>
      </TouchableOpacity>
      {showDateTimePicker && (
        <DateTimePicker
          value={dateTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, date) => {
            setShowDateTimePicker(false);
            date.setSeconds(0);
            setDateTime(date);
            const message = `Wake up! It's ${date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}`;
            schedulePushNotification(date, message);
            saveReminderValue(date.toString());
          }}
        />
      )}
      <Text style={styles.instructions}>
        Anda akan menerima notifikasi setiap hari pada waktu tersebut untuk
        tidur.
      </Text>
      <SleepReminderBenefits />
    </View>
  );
}

const SleepReminderBenefits = () => {
  return (
    <View style={styles.benefitsContainer}>
      <Text style={styles.benefitsTitle}>
        Manfaat mengatur pengingat tidur 💤
      </Text>
      <Text style={styles.benefitsText}>
        - Membantu membentuk rutinitas tidur yang teratur
      </Text>
      <Text style={styles.benefitsText}>
        - Mendorong kebiasaan tidur yang sehat
      </Text>
      <Text style={styles.benefitsText}>
        - Meningkatkan kualitas tidur secara keseluruhan
      </Text>
    </View>
  );
};

async function schedulePushNotification(dateTime, message) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Waktunya istirahat!",
      body: "Matikan semua gadget dan siapkan diri untuk tidur yang nyenyak 😴",
      sound: true,
    },
    trigger: { date: dateTime, repeat: true },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(87, 197, 182, 0.5)",
    borderRadius: 10,
    marginBottom: 50,
  },
  jam: {
    fontSize: 60,
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  reminderTime: {
    fontSize: 40,
    marginBottom: 20,
  },
  reminderButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(87, 197, 182)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  reminderButtonText: {
    color: "#ffffff",
    fontSize: 20,
    marginLeft: 10,
  },
  benefitsContainer: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  benefitsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  benefitsText: {
    fontSize: 18,
    marginBottom: 10,
  },
  instructions: {
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 20,
    color: "grey",
  },
});
