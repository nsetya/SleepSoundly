import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";

function Isiartikel4({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, margin: 10, backgroundColor: "#eee" }}>
        <Image
          source={{
            uri: "http://clipart.coolclips.com/480/vectors/tf05310/CoolClips_vc062771.png",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>
          10 Fakta Unik Seputar Tidur Yang Bisa Membuat Anda Kaget
        </Text>
        <View>
          <Text style={styles.description}>
            Tidur adalah kegiatan sehari-hari yang dibutuhkan manusia. Karena
            setiap hari dilakukan, kadang tidur dianggap remeh. Padahal, tidur
            tidak hanya sekedar memejamkan mata dan bermimpi. Dilansir oleh
            sleepfoundation.org, inilah beberapa fakta unik tentang tidur.
          </Text>
          <Text style={styles.description}>
            1. Manusia adalah satu-satunya mamalia yang mau menunda tidur.
            Sedangkan di kalangan mamalia lain, jika mengantuk, mereka akan
            langsung tidur.
          </Text>
          <Text style={styles.description}>
            2. Orang yang baru cerai atau putus cinta, biasanya lebih mungkin
            mengalami insomnia atau gangguan sulit tidur yang menyiksa.
          </Text>
          <Text style={styles.description}>
            3. Kafein adalah penunda tidur paling populer di dunia. Selain dalam
            bentuk kopi, kafein ada di dalam teh, cokelat dan beberapa minuman
            ringan.
          </Text>
          <Text style={styles.description}>
            4. Secara umum, orang dewasa membutuhkan tidur 7 hingga 9 jam setiap
            malam. Namun beberapa individu dapat tidur hanya 6 jam setiap hari.
          </Text>
          <Text style={styles.description}>
            5. Tidur sama pentingnya dengan makan dan olahraga.
          </Text>
          <Text style={styles.description}>
            6. Orang yang sering bekerja shift malam dilaporkan lebih mungkin
            mengalami gangguan kesehatan kronis seperti jantung dan pencernaan.
          </Text>
          <Text style={styles.description}>
            7. Hal tersebut disebabkan karena tubuh tidak akan pernah
            menyesuaikan jadwal shift kerja Anda.
          </Text>
          <Text style={styles.description}>
            8. Bayi yang baru lahir akan tidur 10,5 jam hingga 18 jam setiap
            hari. Biasanya mereka masih belum punya jam tidur yang teratur.
          </Text>
          <Text style={styles.description}>
            9. Mendengkur adalah gangguan tidur yang terbanyak. Sekitar 90 juta
            orang dewasa di Amerika mengalaminya.
          </Text>
          <Text style={styles.description}>
            10. Orang yang kurang tidur akan berpengaruh pada selera makannya.
            Biasanya nafsu makan mereka bertambah karena kacaunya produksi
            hormon leptin.
          </Text>
          <Text style={styles.description}>
            Itulah beberapa fakta tidur yang bisa menambah pengetahuan Anda.
            Selalu tidur tepat waktu dan cukup setiap hari.
          </Text>
          <Text style={{ marginTop: 20 }}>Sumber: </Text>
          <Text
            style={styles.source}
            onPress={() =>
              Linking.openURL(
                "https://www.fimela.com/beauty/read/3734307/10-fakta-unik-seputar-tidur-yang-bisa-membuat-anda-kaget"
              )
            }
          >
            Fimela.com
          </Text>
        </View>
      </View>
    </ScrollView>
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
export default Isiartikel4;
