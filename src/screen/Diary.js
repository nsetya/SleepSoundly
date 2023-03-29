import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import { DropDownPicker } from "react-native-dropdown-picker";

function Diary({ navigation }) {
  const [text, onChangeText] = React.useState("Contoh: 08.30PM");
  const [textCount, onChangeTextCount] = React.useState("Contoh: 1");
  const [textMinute, onChangeTextMinute] = React.useState("Contoh: 60");
  const [calculate, onChangeCalculate] = React.useState();
  return (
    <ScrollView>
      <Text style={{ marginLeft: 27, fontSize: 24, marginTop: 27 }}>
        Sleep Diary
      </Text>
      <View style={{ marginLeft: 27, marginTop: 27, gap: 24 }}>
        <Text>Pukul berapa anda bersiap untuk pergi tidur?</Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Contoh: 08.30PM"
        />
        <Text>Pukul berapa anda mencoba untuk tidur?</Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Contoh: 08.30PM"
        />
        <Text>Pukul berapa anda tertidur?</Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Contoh: 08.30PM"
        />
        <Text>Berapa kali anda terbangun dalam semalam?</Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeTextCount}
          value={textCount}
          placeholder="Contoh: 1"
        />
        <Text>
          Secara keseluruhan, berapa lama waktu yang dihabiskan ketika
          terbangun?*dalam satuan menit
        </Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeTextMinute}
          value={textMinute}
          placeholder="Contoh: 60"
        />
        <Text>Pukul berapa anda terbangun pada akhir tidur?</Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Contoh: 08.30PM"
        />
        <Text>
          Pukul berapa anda beranjak dari tempat tidur setelah terbangun dari
          akhir tidur?
        </Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Contoh: 08.30PM"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: 356,
            alignItems: "center",
          }}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={{ fontSize: 18 }}>Kalkulasi</Text>
        </TouchableOpacity>
        <Text>Total waktu berada di tempat tidur</Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeCalculate}
          value={calculate}
          placeholder=""
        />
        <Text>Total waktu terbangun pada saat berada di tempat tidur</Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeCalculate}
          value={calculate}
          placeholder=""
        />
        <Text>Total durasi tidur</Text>
        <TextInput
          style={{ height: 40, borderWidth: 1, padding: 10, width: 286 }}
          onChangeText={onChangeCalculate}
          value={calculate}
          placeholder=""
        />
        <Text>Nilai Efisiensi Tidur</Text>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            padding: 10,
            width: 286,
            marginBottom: 24,
          }}
          onChangeText={onChangeCalculate}
          value={calculate}
          placeholder=""
        />
      </View>
    </ScrollView>
  );
}

export default Diary;
