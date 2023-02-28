import * as React from "react";
import { View, Text, ImageBackground } from "react-native";
import Btn from "../../components/Btn";
import Days from "../../components/Days";
import FactorSound from "../../components/FactorSound";
import TopNav from "../../components/TopNav";
import ClockFace from "../../components/ClockFace";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <TopNav
        leftIcon={require("../../assets/icons/TopNav.png")}
        rightIcon={require("../../assets/icons/Notification.png")}
        title="Hi, Usman"
      />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={{ height: "100%", width: "100%" }}
        resizeMode="stretch"
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ClockFace />

          <Days />
          <FactorSound />
          <TouchableOpacity
            onPress={() => navigation.navigate("Navigation_3D")}
          >
            <Btn
              source={require("../../assets/icons/Playstore.png")}
              title="3D Screens"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
