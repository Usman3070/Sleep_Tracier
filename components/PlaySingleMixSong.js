import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Audio } from "expo-av";
import Mycontext from "../context/Mycontext";
import PlayerButton from "./PlayerButton";

const PlaySingleMixSong = (props) => {
  const context = useContext(Mycontext);

  const { isMixplaying, currentPlayingMix, handleMixPlay, handleMixStop } =
    context;

  const [playing, setPlaying] = useState(false);
  const [LoadSongs, setLoadedSongs] = useState([]);

  const handleplayMix = async (mixlist) => {
    const soundsUrls = mixlist.map((item) => item.trackSource);
    const soundvolume = mixlist.map((item) => item.trackVolum);

    const sounds = soundsUrls.map((url) => new Audio.Sound());

    await Promise.all(
      sounds.map(async (s, i) => {
        await s.loadAsync({ uri: soundsUrls[i] });
      })
    );
    sounds.forEach(async (sound) => setLoadedSongs((pre) => [...pre, sound]));

    sounds.forEach(
      async (sound, i) => await sound.setStatusAsync({ volume: soundvolume[i] })
    );

    sounds.forEach(async (sound) => await sound.playAsync());
    setPlaying(true);
  };

  const StopplayMix = async () => {
    LoadSongs.forEach(async (item) => await item.stopAsync());
    LoadSongs.forEach(async (item) => await item.unloadAsync());
    setLoadedSongs([]);
    setPlaying(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.audioCountContainer}>
        <Text style={styles.audioTitle}>{props.MixName}</Text>

        <View style={{ marginHorizontal: 25 }}>
          <PlayerButton
            onPress={
              isMixplaying && currentPlayingMix === props.MixedTracks
                ? () => {
                    handleMixStop();
                  }
                : () => {
                    handleMixPlay(props.MixedTracks);
                  }
            }
            iconType={
              isMixplaying && currentPlayingMix === props.MixedTracks
                ? "PAUSE"
                : "PLAY"
            }
          />
        </View>
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
    paddingHorizontal: 10,
    paddingVertical: 10,
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
    color: "white",
    paddingLeft: 15,
  },
});

export default PlaySingleMixSong;
