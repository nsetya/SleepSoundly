import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ASYNC_KEY } from "../utils/async-storage";
import useStateAsyncStorage from "../hooks/useStateAsyncStorage";
import { Button as ButtonPaper } from "react-native-paper";

function SleepDiary({ navigation }) {
  const [text, onChangeText] = useState("");
  const [selectDate, setSelectDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const { data: sleepDiaryEntries, setData: setSleepDiaryEntries } =
    useStateAsyncStorage({
      key: ASYNC_KEY.sleepDiaryEntries,
      defaultValue: [],
    });

  const formattedDate = selectDate.toLocaleString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const handleSubmit = () => {
    const existingEntry = sleepDiaryEntries.find(
      (entry) => entry.date === formattedDate
    );
    if (existingEntry) {
      Alert.alert("Sleep Diary telah tercatat untuk tanggal ini");
    } else {
      const newEntry = { date: formattedDate, text: text };
      setSleepDiaryEntries((prev) => [...prev, newEntry]);
      onChangeText("");
      setSelectDate(new Date());
      Alert.alert("Sleep Diary berhasil dicatat");
    }
  };

  return (
    <ScrollView style={{ width: "100%", padding: 27 }}>
      <Text style={{ fontSize: 24 }}>Sleep Diary Form</Text>
      <View style={{ marginTop: 27, gap: 24 }}>
        <Text>Tanggal</Text>
        <Text
          style={{
            height: 48,
            borderWidth: 1,
            padding: 10,
            textAlignVertical: "center",
          }}
          onPress={() => setShowDateTimePicker(true)}
        >
          {formattedDate}
        </Text>
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
            textAlignVertical: "top",
          }}
          onChangeText={onChangeText}
          value={text}
          multiline={true}
          placeholder={"Ketik disini"}
        />
        <ButtonPaper
          buttonColor="#DDDDDD"
          mode="contained"
          style={{
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ fontSize: 14, color: "#33424A" }}>Submit</Text>
        </ButtonPaper>
        <ButtonPaper
          buttonColor="#DDDDDD"
          mode="contained"
          style={{
            alignItems: "center",
            marginBottom: 20,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("SleepDiaryEntriesScreen")}
        >
          <Text style={{ fontSize: 14, color: "#33424A" }}>
            Lihat Semua Catatan
          </Text>
        </ButtonPaper>
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
