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
import SongList from "../../components/SongList";
import SpecialOffer from "../../components/SpecialOffer";
import StartJourney from "../../components/StartJourney";
import TopNav from "../../components/TopNav";
import TopRated from "../../components/TopRated";
import Mycontext from "../../context/Mycontext";

export default function MusicScreen({ navigation }) {
  const context = React.useContext(Mycontext);

  const { AllSongs } = context;

  const [Songs, setSongs] = React.useState([]);
  const [SongCategory, setSongCategory] = React.useState();

  React.useEffect(() => {
    if (SongCategory) {
      const fsong = AllSongs.filter((song) => song.category == SongCategory);
      setSongs(fsong);
    } else {
      setSongs([]);
    }
  }, [SongCategory]);

  return (
    <View>
      <TopNav
        leftIcon={require("../../assets/icons/TopNav.png")}
        rightIcon={require("../../assets/icons/Notification.png")}
        secondRightIcon={require("../../assets/icons/Search.png")}
        title="Music"
      />
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={{ height: "100%", width: "100%" }}
        // resizeMode='stretch'
      >
        <Category setSongCategory={setSongCategory} />
        {SongCategory && Songs ? (
          <SongList songs={Songs} />
        ) : (
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
        )}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {},
});
