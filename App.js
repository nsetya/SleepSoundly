import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen.js";
import Kuesioner from "./src/screen/Kuesioner.js";
import Tips from "./src/screen/Tips.js";
import Musik from "./src/screen/Musik";
import Alarm from "./src/screen/Alarm";
import SleepDiaryEntriesScreen from "./src/screen/SleepDiaryEntriesScreen.js";
import EditSleepDiaryEntries from "./src/screen/EditSleepDiaryEntries.js";
// import Diary from "./src/screen/Diary.js";

import IsiArtikel1 from "./src/screen/IsiArtikel1.js";
import IsiArtikel2 from "./src/screen/IsiArtikel2.js";
import IsiArtikel3 from "./src/screen/IsiArtikel3.js";
import IsiArtikel4 from "./src/screen/IsiArtikel4.js";
import SleepDiary from "./src/screen/SleepDiary.js";

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Kuesioner"
          component={Kuesioner}
          options={{
            title: "Kuesioner PSQI",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#FFF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Alarm"
          component={Alarm}
          options={{
            title: "Alarm",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Musik"
          component={Musik}
          options={{
            title: "Musik Relaksasi",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        {/* <Stack.Screen
          name="Diary"
          component={Diary}
          options={{
            title: "Sleep Diary",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        /> */}
        <Stack.Screen
          name="SleepDiary"
          component={SleepDiary}
          options={{
            title: "Sleep Diary",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="SleepDiaryEntriesScreen"
          component={SleepDiaryEntriesScreen}
          options={{
            title: "Sleep Diary Entries",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <Stack.Screen
          name="EditSleepDiaryEntries"
          component={EditSleepDiaryEntries}
          options={{
            title: "Edit Sleep Diary Entries",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Tips"
          component={Tips}
          options={{
            title: "Tips & Trik",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="IsiArtikel1"
          component={IsiArtikel1}
          options={{
            title: "Tips & Trik",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="IsiArtikel2"
          component={IsiArtikel2}
          options={{
            title: "Tips & Trik",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="IsiArtikel3"
          component={IsiArtikel3}
          options={{
            title: "Tips & Trik",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="IsiArtikel4"
          component={IsiArtikel4}
          options={{
            title: "Tips & Trik",
            headerStyle: {
              backgroundColor: "#57C5B6",
            },
            headerTintColor: "#F9FAFC",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
