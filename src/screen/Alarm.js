import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Alarm = ({ navigation }) => {
  const [reminderTime, setReminderTime] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [notificationId, setNotificationId] = useState(null);
  const REMINDER_TIME_KEY = "reminderTime";

  useEffect(() => {
    retrieveReminderTime();
    return () => {
      if (notificationId) {
        Notifications.cancelScheduledNotificationAsync(notificationId);
      }
      setReminderTime(null);
    };
  }, []);

  const retrieveReminderTime = async () => {
    try {
      const savedReminderTime = await AsyncStorage.getItem(REMINDER_TIME_KEY);
      if (savedReminderTime !== null) {
        const date = new Date(savedReminderTime);
        setReminderTime(date);
        scheduleNotification(date);
        console.log(`Retrieved reminder time: ${date.toString()}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReminderTimeChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      setReminderTime(selectedDate);
      scheduleNotification(selectedDate);
      saveReminderTime(selectedDate);
    }
  };

  const saveReminderTime = async (date) => {
    try {
      await AsyncStorage.setItem(REMINDER_TIME_KEY, date.toString());
      console.log(`Saved reminder time: ${date.toString()}`);
    } catch (error) {
      console.log(error);
    }
  };

  const showTimepicker = () => {
    setShowPicker(true);
  };

  const scheduleNotification = async (date) => {
    if (notificationId) {
      await Notifications.cancelScheduledNotificationAsync(notificationId);
    }
    const newNotificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Time to Sleep",
        body: "It's time to go to bed! Sweet dreams 😴",
        sound: true,
      },
      trigger: {
        hour: date.getHours(),
        minute: date.getMinutes(),
        repeats: true,
      },
    });
    setNotificationId(newNotificationId);
    console.log(`Scheduled notification with ID ${newNotificationId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Remind me at :</Text>
      <Text style={styles.reminderTime}>
        {reminderTime
          ? reminderTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "No reminder set"}
      </Text>
      <TouchableOpacity onPress={showTimepicker}>
        <View style={styles.reminderButton}>
          <Ionicons name="ios-alarm" size={28} color="#ffffff" />
          <Text style={styles.reminderButtonText}>Set Reminder</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.instructions}>
        You'll receive a notification each day at that time reminding you to go
        to bed.
      </Text>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleReminderTimeChange}
        />
      )}
      <SleepReminderBenefits />
    </View>
  );
};

const SleepReminderBenefits = () => {
  return (
    <View style={styles.benefitsContainer}>
      <Text style={styles.benefitsTitle}>
        Benefits of setting a sleep reminder 💤
      </Text>
      <Text style={styles.benefitsText}>
        - Helps establish a regular sleep routine
      </Text>
      <Text style={styles.benefitsText}>- Increased productivity</Text>
      <Text style={styles.benefitsText}>- Better mental health</Text>
      <Text style={styles.benefitsText}>- Encourages healthy sleep habits</Text>
      <Text style={styles.benefitsText}>- Improves overall sleep quality</Text>
      {/* versi bahasa indonesia */}
      {/* <Text style={styles.benefitsTitle}>
        Manfaat mengatur pengingat tidur 💤
      </Text>
      <Text style={styles.benefitsText}>
        - Membantu membentuk rutinitas tidur yang teratur
      </Text>
      <Text style={styles.benefitsText}>- Mendorong kebiasaan tidur yang sehat</Text>
      <Text style={styles.benefitsText}>- Meningkatkan kualitas tidur secara keseluruhan</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Alarm;
