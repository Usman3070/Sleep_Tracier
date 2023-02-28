import { SimpleLineIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Btn from "./Btn";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Audio } from "expo-av";
import { Entypo } from "@expo/vector-icons";

const PlaceholderImage = require("../assets/images/playsongbg.png");
const Playmusic = require("../assets/images/playmusic.png");

const PlaySongScreen = ({ route }) => {
  const { item } = route.params;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sound, setSound] = useState(null);
  const [minuts, setminuts] = useState(0);

  const togglePlay = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const forward10Seconds = async () => {
    const currentTime = await sound.getCurrentTimeAsync();
    await sound.setCurrentTime(currentTime + 10);
  };

  const loadsong = async () => {
    if (!sound) {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync({ uri: item.source });
        setSound(soundObject);

        const status = await soundObject.getStatusAsync();
        const mnt = status.durationMillis / 60;
        setminuts(Math.floor(mnt / 1000));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    loadsong();
  }, []);

  useEffect(() => {
    let intervalId = null;
    if (sound && isPlaying) {
      intervalId = setInterval(async () => {
        const status = await sound.getStatusAsync();
        setProgress(status.positionMillis / status.durationMillis);
      }, 500);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, sound]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View
        style={{
          position: "absolute",
          top: "3%",
          height: 50,
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
          <MaterialIcons name="keyboard-arrow-down" size={35} color="white" />

          <Text style={{ color: "white", marginStart: 10 }}>Quick Sleep</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
          }}
        >
          <AntDesign name="heart" size={20} color="white" />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          alignItems: "center",

          top: "10%",
          width: "100%",
        }}
      >
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AnimatedCircularProgress
              size={200}
              width={10}
              fill={progress * 100}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
            >
              {(fill) => (
                <TouchableOpacity onPress={togglePlay}>
                  <Text style={{ fontSize: 40 }}>
                    {isPlaying ? (
                      <AntDesign name="pause" size={44} color="white" />
                    ) : (
                      <Entypo name="google-play" size={44} color="white" />
                    )}
                  </Text>
                </TouchableOpacity>
              )}
            </AnimatedCircularProgress>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SimpleLineIcons name="clock" size={15} color="white" />
            <Text style={{ color: "white", marginStart: 10 }}>
              {minuts} minuts
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            width: "60%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <Feather name="clock" size={34} color="white" />

          <MaterialIcons
            name="forward-10"
            size={34}
            color="white"
            onPress={forward10Seconds}
          />
          <MaterialIcons name="forward-10" size={34} color="white" />

          <Ionicons name="md-repeat" size={34} color="white" />
        </View>
        <View
          style={{
            display: "flex",

            flexDirection: "column",

            marginTop: 50,
          }}
        >
          <Text style={{ color: "white" }}>Single Session</Text>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            Manusia Setengah Dewa
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            width: "70%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <Feather name="clock" size={34} color="white" />

          <Feather name="download-cloud" size={34} color="white" />
          <Feather name="heart" size={34} color="white" />
          <MaterialIcons name="playlist-add" size={34} color="white" />
          <AntDesign name="sound" size={34} color="white" />
        </View>

        <View style={{ marginTop: 60 }}>
          <Btn
            source={require("../assets/icons/yoga.png")}
            title="Track My Sleap"
          />
        </View>
      </View>
    </View>
  );
};

export default PlaySongScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "rgba(47, 35, 72, 0.6)",
    backgroundColor: "#35234A",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    borderTopLeftRadius: 100,
    alignSelf: "flex-end",
  },
});
