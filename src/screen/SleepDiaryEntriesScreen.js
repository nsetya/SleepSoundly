import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

function SleepDiaryEntriesScreen({ route, navigation }) {
  const { sleepDiaryEntries } = route.params;
  const [entries, setEntries] = useState(sleepDiaryEntries);

  const handleEditEntry = (index) => {
    navigation.navigate("EditSleepDiaryEntries", {
      index: index,
      sleepDiaryEntries: sleepDiaryEntries,
      date: sleepDiaryEntries[index].date,
      text: sleepDiaryEntries[index].text,
      onEditEntry: (editedEntry) => {
        const updatedEntries = [...entries];
        updatedEntries[index] = editedEntry;
        setEntries(updatedEntries);
      },
      onRemoveEntry: () => {
        const updatedEntries = [...entries];
        updatedEntries.splice(index, 1);
        setEntries(updatedEntries);
        navigation.goBack();
      },
    });
  };

  return (
    <ScrollView>
      <Text style={{ marginLeft: 27, fontSize: 24, marginTop: 27 }}>
        Diaries
      </Text>
      {sleepDiaryEntries.map((entry, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.entry}>
            <Text>Tanggal: {entry.date}</Text>
            <Text>Deskripsi: {entry.text}</Text>
          </View>
          <TouchableOpacity onPress={() => handleEditEntry(index)}>
            <Image
              source={{
                uri: "https://img.icons8.com/plasticine/100/null/pencil.png",
              }}
              style={{ width: 42, height: 42 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const updatedEntries = [...entries];
              updatedEntries.splice(index, 1);
              setEntries(updatedEntries);
            }}
          >
            <Image
              source={{
                uri: "https://img.icons8.com/doodle/48/null/full-trash.png",
              }}
              style={{ width: 40, height: 40, marginLeft: 12 }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

export default SleepDiaryEntriesScreen;

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
});
