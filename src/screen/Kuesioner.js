import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
// import RadioGroup from "react-native-radio-buttons-group";
import {
  mockAnswerP2,
  mockAnswerP4,
  mockAnswerP5,
  mockAnswerP6,
  mockAnswerP7,
  mockAnswerP8,
  mockAnswerP9,
} from "../mock/mockAnswer.js";
import Style from "../styles/kuesioner-style.js";
import RadioButtonGroup from "../components/RadioButtonGroup/index.js";
import { Button as ButtonPaper } from 'react-native-paper';

const radioButtonsListForm = [
  {
    textQuestions: '4. Berapa lama tidur anda di malam hari?',
    answers: mockAnswerP4,
    key: 'p4'
  },
  {
    textQuestions: '5. Seberapa sering masalah dibawah ini mengganggu anda?',
    answers: mockAnswerP5,
    key: 'p5'
  },
  {
    textQuestions: 'a. Tidak dapat tertidur selama 30 menit sejak berbaring',
    answers: mockAnswerP5,
    key: 'p5a'
  },
  {
    textQuestions: 'b. Terbangun ditengah malam atau dini hari',
    answers: mockAnswerP5,
    key: 'p5b'
  },
  {
    textQuestions: 'c. Terbangun untuk ke kamar mandi',
    answers: mockAnswerP5,
    key: 'p5c'
  },
  {
    textQuestions: 'd. Sulit bernafas dengan baik',
    answers: mockAnswerP5,
    key: 'p5d'
  },
  {
    textQuestions: 'e. Batuk atau mengorok',
    answers: mockAnswerP5,
    key: 'p5e'
  },
  {
    textQuestions: 'f. Kedinginan di malam hari',
    answers: mockAnswerP5,
    key: 'p5f'
  },
  {
    textQuestions: 'g. Kepanasan di malam hari',
    answers: mockAnswerP5,
    key: 'p5g'
  },
  {
    textQuestions: 'h. Mimpi buruk',
    answers: mockAnswerP5,
    key: 'p5h'
  },
  {
    textQuestions: 'i. Terasa nyeri',
    answers: mockAnswerP5,
    key: 'p5i'
  },
  {
    textQuestions: '6. Selama satu bulan terakhir, seberapa sering anda menggunakan obat tidur',
    answers: mockAnswerP6,
    key: 'p6'
  },
  {
    textQuestions: `7. Selama satu bulan terakhir, seberapa sering anda mengantuk ketika
    melakukan aktivitas di siang hari`,
    answers: mockAnswerP7,
    key: 'p7'
  },
  {
    textQuestions: `8. Selama satu bulan terakhir, berapa banyak masalah yang anda
    dapatkan dan seberapa antusias anda selesaikan permasalahan tersebut?`,
    answers: mockAnswerP8,
    key: 'p8'
  },
  {
    textQuestions: `9. Selama satu bulan terakhir, bagaimana anda menilai kepuasan tidur
    anda?`,
    answers: mockAnswerP9,
    key: 'p9'
  },
]

export default function Kuesioner({ navigation, route }) {
  
  const [sleepTime, onChangeSleepTime] = React.useState("");
  const [awakeTime, onChangeAwakeTime] = React.useState("");
  const [answers, setAnswers] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const getRentangEfisiensiTidur = () => {
    const convertSleepTime = Number(sleepTime * 60);
    const lamaWaktuSblmTidur = Number(awakeTime);
    const totalSeluruhWaktu = Number(convertSleepTime + lamaWaktuSblmTidur);
    const efisiensiValue = Number(convertSleepTime / totalSeluruhWaktu);
    const efisiensiTidur = efisiensiValue * 100;
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

  const rentangNilaiKeseluruhan = () => {
    const totalValue = Object.keys(answers)?.reduce((acc, curr) => acc + answers[curr], 0)
    const getAllValue = Number(totalValue + getRentangEfisiensiTidur());
    let val = 0;
    if (getAllValue < 5) {
      val = "Baik";
    } else {
      val = "Buruk";
    }
    return val;
  };

  const onValueChange = useCallback((key) => (val) => {
    setAnswers(prev => ({
      ...prev,
      [key]: val
    }))
  }, [])

  const onClickArticle = (screenName) => {
    setModalVisible(false)
    navigation.navigate(screenName)
  }

  const isButtonDisabled = Object.keys(answers).length < 16 || sleepTime === '' || awakeTime === '';

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
        <RadioButtonGroup 
          radioButtons={mockAnswerP2}
          onValueChange={onValueChange('p2')}
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
        {
          radioButtonsListForm?.map(r => (
            <View key={r.key}>
              <Text style={Style.pertanyaan}>
                {r.textQuestions}
              </Text>
              <RadioButtonGroup 
                radioButtons={r.answers}
                onValueChange={onValueChange(r.key)}
              />
            </View>
          ))
        }
        <TouchableOpacity onPress={() => setModalVisible(true)}
            style={Style.buttonSubmit}>
          <ButtonPaper 
            buttonColor="#00C6AB"
            mode="contained"
            disabled={isButtonDisabled}
            style={{
              width: '100%',
              height: 45,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10
            }}
            >
            Submit
          </ButtonPaper>
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
                      onPress={() => onClickArticle('IsiArtikel4')}
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
                      onPress={() => onClickArticle('IsiArtikel1')}
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
