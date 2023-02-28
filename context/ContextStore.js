import React, { useState } from "react";
import Mycontext from "./Mycontext";
import { Audio } from "expo-av";

const ContextStore = ({ children }) => {
  const [AllSongs, setAllSongs] = useState([]);

  const [audio, setAudio] = useState(new Audio.Sound());

  const [status, setStatus] = useState({ isLoaded: false, isPlaying: false });
  const [currentSound, setCurrentSound] = useState();
  const [currentSoundPath, setCurrentSoundPath] = useState();
  const [playMix, setPlaymix] = useState(false);
  const [MixTrack, setMixTrack] = useState([]);
  const [MixTrackList, setMixTrackList] = useState([]);

  // mix handle states

  const [isMixplaying, setMixPlaying] = useState(false);
  const [LoadedMixSongs, setLoadedMixSongs] = useState([]);
  const [currentPlayingMix, setCurrentPlayingMix] = useState([]);
  const [mixPlayingStatus, setmixPlayingStatus] = useState([]);

  const handleMixPlay = async (mixarray) => {
    if (currentPlayingMix) {
      LoadedMixSongs.forEach(async (item) => await item.stopAsync());
      LoadedMixSongs.forEach(async (item) => await item.unloadAsync());
      setLoadedMixSongs([]);
      setCurrentPlayingMix([]);
      setMixPlaying(false);
    }

    const soundsUrls = mixarray.map((item) => item.trackSource);
    const soundvolume = mixarray.map((item) => item.trackVolum);
    const sounds = soundsUrls.map((url) => new Audio.Sound());

    await Promise.all(
      sounds.map(async (s, i) => {
        await s.loadAsync({ uri: soundsUrls[i] });
      })
    );
    sounds.forEach(async (sound) =>
      setLoadedMixSongs((pre) => [...pre, sound])
    );

    sounds.forEach(
      async (sound, i) => await sound.setStatusAsync({ volume: soundvolume[i] })
    );
    sounds.forEach(async (sound) => await sound.playAsync());
    setCurrentPlayingMix(mixarray);
    setMixPlaying(true);
  };
  const handleMixStop = async () => {
    LoadedMixSongs.forEach(async (item) => await item.stopAsync());
    LoadedMixSongs.forEach(async (item) => await item.unloadAsync());
    setLoadedMixSongs([]);
    setCurrentPlayingMix([]);
    setMixPlaying(false);
  };

  const handlePlay = async (path) => {
    setCurrentSoundPath(path);
    try {
      if (currentSound) {
        await currentSound.stopAsync();
      }
      const sound = new Audio.Sound();
      await sound.loadAsync({ uri: path });
      setCurrentSound(sound);
      setStatus({ isLoaded: true, isPlaying: true });
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePause = async () => {
    try {
      await audio.pauseAsync();
      setStatus({ ...status, isPlaying: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleStop = async () => {
    try {
      await currentSound.stopAsync();
      setStatus({ ...status, isPlaying: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnload = async () => {
    try {
      await currentSound.unloadAsync();
      setStatus({ isLoaded: false, isPlaying: false });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Mycontext.Provider
      value={{
        AllSongs,
        currentSoundPath,
        status,
        currentSound,
        playMix,
        MixTrack,
        MixTrackList,
        setAllSongs,
        setMixTrackList,
        setMixTrack,
        setPlaymix,
        handlePlay,
        handlePause,
        handleStop,
        handleUnload,

        //mix play handlers

        isMixplaying,
        currentPlayingMix,
        handleMixPlay,
        handleMixStop,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default ContextStore;
