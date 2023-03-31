import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function SleepDiaryEntriesScreen({ route, navigation }) {
  const { sleepDiaryEntries } = route.params;

  const handleEditEntry = (index) => {
    navigation.navigate("EditSleepDiaryEntries", {
      index: index,
      sleepDiaryEntries: sleepDiaryEntries,
      date: sleepDiaryEntries[index].date,
      text: sleepDiaryEntries[index].text,
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
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEditEntry(index)}
          >
            <Text style={{ color: "white" }}>Edit</Text>
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
  editButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 4,
  },
});
