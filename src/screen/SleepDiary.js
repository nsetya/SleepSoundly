import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

function SleepDiary({ navigation }) {
  const [text, onChangeText] = React.useState("");
  return (
    <ScrollView>
      <Text style={{ marginLeft: 27, fontSize: 24, marginTop: 27 }}>
        Sleep Diary
      </Text>
      <View style={{ marginLeft: 27, marginTop: 27, gap: 24 }}>
        <Text>Tanggal</Text>
        <TextInput
          style={{
            height: 48,
            borderWidth: 1,
            padding: 10,
            width: 356,
            textAlignVertical: "center",
          }}
          onChangeText={onChangeText}
          value={text}
          placeholder={"Contoh: 20-02-23"}
        />
        <Text>Deskripsikan bagaimana pola tidur anda saat ini:</Text>
        <TextInput
          style={{
            height: 156,
            borderWidth: 1,
            padding: 10,
            width: 356,
            textAlignVertical: "top",
          }}
          onChangeText={onChangeText}
          value={text}
          placeholder={"Ketik disini"}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: 356,
            alignItems: "center",
            borderRadius: 4,
          }}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={{ fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default SleepDiary;
