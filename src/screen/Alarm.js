import { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, StyleSheet } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Asset } from "expo-asset";

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

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9FAFC",
      }}
    >
      <View style={styles.box}>
        <Text style={styles.jam}>
          {dateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>

      {/* <Text>Your expo push token: {expoPushToken}</Text> */}
      {/* <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View> */}
      <Button title="Set Alarm" onPress={() => setShowDateTimePicker(true)} />
      {showDateTimePicker && (
        <DateTimePicker
          value={dateTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, date) => {
            setShowDateTimePicker(false);
            setDateTime(date);
            const message = `Wake up! It's ${date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}`;
            schedulePushNotification(date, message);
          }}
        />
      )}
    </View>
  );
}

async function schedulePushNotification(dateTime, message) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Alarm",
      body: message,
      data: { data: "goes here" },
      sound: require("../../assets/Alarm.mp3"),
    },
    trigger: { date: dateTime, repeatInterval: "day" },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  // Load the sound file from the app's assets directory
  const soundObject = new Asset("Alarm.mp3");
  await soundObject.downloadAsync();

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      sound: soundObject,
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
});
