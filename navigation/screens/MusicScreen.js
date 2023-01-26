import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import Category from "../../components/Category";
import HealingMusic from "../../components/HealingMusic";
import MusicHeading from "../../components/MusicHeading";
import RecentlyPlayed from "../../components/RecentlyPlayed";
import SleepHypnosis from "../../components/SleepHypnosis";
import SpecialOffer from "../../components/SpecialOffer";
import StartJourney from "../../components/StartJourney";
import TopNav from "../../components/TopNav";
import TopRated from "../../components/TopRated";

export default function MusicScreen({ navigation }) {
  return (
    <View>
      <TopNav
        leftIcon={require("../../assets/icons/TopNav.png")}
        rightIcon={require("../../assets/icons/Notification.png")}
        secondRightIcon={require("../../assets/icons/Search.png")}
        title='Music'
      />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={{ height: "100%", width: "100%" }}
        // resizeMode='stretch'
      >
        <Category />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: 24,
                marginBottom: 15,
              }}
            >
              Start Your Journey
            </Text>
            <StartJourney />
            <RecentlyPlayed />
            <HealingMusic />
            <TopRated />
            <SleepHypnosis />
            <SpecialOffer />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {},
});
