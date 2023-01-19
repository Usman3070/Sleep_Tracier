import * as React from "react";
import { View, Text, ImageBackground } from "react-native";
import CircularProgress from "../../components/CircularProgress";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={{ height: "100%", width: "100%" }}
      resizeMode="stretch"
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
      </View>
    </ImageBackground>
  );
}
