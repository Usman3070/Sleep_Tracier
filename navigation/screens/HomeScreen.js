import * as React from "react";
import { View, Text, ImageBackground } from "react-native";
import CircularProgress from "../../components/CircularProgress";
import Days from "../../components/Days";
import FactorSound from "../../components/FactorSound";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={{ height: "100%", width: "100%" }}
      resizeMode="stretch"
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
        <Days />
        <FactorSound />
      </View>
    </ImageBackground>
  );
}
