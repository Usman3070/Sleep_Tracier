import * as React from "react";
import { View, Text, ImageBackground } from "react-native";
import StatisticsBtn from "../../components/StatisticsBtn";
import StatisticsComp from "../../components/StatisticsComp";
import TopNav from "../../components/TopNav";

export default function StatisticsScreen({ navigation }) {
  return (
    <View>
      <TopNav
        leftIcon={require("../../assets/icons/chevron-left.png")}
        rightIcon={require("../../assets/icons/Notification.png")}
        secondRightIcon={require("../../assets/icons/Search.png")}
        title='Stories'
      />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={{ height: "100%", width: "100%" }}
        // resizeMode='stretch'
      >
        <StatisticsBtn />
        <StatisticsComp />
      </ImageBackground>
    </View>
  );
}
