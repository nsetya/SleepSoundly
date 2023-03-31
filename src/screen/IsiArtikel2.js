import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";

function IsiArtikel2({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 10, backgroundColor: "#eee" }}>
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/thumbnails/004/261/144/small_2x/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-meditation-relax-recreation-healthy-lifestyle-illustration-in-flat-cartoon-style-free-vector.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Deep Breathing Exercise</Text>
      <View>
        <Text style={styles.description}>
          {"   "}Deep Breathing adalah latihan aktivitas paru dengan teknik
          napas dalam untuk meningkatkan kapasitas paru dan ventilasi
          oksigenasi. Diaphragm Breathing adalah pernapasan yang dilakukan
          dengan inspirasi maksimal menggunakan otot perut.
        </Text>

        <Text style={styles.description}>
          1. Posisi duduk tenang (easy pose), kaki bersila dengan lutut sejajar.
        </Text>
        <Text style={styles.description}>
          2. Putar kedua bahu ke belakang dan ke depan.
        </Text>
        <Text style={styles.description}>
          3. Kemudian luruskan tulang punggung dan pastikan bagian bokong sudah
          rapat atau sudah menempel dengan matras atau tempat tidur.
        </Text>
        <Text style={styles.description}>
          4. Pejamkan mata, agar lebih fokus pada napas dan tidak mudah
          terdistraksi oleh gangguan dari sekitar.
        </Text>
        <Text style={styles.description}>
          5. Tarik napas perlahan dari hidung, kembungkan perut, kembungkan dada
          kemudian buang napas perlahan, kempiskan perut, kempiskan dada.
        </Text>
        <Text style={styles.description}>
          6. Setelah kepala terasa sudah ringan, tarik napas kembali dan ulangi
          gerakan seperti di atas.
        </Text>
        <Text style={styles.description}>7. Buka mata secara perlahan.</Text>
        <Text style={{ marginTop: 20 }}>Sumber: </Text>
        <Text
          style={styles.source}
          onPress={() =>
            Linking.openURL(
              "https://www.viva.co.id/gaya-hidup/kesehatan-intim/1485800-7-gerakan-yoga-untuk-insomnia-yang-menenangkan-tubuh-dan-pikiran"
            )
          }
        >
          Viva.co.id
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    borderRadius: 40,
    sshadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
    marginTop: 20,
  },
  image: {
    height: 250,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    margin: 5,
    textAlign: "justify",
  },
  author: {
    fontWeight: "bold",
  },
  date: {
    fontWeight: "bold",
    color: "#57C5B6",
    fontSize: 15,
  },
  source: {
    color: "#57C5B6",
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default IsiArtikel2;
