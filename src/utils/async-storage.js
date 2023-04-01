
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ASYNC_KEY = {
    sleepDiaryEntries: '@sleepDiaryEntries',
}

export const storeData = async (key, value, callback) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value).trim(), callback);
    } catch (e) {
      console.error(e);
    }
  };

export const getData = async (key, callback) => {
    try {
        const value = await AsyncStorage.getItem(key, callback);
        return JSON.parse(value);
    } catch (e) {
        console.error(e);
        return null;
    }
};
