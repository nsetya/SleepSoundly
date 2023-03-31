import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function SleepDiary({ navigation }) {
  const [text, onChangeText] = useState("");
  const [selectDate, setSelectDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [sleepDiaryEntries, setSleepDiaryEntries] = useState([]);

  const formattedDate = selectDate.toLocaleString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const handleSubmit = () => {
    const newEntry = { date: formattedDate, text: text };
    setSleepDiaryEntries([...sleepDiaryEntries, newEntry]);
    onChangeText("");
    setSelectDate(new Date());
    Alert.alert("Sleep diary submitted");
  };

  return (
    <ScrollView>
      <Text style={{ marginLeft: 27, fontSize: 24, marginTop: 27 }}>
        Sleep Diary Form
      </Text>
      <View style={{ marginLeft: 27, marginTop: 27, gap: 24 }}>
        <Text>Tanggal</Text>
        <Text
          style={{
            height: 48,
            borderWidth: 1,
            padding: 10,
            width: 330,
            textAlignVertical: "center",
          }}
          onPress={() => setShowDateTimePicker(true)}
        >
          {formattedDate}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: 330,
            alignItems: "center",
            borderRadius: 4,
          }}
          onPress={() => setShowDateTimePicker(true)}
        >
          <Text style={{ fontSize: 18 }}>Select Date</Text>
        </TouchableOpacity>

        {showDateTimePicker && (
          <DateTimePicker
            value={selectDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDateTimePicker(false);
              setSelectDate(date);
            }}
          />
        )}

        <Text>Deskripsikan bagaimana pola tidur anda saat ini:</Text>
        <TextInput
          style={{
            height: 156,
            borderWidth: 1,
            padding: 10,
            width: 330,
            textAlignVertical: "top",
          }}
          onChangeText={onChangeText}
          value={text}
          multiline={true}
          placeholder={"Ketik disini"}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: 330,
            alignItems: "center",
            borderRadius: 4,
            marginBottom: 20,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: 330,
            alignItems: "center",
            borderRadius: 4,
            marginTop: 20,
          }}
          onPress={() =>
            navigation.navigate("SleepDiaryEntriesScreen", {
              sleepDiaryEntries: sleepDiaryEntries,
            })
          }
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            View All Entries
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default SleepDiary;

const styles = StyleSheet.create({
  entry: {
    marginLeft: 27,
    marginTop: 27,
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 330,
    alignItems: "flex-start",
    borderRadius: 4,
  },
});
