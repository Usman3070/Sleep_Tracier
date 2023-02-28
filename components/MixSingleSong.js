import Checkbox from "expo-checkbox";
import React, { useContext, useEffect, useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { Audio } from "expo-av";
import PlayerButton from "./PlayerButton";
import Slider from "@react-native-community/slider";
import Mycontext from "../context/Mycontext";

const MixSingleSong = (props) => {
  const context = useContext(Mycontext);

  const { playMix, MixTrack, setMixTrack } = context;
  const [PlaySong, setPlaySong] = useState(true);
  const [currentsong, setcurrentsong] = useState();
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (playMix) {
      setPlaySong(false);
      playSound(props.singleSong.source);
    } else {
      setPlaySong(true);
      StopSong();
    }
  }, [playMix]);
  async function playSound(songurl) {
    setPlaySong(false);

    const { sound } = await Audio.Sound.createAsync(
      { uri: songurl },
      { shouldPlay: true }
    );
    setcurrentsong(sound);

    await Audio.setAudioModeAsync({
      staysActiveInBackground: true,
    });

    await sound.playAsync();
  }
  async function setSoundVolume() {
    if (currentsong) {
      await currentsong.setStatusAsync({ volume: volume });
    }
  }

  useEffect(() => {
    setSoundVolume();
  }, [volume]);

  useEffect(() => {
    let newtrack = { trackSource: props.singleSong.source, trackVolum: volume };

    let tracexist = MixTrack.filter(
      (item) => item.trackSource == props.singleSong.source
    );

    if (tracexist) {
      setMixTrack((prevArray) => [
        ...prevArray.filter(
          (obj) => obj.trackSource !== props.singleSong.source
        ),
        newtrack,
      ]);
    } else {
      setMixTrack((prevArray) => [...prevArray, newtrack]);
    }
  }, [props.singleSong, volume]);

  async function StopSong() {
    if (currentsong) {
      await currentsong.stopAsync();
      await currentsong.unloadAsync();
      setPlaySong(true);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.audioControllers}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={styles.audioTitle}>{props.singleSong.name}</Text>

              <Text style={styles.audioArtist}>{props.singleSong.artist}</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 25 }}>
            <PlayerButton
              onPress={
                PlaySong
                  ? () => {
                      playSound(props.singleSong.source);
                    }
                  : () => {
                      StopSong();
                    }
              }
              iconType={PlaySong ? "PLAY" : "PAUSE"}
            />
          </View>
        </View>
        {PlaySong ? null : (
          <Slider
            style={{
              width: 250,
              height: 5,
              alignSelf: "center",
              marginBottom: 15,
            }}
            minimumValue={0.0}
            maximumValue={1.0}
            minimumTrackTintColor="#000"
            maximumTrackTintColor="#000000"
            value={volume}
            onValueChange={(e) => {
              setVolume(parseFloat(e.toFixed(1)));
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  audioControllers: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  audioCountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
  },
  checkbox: {
    margin: 8,
  },
  midBannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  audioTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 15,
  },
  audioArtist: {
    fontSize: 16,
    color: "#fff",
    paddingLeft: 15,
  },
});

export default MixSingleSong;
