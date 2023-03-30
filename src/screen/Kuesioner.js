import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import {
  mockAnswerP2,
  mockAnswerP4,
  mockAnswerP5,
  mockAnswerP8,
  mockAnswerP9,
} from "../mockAnswer/index.js";
import Style from "../styles/kuesioner-style.js";

export default function Kuesioner({ navigation }) {
  const [sleepTime, onChangeSleepTime] = React.useState("");
  const [awakeTime, onChangeAwakeTime] = React.useState("");
  const [answerP2, setAnswerP2] = useState(mockAnswerP2);
  const [answerP4, setAnswerP4] = useState(mockAnswerP4);
  const [answerP5, setAnswerP5] = useState(mockAnswerP5);
  const [answerP8, setAnswerP8] = useState(mockAnswerP8);
  const [answerP9, setAnswerP9] = useState(mockAnswerP9);

  return (
    <ScrollView>
      <View style={Style.container}>
        <Text style={Style.pertanyaan}>
          1. Jam berapa biasanya anda tidur di malam hari?
        </Text>
        <TextInput
          style={Style.input}
          onChangeText={onChangeSleepTime}
          value={sleepTime}
          placeholder="Contoh: 9"
          keyboardType="numeric"
        />
        <Text style={Style.pertanyaan}>
          2. Berapa lama (dalam menit) yang anda perlukan untuk dapat mulai
          tertidur setiap malam?
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP2}
          onPress={() => setAnswerP2}
        />
        <Text style={Style.pertanyaan}>
          3. Jam berapa biasanya anda bangun di pagi hari?
        </Text>
        <TextInput
          style={Style.input}
          onChangeText={onChangeAwakeTime}
          value={awakeTime}
          placeholder="Contoh: 9"
          keyboardType="numeric"
        />
        <Text style={Style.pertanyaan}>
          4. Berapa lama tidur anda di malam hari?
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP4}
          onPress={() => setAnswerP4}
        />
        <Text style={Style.pertanyaan}>
          5. Seberapa sering masalah dibawah ini mengganggu anda?
        </Text>
        <Text style={Style.pertanyaan}>
          a. Tidak dapat tertidur selama 30 menit sejak berbaring
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>
          b. Terbangun ditengah malam atau dini hari
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>c. Terbangun untuk ke kamar mandi</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>d. Sulit bernafas dengan baik</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>e. Batuk atau mengorok</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>f. Kedinginan di malam hari</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>g. Kepanasan di malam hari</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>h. Mimpi buruk</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>i. Terasa nyeri</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>
          6. Selama satu bulan terakhir, seberapa sering anda menggunakan obat
          tidur
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>
          7. Selama satu bulan terakhir, seberapa sering anda mengantuk ketika
          melakukan aktivitas di siang hari
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP5}
          onPress={() => setAnswerP5}
        />
        <Text style={Style.pertanyaan}>
          8. Selama satu bulan terakhir, berapa banyak masalah yang anda
          dapatkan dan seberapa antusias anda selesaikan permasalahan tersebut?
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP8}
          onPress={() => setAnswerP8}
        />
        <Text style={Style.pertanyaan}>
          9. Selama satu bulan terakhir, bagaimana anda menilai kepuasan tidur
          anda?
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={answerP9}
          onPress={() => setAnswerP9}
        />
      </View>
    </ScrollView>
  );
}
