import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

export default function Kuesioner({ navigation }) {
  const [number, onChangeNumber] = React.useState("");
  const [answerP2, setAnswerP2] = useState([
    {
      id: "P2.1", // acts as primary key, should be unique and non-empty string
      label: "≤ 15 menit",
      value: "≤ 15 menit",
      size: 20,
    },
    {
      id: "P2.2",
      label: "16-30 menit",
      value: "16-30 menit",
      size: 20,
    },
    {
      id: "P2.3",
      label: "31-60 menit",
      value: "31-60 menit",
      size: 20,
    },
    {
      id: "P3.4",
      label: "> 60 menit",
      value: "> 60 menit",
      size: 20,
    },
  ]);

  const [answerP4, setAnswerP4] = useState([
    {
      id: "P4.1", // acts as primary key, should be unique and non-empty string
      label: "> 7 jam",
      value: "> 7 jam",
      size: 20,
    },
    {
      id: "P4.2",
      label: "6-7 jam",
      value: "6-7 jam",
      size: 20,
    },
    {
      id: "P4.3",
      label: "5-6 jam",
      value: "5-6 jam",
      size: 20,
    },
    {
      id: "P4.4",
      label: "<5 jam",
      value: "<5 jam",
      size: 20,
    },
  ]);

  const [answerP5, setAnswerP5] = useState([
    {
      id: "P5.1", // acts as primary key, should be unique and non-empty string
      label: "Tidak pernah dalam satu bulan terakhir",
      value: "Tidak pernah dalam satu bulan terakhir",
      size: 20,
    },
    {
      id: "P5.2",
      label: "1x Seminggu",
      value: "1x Seminggu",
      size: 20,
    },
    {
      id: "P5.3",
      label: "2x Seminggu",
      value: "2x Seminggu",
      size: 20,
    },
    {
      id: "P5.4",
      label: ">= 3x seminggu",
      value: ">= 3x seminggu",
      size: 20,
    },
  ]);

  const [answerP8, setAnswerP8] = useState([
    {
      id: "P8.1", // acts as primary key, should be unique and non-empty string
      label: "Tidak antusias",
      value: "Tidak antusias",
      size: 20,
    },
    {
      id: "P8.2",
      label: "Kecil",
      value: "Kecil",
      size: 20,
    },
    {
      id: "P8.3",
      label: "Sedang",
      value: "Sedang",
      size: 20,
    },
    {
      id: "P8.4",
      label: "Besar",
      value: "Besar",
      size: 20,
    },
  ]);

  const [answerP9, setAnswerP9] = useState([
    {
      id: "P9.1", // acts as primary key, should be unique and non-empty string
      label: "Sangat baik",
      value: "Sangat baik",
      size: 20,
    },
    {
      id: "P9.2",
      label: "Cukup baik",
      value: "Cukup baik",
      size: 20,
    },
    {
      id: "P9.3",
      label: "Cukup buruk",
      value: "Cukup buruk",
      size: 20,
    },
    {
      id: "P9.4",
      label: "Sangat buruk",
      value: "Sangat buruk",
      size: 20,
    },
  ]);

  function onPressRadioButton(radioArray) {
    setAnswerP4(radioArray);
    console.log(radioArray);
  }

  return (
    <ScrollView>
      <View style={styles.container1}>
        <Text style={styles.pertanyaan}>
          1. Jam berapa biasanya anda tidur di malam hari?
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Contoh: 9"
          keyboardType="numeric"
        />
        <Text style={styles.pertanyaan}>
          2. Berapa lama tidur anda di malam hari?
        </Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP2}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>
          3. Jam berapa biasanya anda bangun di pagi hari?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Contoh: 9"
          keyboardType="numeric"
        />
        <Text style={styles.pertanyaan}>
          4. Berapa lama tidur anda di malam hari?
        </Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP4}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>
          5. Seberapa sering masalah dibawah ini mengganggu anda?
        </Text>
        <Text style={styles.pertanyaan}>
          a. Tidak dapat tertidur selama 30 menit sejak berbaring
        </Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>
          b. Terbangun ditengah malam atau dini hari
        </Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>c. Terbangun untuk ke kamar mandi</Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>d. Sulit bernafas dengan baik</Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>e. Batuk atau mengorok</Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>f. Kedinginan di malam hari</Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>g. Kepanasan di malam hari</Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>h. Mimpi buruk</Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>i. Terasa nyeri</Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>h. Alasan lainnya</Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>
          6. Selama satu bulan terakhir, seberapa sering anda menggunakan obat
          tidur
        </Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>
          7. Selama satu bulan terakhir, seberapa sering anda mengantuk ketika
          melakukan aktivitas di siang hari
        </Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP5}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>
          8. Selama satu bulan terakhir, berapa banyak masalah yang anda
          dapatkan dan seberapa antusias anda selesaikan permasalahan tersebut?
        </Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP8}
          onPress={onPressRadioButton}
        />
        <Text style={styles.pertanyaan}>
          9. Selama satu bulan terakhir, bagaimana anda menilai kepuasan tidur
          anda?
        </Text>
        <RadioGroup
          containerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          radioButtons={answerP9}
          onPress={onPressRadioButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 15,
    backgroundColor: "#F9FAFC",
    borderRadius: 10,
  },

  pertanyaan: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
