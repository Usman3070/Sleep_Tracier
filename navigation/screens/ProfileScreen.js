import * as React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import Profile from "../../components/Profile";
import TopNav from "../../components/TopNav";

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <TopNav
        leftIcon={require("../../assets/icons/chevron-left.png")}
        title='Profile'
      />
      <ScrollView>
        <ImageBackground
          source={require("../../assets/images/background.png")}
          style={{ height: "100%", width: "100%" }}
          // resizeMode='stretch'
        >
          <Profile />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
