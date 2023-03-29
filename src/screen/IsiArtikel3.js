import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";

function IsiArtikel3({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, margin: 10, backgroundColor: "#eee" }}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/stretching-exercises-concept-illustration_114360-8922.jpg?size=626&ext=jpg&ga=GA1.2.1597617149.1678012934&semt=sph",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>4 Olahraga untuk Mengatasi Insomnia</Text>
        <View>
          <Text style={styles.description}>
            Insomnia merupakan gangguan tidur di malam hari yang terjadi secara
            terus menerus yang dapat mengganggu kesehatan tubuh, seperti merasa
            kurang berenergi, sulit konsentrasi, dan mood terganggu. Akibatnya
            banyak orang yang memilih jalan pintas untuk meminum obat tidur.
          </Text>
          <Text style={styles.description}>
            Semua bentuk olahraga bermanfaat utnuk memaksimalkan waktu tidur.
            Tapi ada beberapa yang memberikan dampak yang lebih efektif pada
            kualitas tidur sehingga dapat membantu mengatasi insomnia.
          </Text>
          <Text style={styles.description}>
            Berikut beberapa jenis olahraga yang bisa dilakukan untuk mencegah
            insomia, yaitu:
          </Text>
          <Text style={styles.description}>1. Jalan Santai</Text>
          <Text style={styles.description}>
            Berjalan santai dibawah sinar matahari pagi dipercaya dapat membantu
            mengatas insomnia. Kamu bisa rutin berjalan santai di pagi hari.
            Kebiasaaan ini dapat membantu kamu mendapatkan kualitas tidur yang
            baik.
          </Text>

          <Text style={styles.description}>2. Senam Aerobik</Text>
          <Text style={styles.description}>
            Senam aerobik mampu memperbaiki sistem kardiovaskular dalam tubuh,
            sehingga aerobik dapat menjadi olahraga yang membantu mengatasi
            masalah insomnia.
          </Text>
          <Text style={styles.description}>
            3. Kemudian luruskan tulang punggung dan pastikan bagian bokong
            sudah rapat atau sudah menempel dengan matras atau tempat tidur.
          </Text>
          <Text style={styles.description}>
            4. Pejamkan mata, agar lebih fokus pada napas dan tidak mudah
            terdistraksi oleh gangguan dari sekitar.
          </Text>
          <Text style={styles.description}>
            5. Tarik napas perlahan dari hidung, kembungkan perut, kembungkan
            dada kemudian buang napas perlahan, kempiskan perut, kempiskan dada.
          </Text>
          <Text style={styles.description}>
            6. Setelah kepala terasa sudah ringan, tarik napas kembali dan
            ulangi gerakan seperti di atas.
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
export default IsiArtikel3;
