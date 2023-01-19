import * as React from "react";
import { View, Text, ImageBackground } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={{ height: "100%", width: "100%" }}
      resizeMode="stretch"
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          onPress={() => alert('This is the "Home" screen.')}
          style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}
        >
          Home Screen
        </Text>
      </View>
    </ImageBackground>
  );
}
