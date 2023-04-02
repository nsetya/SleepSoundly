import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { ASYNC_KEY } from "../utils/async-storage";
import useStateAsyncStorage from "../hooks/useStateAsyncStorage";

function SleepDiaryEntriesScreen({ navigation, route }) {
  const { data, setData: setSleepDiaryEntries } = useStateAsyncStorage({
    key: ASYNC_KEY.sleepDiaryEntries,
    defaultValue: [],
  });

  const sleepDiaryEntries = route.params?.sleepDiaryEntries || data;

  const handleEditEntry = (index) => {
    navigation.navigate("EditSleepDiaryEntries", {
      index: index,
      date: sleepDiaryEntries[index].date,
      text: sleepDiaryEntries[index].text,
    });
  };

  const handleRemoveEntry = (index) => {
    setSleepDiaryEntries(prev => [...prev]?.reduce((acc, curr, i) => i === index ? acc : [
      ...acc,
      curr
    ], []))
  }

  return (
    <ScrollView>
      <Text style={{ marginLeft: 27, fontSize: 24, marginTop: 27 }}>
        Diary
      </Text>
      {sleepDiaryEntries?.map?.((entry, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.entry}>
            <Text>Tanggal: {entry.date}</Text>
            <Text>Deskripsi: {entry.text}</Text>
          </View>
          <TouchableOpacity onPress={() => {
              handleEditEntry(index)
          }}>
            <Image
              source={{
                uri: "https://img.icons8.com/plasticine/100/null/pencil.png",
              }}
              style={{ width: 42, height: 42 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleRemoveEntry(index)
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
