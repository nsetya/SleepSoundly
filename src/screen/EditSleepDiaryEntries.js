import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function EditSleepDiaryEntries({ route, navigation }) {
  const { index, sleepDiaryEntries, date, text } = route.params;

  const [newDate, setNewDate] = useState(date);
  const [newText, setNewText] = useState(text);

  const handleSave = () => {
    // Update the sleepDiaryEntries array with the new values
    const newEntries = [...sleepDiaryEntries];
    newEntries[index] = { date: newDate, text: newText };
    navigation.navigate("SleepDiaryEntriesScreen", {
      sleepDiaryEntries: newEntries,
    });
  };

  return (
    <View>
      <Text style={{ marginLeft: 27, fontSize: 24, marginTop: 27 }}>
        Edit Diaries
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
        >
          {date}
        </Text>
        <Text>Deskripsi:</Text>
        <TextInput
          style={{
            height: 156,
            borderWidth: 1,
            padding: 10,
            width: 330,
            textAlignVertical: "top",
          }}
          onChangeText={setNewText}
          value={newText}
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
          onPress={handleSave}
        >
          <Text style={{ fontSize: 18 }}>Save</Text>
        </TouchableOpacity>
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
