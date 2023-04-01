import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { Audio } from "expo-av";
import { songs } from "../mock/mockSong.js";
import * as DocumentPicker from "expo-document-picker";
import { FileSystem } from "expo-file-system";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-virtualized-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Musik({ navigation }) {
  const [sound, setSound] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [musicList, setMusicList] = useState(songs);
  const [showModal, setShowModal] = useState(false);

  async function playSound(item) {
    if (sound !== null) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(item.source);
    setSound(newSound);
    setCurrentSong(item);
    setIsPlaying(true);
    await newSound.playAsync();
  }

  async function pauseSound() {
    if (sound !== null) {
      setIsPlaying(false);
      await sound.pauseAsync();
    }
  }

  function toggleFavorite(item) {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((f) => f !== item));
    } else {
      setFavorites([...favorites, item]);
    }

    // Find the index of the item in the music list
    const index = musicList.findIndex((i) => i.id === item.id);

    // If the item is in the music list, update its favorite status
    if (index !== -1) {
      const newList = [...musicList];
      newList[index] = {
        ...newList[index],
        isFavorite: !newList[index].isFavorite,
      };
      setMusicList(newList);
    }
  }

  const storeMusic = async (musicList) => {
    try {
      await AsyncStorage.setItem("@musicList", JSON.stringify(musicList));
    } catch (error) {
      console.log("Error storing music:", error);
    }
  };

  async function handleUploadMusic() {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
      });

      if (result.type === "success") {
        const { name, uri } = result;
        const newMusic = {
          id: musicList.length + 1,
          title: name,
          duration: "0:00",
          source: { uri },
          isFavorite: false,
        };

        const { sound: newSound } = await Audio.Sound.createAsync(
          newMusic.source
        );
        setShowModal(false);
        setSound(newSound);
        setCurrentSong(newMusic);
        setIsPlaying(true);
        await newSound.playAsync();

        setMusicList([...musicList, newMusic]);
        storeMusic([...musicList, newMusic]); // add this line
      }
    } catch (error) {
      console.log("Error uploading music:", error);
    }
  }

  useEffect(() => {
    async function getMusic() {
      try {
        const music = await AsyncStorage.getItem("@musicList");
        if (music !== null) {
          setMusicList(JSON.parse(music));
        }
      } catch (error) {
        console.log("Error getting music:", error);
      }
    }
    getMusic();
  }, []);

  function renderItem({ item }) {
    const isCurrentSong = currentSong?.id === item.id;
    const isFavorite = favorites.includes(item);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            isPlaying && isCurrentSong ? pauseSound() : playSound(item)
          }
        >
          {isPlaying && isCurrentSong ? (
            <Image
              source={{
                uri: "https://img.icons8.com/stickers/100/null/pause-squared.png",
              }}
              style={styles.playIcon}
            />
          ) : (
            <Image
              source={{
                uri: "https://img.icons8.com/plasticine/100/null/play.png",
              }}
              style={styles.playIcon}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
        <TouchableOpacity onPress={() => toggleFavorite(item)}>
          {isFavorite ? (
            <Image
              source={{
                uri: "https://img.icons8.com/dusk/64/null/hearts.png",
              }}
              style={styles.favoriteIcon}
            />
          ) : (
            <Image
              source={{
                uri: "https://img.icons8.com/wired/64/null/hearts.png",
              }}
              style={styles.favoriteIcon}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={showModal === false ? "" : styles.blurredContainer}>
      <ScrollView>
        <Text style={styles.text}>Musik Relaksasi</Text>
        <FlatList
          data={musicList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 24,
          }}
        >
          <Button buttonColor="#00C6AB" style={{ width: 256 }}>
            <Text style={{ color: "#ffffff" }}>Unggah Musik</Text>
          </Button>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(false);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 14,
            }}
          >
            <View
              style={{
                padding: 24,
                backgroundColor: "#82B8AD",
                borderRadius: 10,
              }}
            >
              <Text style={styles.modalText}>
                Pastikan bahwa musik yang Anda unggah memiliki beberapa
                karakteristik berikut:
              </Text>
              <Text> </Text>
              <Text style={styles.modalText}>
                1. Memiliki melodi yang lembut dan tenang
              </Text>
              <Text style={styles.modalText}>2. Mengandung bunyi alam</Text>
              <Text style={styles.modalText}>
                3. Tidak terlalu banyak variasi melodi dan ritme
              </Text>
              <Text style={styles.modalText}>4. Tanpa vokal atau lirik</Text>
              <Text style={styles.modalText}>
                5. Memiliki tempo yang lambat
              </Text>
              <Text> </Text>
              <Text> </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 24,
                }}
              >
                <Button
                  buttonColor="#83d4b6"
                  style={{ width: "50%" }}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={{ color: "#ffffff" }}>Tinjau Kembali</Text>
                </Button>
                <Button
                  buttonColor="#83d4b6"
                  style={{ width: "50%" }}
                  onPress={handleUploadMusic}
                >
                  <Text style={{ color: "#ffffff" }}>Unggah</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 12,
    paddingTop: 27,
    fontSize: 24,
    marginBottom: 24,
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  playIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    paddingLeft: 10,
  },
  duration: {
    fontSize: 16,
    textAlign: "right",
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 12,
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
  blurredContainer: {
    opacity: 0.1,
  },
  modalText: {
    color: "#F4F7F6",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Musik;
