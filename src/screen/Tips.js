import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

function Tips({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Image
              source={{
                uri: "https://promkes.kemkes.go.id/imagex/content/4952253dCegah_Diabtes_Melitus_dengan_6_Langkah_Sehat_(2).png",
              }}
              style={styles.image}
            />
            <Pressable onPress={() => navigation.navigate("IsiArtikel1")}>
              <Text style={styles.text}>5 Tips Mengatasi Insomnia</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/thumbnails/004/261/144/small_2x/woman-meditating-in-nature-and-leaves-concept-illustration-for-yoga-meditation-relax-recreation-healthy-lifestyle-illustration-in-flat-cartoon-style-free-vector.jpg",
              }}
              style={styles.image}
            />
            <Pressable onPress={() => navigation.navigate("IsiArtikel2")}>
              <Text style={styles.text}>Deep Breathing</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/stretching-exercises-concept-illustration_114360-8922.jpg?size=626&ext=jpg&ga=GA1.2.1597617149.1678012934&semt=sph",
              }}
              style={styles.image}
            />
            <Pressable onPress={() => navigation.navigate("IsiArtikel3")}>
              <Text style={styles.text}>
                4 Olahraga untuk Mengatasi Insomnia
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Tips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: "65%",
    padding: 5,
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 5,
  },
  inner: {
    backgroundColor: "#EEEEEE",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 10,
    borderBottomColor: "EEEEEE",
    borderBottomWidth: 0.5,
  },
  image: {
    height: 100,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    width: 189,
    height: 31,
    marginBottom: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 5,
    marginLeft: 10,
  },
});
