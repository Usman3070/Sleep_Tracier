import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const MixList = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: "3%",
          height: 60,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",

          paddingStart: 10,
          paddingEnd: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="keyboard-arrow-down" size={35} color="black" />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
          }}
        >
          <AntDesign name="heart" size={20} color="black" />
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 20 }}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          style={{ height: "100%", width: "100%" }}
        ></ImageBackground>
      </View>
    </View>
  );
};

export default MixList;
