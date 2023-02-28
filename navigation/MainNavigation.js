import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./BottomNavigation";

import SingleSong from "../components/SingleSong";
import PlaySongScreen from "../components/PlaySongScreen";
import MixList from "../components/MixList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../db/Config";
import Mycontext from "../context/Mycontext";
import SoundsList from "./SoundsList";
import CreateMix from "../components/CreateMix;";
import Navigation_3D from "./3D/Navigation_3D";
const Stack = createStackNavigator();

const MainNavigation = () => {
  const context = useContext(Mycontext);

  const { setAllSongs } = context;

  const getdata = async () => {
    const querySnapshot = await getDocs(collection(db, "MusicCollection"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setAllSongs(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <Stack.Navigator initialRouteName="BottomNavigation">
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleSong"
        component={SingleSong}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaySongScreen"
        component={PlaySongScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MixList"
        component={MixList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SoundsList"
        component={SoundsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateMix"
        component={CreateMix}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Navigation_3D" component={Navigation_3D} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
