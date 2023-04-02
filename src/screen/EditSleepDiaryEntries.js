import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import useStateAsyncStorage from "../hooks/useStateAsyncStorage";
import { ASYNC_KEY } from "../utils/async-storage";
import { Button as ButtonPaper } from "react-native-paper";

function EditSleepDiaryEntries({ route, navigation }) {
  const { index, date, text } = route.params;
  
  const { data: sleepDiaryEntries, setData: setSleepDiaryEntries, callbackRef } = useStateAsyncStorage({
    key: ASYNC_KEY.sleepDiaryEntries,
    defaultValue: [],
  });

  const [newDate, setNewDate] = useState(date);
  const [newText, setNewText] = useState(text);

  const handleSave = () => {
    // Update the sleepDiaryEntries array with the new values
    
    setSleepDiaryEntries(prev => {
      const newData = [...prev]?.reduce((acc, curr, i) => i === index ? [
        ...acc,
        {
          date: newDate, text: newText 
        },
      ] : [
        ...acc,
        curr
      ], [])
      callbackRef.current = () => navigation.navigate("SleepDiaryEntriesScreen", {
        sleepDiaryEntries: newData
      });
     return newData
    })
  };

  return (
    <View style={{ width: "100%", padding: 27 }}>
      <Text style={{ fontSize: 24 }}>
        Edit Diary
      </Text>
      <View style={{ marginTop: 27, gap: 24 }}>
        <Text>Tanggal</Text>
        <Text
          style={{
            height: 48,
            borderWidth: 1,
            padding: 10,
            textAlignVertical: "center",
          }}
        >
          {date}
        </Text>
        <Text>Deskripsi:</Text>
        <TextInput
          style={{
            height: 156,
            borderWidth: 1,
            padding: 10,
            textAlignVertical: "top",
          }}
          onChangeText={setNewText}
          value={newText}
        />
        <ButtonPaper
          buttonColor="#DDDDDD"
          mode="contained"
          style={{
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={handleSave}
        >
          <Text style={{ fontSize: 14, color: "#33424A" }}>Simpan</Text>
        </ButtonPaper>
      </View>
    </View>
  );
}

export default EditSleepDiaryEntries;

const styles = StyleSheet.create({
  entryContainer: {
    marginLeft: 27,
    marginTop: 27,
    flexDirection: "row",
    alignItems: "center",
  },
  entry: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 260,
    alignItems: "flex-start",
    borderRadius: 4,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 4,
  },
});
