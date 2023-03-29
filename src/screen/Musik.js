import React from "react";
import { View, Text, Image, ProgressBarAndroid } from "react-native";
import * as Progress from "react-native-progress";

function Musik({ navigation }) {
  return (
    <View>
      <Text style={{ marginLeft: 27, fontSize: 24, marginTop: 27 }}>
        Musik Relaksasi
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://img.icons8.com/plumpy/24/null/play-button-circled--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 27, marginTop: 71 }}
        />
        <Text style={{ marginLeft: 20, marginTop: 71 }}>Replenish</Text>
        <Text style={{ marginLeft: 150, marginTop: 71 }}>09.42</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 20, marginTop: 71 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://img.icons8.com/plumpy/24/null/play-button-circled--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 27, marginTop: 21 }}
        />
        <Text style={{ marginLeft: 20, marginTop: 21 }}>Timing</Text>
        <Text style={{ marginLeft: 169, marginTop: 21 }}>08.45</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 20, marginTop: 21 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://img.icons8.com/plumpy/24/null/play-button-circled--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 27, marginTop: 21 }}
        />
        <Text style={{ marginLeft: 20, marginTop: 21 }}>Sanctuary</Text>
        <Text style={{ marginLeft: 149, marginTop: 21 }}>10.42</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 20, marginTop: 21 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://img.icons8.com/plumpy/24/null/play-button-circled--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 27, marginTop: 21 }}
        />
        <Text style={{ marginLeft: 20, marginTop: 21 }}>Motion</Text>
        <Text style={{ marginLeft: 170, marginTop: 21 }}>08.33</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 20, marginTop: 21 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://img.icons8.com/plumpy/24/null/play-button-circled--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 27, marginTop: 21 }}
        />
        <Text style={{ marginLeft: 20, marginTop: 21 }}>Floating</Text>
        <Text style={{ marginLeft: 163, marginTop: 21 }}>09.21</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 20, marginTop: 21 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://img.icons8.com/plumpy/24/null/play-button-circled--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 27, marginTop: 21 }}
        />
        <Text style={{ marginLeft: 20, marginTop: 21 }}>Earth</Text>
        <Text style={{ marginLeft: 182, marginTop: 21 }}>10.25</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 20, marginTop: 21 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://img.icons8.com/plumpy/24/null/play-button-circled--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 27, marginTop: 21 }}
        />
        <Text style={{ marginLeft: 20, marginTop: 21 }}>Blossom</Text>
        <Text style={{ marginLeft: 160, marginTop: 21 }}>09.42</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 20, marginTop: 21 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://img.icons8.com/plumpy/24/null/play-button-circled--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 27, marginTop: 21 }}
        />
        <Text style={{ marginLeft: 20, marginTop: 21 }}>Blessing</Text>
        <Text style={{ marginLeft: 162, marginTop: 21 }}>08.40</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 20, marginTop: 21 }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#82B8AD80",
          width: 367,
          height: 120,
          marginLeft: 20,
          marginTop: 162,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/flat-round/64/null/play--v1.png",
          }}
          style={{ width: 52, height: 52 }}
        />
        <View
          style={{
            marginLeft: 16,
          }}
        >
          <Text>Replenish</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Progress.Bar progress={0.3} width={160} color={"#518578"} />
            <Text style={{ marginLeft: 30 }}>03.59</Text>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/null/like--v1.png",
              }}
              style={{ width: 24, height: 24, marginLeft: 10 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Musik;
