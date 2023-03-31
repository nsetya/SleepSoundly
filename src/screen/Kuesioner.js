import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import {
  mockAnswerP2,
  mockAnswerP4,
  mockAnswerP5,
  mockAnswerP5b,
  mockAnswerP5c,
  mockAnswerP5d,
  mockAnswerP5e,
  mockAnswerP5f,
  mockAnswerP5g,
  mockAnswerP5h,
  mockAnswerP5i,
  mockAnswerP6,
  mockAnswerP7,
  mockAnswerP8,
  mockAnswerP9,
} from "../mock/mockAnswer.js";
import Style from "../styles/kuesioner-style.js";

export default function Kuesioner({ navigation }) {
  const [sleepTime, onChangeSleepTime] = React.useState("");
  const [awakeTime, onChangeAwakeTime] = React.useState("");
  const [answers, setAnswers] = useState({});
  const [totalValue, setTotalValue] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const total = Object.keys(answers).reduce(
      (acc, curr) => acc + answers[curr]?.value,
      0
    );
    setTotalValue(total);
  }, [answers]);

  const handlePress = (no) => (radioButtons) => {
    const selectedVal = radioButtons?.find((v) => v.selected);
    setAnswers((prev) => ({
      ...prev,
      [no]: selectedVal,
    }));
  };

  const convertSleepTime = Number(sleepTime * 60);
  const lamaWaktuSblmTidur = Number(awakeTime);
  const totalSeluruhWaktu = Number(convertSleepTime + lamaWaktuSblmTidur);
  const efisiensiValue = Number(convertSleepTime / totalSeluruhWaktu);
  const efisiensiTidur = efisiensiValue * 100;

  const getRentangEfisiensiTidur = () => {
    let value = 0;
    if (efisiensiTidur < 65) {
      value = 3;
    } else if (efisiensiTidur > 65 && efisiensiTidur <= 74) {
      value = 2;
    } else if (efisiensiTidur > 74 && efisiensiTidur <= 84) {
      value = 1;
    } else {
      value = 0;
    }
    return value;
  };

  const getAllValue = Number(totalValue + getRentangEfisiensiTidur());

  const rentangNilaiKeseluruhan = () => {
    let val = 0;
    if (getAllValue < 5) {
      val = "Baik";
    } else {
      val = "Buruk";
    }
    return val;
  };

  return (
    <ScrollView>
      <View
        style={
          modalVisible === false ? Style.container : Style.blurredContainer
        }
      >
        <Text style={Style.pertanyaan}>1. Berapa lama durasi tidur anda?</Text>
        <TextInput
          style={Style.input}
          onChangeText={onChangeSleepTime}
          value={sleepTime}
          placeholder="*Dalam jam"
          keyboardType="numeric"
        />
        <Text style={Style.pertanyaan}>
          2. Berapa lama (dalam menit) yang anda perlukan untuk dapat mulai
          tertidur setiap malam?
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP2}
          onPress={handlePress(2)}
        />
        <Text style={Style.pertanyaan}>
          3. Berapa lama waktu yang anda habiskan di tempat tidur sebelum
          terlelap?
        </Text>
        <TextInput
          style={Style.input}
          onChangeText={onChangeAwakeTime}
          value={awakeTime}
          placeholder="*Dalam menit"
          keyboardType="numeric"
        />
        <Text style={Style.pertanyaan}>
          4. Berapa lama tidur anda di malam hari?
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP4}
          onPress={handlePress(4)}
        />
        <Text style={Style.pertanyaan}>
          5. Seberapa sering masalah dibawah ini mengganggu anda?
        </Text>
        <Text style={Style.pertanyaan}>
          a. Tidak dapat tertidur selama 30 menit sejak berbaring
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5}
          onPress={handlePress("5a")}
        />
        <Text style={Style.pertanyaan}>
          b. Terbangun ditengah malam atau dini hari
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5b}
          onPress={handlePress("5b")}
        />
        <Text style={Style.pertanyaan}>c. Terbangun untuk ke kamar mandi</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5c}
          onPress={handlePress("5c")}
        />
        <Text style={Style.pertanyaan}>d. Sulit bernafas dengan baik</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5d}
          onPress={handlePress("5d")}
        />
        <Text style={Style.pertanyaan}>e. Batuk atau mengorok</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5e}
          onPress={handlePress("5e")}
        />
        <Text style={Style.pertanyaan}>f. Kedinginan di malam hari</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5f}
          onPress={handlePress("5f")}
        />
        <Text style={Style.pertanyaan}>g. Kepanasan di malam hari</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5g}
          onPress={handlePress("5g")}
        />
        <Text style={Style.pertanyaan}>h. Mimpi buruk</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5h}
          onPress={handlePress("5h")}
        />
        <Text style={Style.pertanyaan}>i. Terasa nyeri</Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP5i}
          onPress={handlePress("5i")}
        />
        <Text style={Style.pertanyaan}>
          6. Selama satu bulan terakhir, seberapa sering anda menggunakan obat
          tidur
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP6}
          onPress={handlePress(6)}
        />
        <Text style={Style.pertanyaan}>
          7. Selama satu bulan terakhir, seberapa sering anda mengantuk ketika
          melakukan aktivitas di siang hari
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP7}
          onPress={handlePress(7)}
        />
        <Text style={Style.pertanyaan}>
          8. Selama satu bulan terakhir, berapa banyak masalah yang anda
          dapatkan dan seberapa antusias anda selesaikan permasalahan tersebut?
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP8}
          onPress={handlePress(8)}
        />
        <Text style={Style.pertanyaan}>
          9. Selama satu bulan terakhir, bagaimana anda menilai kepuasan tidur
          anda?
        </Text>
        <RadioGroup
          containerStyle={Style.radioButton}
          radioButtons={mockAnswerP9}
          onPress={handlePress(9)}
        />
        <TouchableOpacity
          style={Style.buttonSubmit}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={Style.modalContainer}>
            <View style={Style.modalInner}>
              <Text>Kualitas tidur keseluruhan berdasarkan skor akhir:</Text>
              <Text style={{ marginTop: 8, textDecorationLine: "underline" }}>
                {rentangNilaiKeseluruhan()}
              </Text>
              <View style={Style.rentangNilai}>
                {rentangNilaiKeseluruhan() === "Baik" && (
                  <View style={Style.center}>
                    <Text style={{ marginTop: 8 }}>
                      Kualitas tidur anda sudah baik!
                    </Text>
                    <Text>Simak fakta-fakta menarik seputar tidur berikut</Text>
                    <TouchableOpacity
                      style={Style.buttonArtikel}
                      onPress={() => navigation.navigate("IsiArtikel4")}
                    >
                      <Text style={{ fontSize: 18 }}>Lihat Artikel</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {rentangNilaiKeseluruhan() === "Buruk" && (
                  <View style={Style.center}>
                    <Text style={{ marginTop: 8 }}>
                      Sepertinya anda butuh bantuan
                    </Text>
                    <Text>Simak tips & trick seputar tidur berikut</Text>
                    <TouchableOpacity
                      style={Style.buttonArtikel}
                      onPress={() => navigation.navigate("IsiArtikel1")}
                    >
                      <Text style={{ fontSize: 18 }}>Lihat Artikel</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
