import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";

function IsiArtikel1({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 10, backgroundColor: "#eee" }}>
      <Image
        source={{
          uri: "https://promkes.kemkes.go.id/imagex/content/4952253dCegah_Diabtes_Melitus_dengan_6_Langkah_Sehat_(2).png",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>5 Tips Mengatasi Insomnia</Text>
      <View>
        <Text style={styles.description}>
          Dalam mengatasi insomnia, terdapat beberapa kebiasaan yang dapat kamu
          ubah sebelum menggunakan obat insomnia, diantaranya adalah:
        </Text>
        <Text style={styles.description}>
          1. Tidur dan bangun dalam periode waktu yang teratur.
        </Text>
        <Text style={styles.description}>
          2. Makan makanan yang mengandung rendah karbohidrat sebelum tidur.
        </Text>
        <Text style={styles.description}>
          3. Mengurangi konsumsi makanan atau minuman yang bersifat stimulan
          yang dapat membuat kita terjaga, seperti teh, kopi, alkohol dan rokok.
        </Text>
        <Text style={styles.description}>
          4. Mandi dengan air hangat 30 menit atau 1 jam sebelum tidur
        </Text>
        <Text>5. Berolahraga secara teratur</Text>
        <Text style={{ marginTop: 20 }}>Sumber: </Text>
        <Text
          style={styles.source}
          onPress={() =>
            Linking.openURL(
              "https://promkes.kemkes.go.id/5-tips-mengatasi-insomnia"
            )
          }
        >
          Kementerian Kesehatan Republik Indonesia
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
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
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
export default IsiArtikel1;
