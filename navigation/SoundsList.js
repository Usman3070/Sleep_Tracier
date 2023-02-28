import React, { useContext, useState } from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Category from "../components/Category";
import MixListSingle from "../components/MixListSingle";
import SongListSingle from "../components/SongListSingle";
import TopNav from "../components/TopNav";
import Mycontext from "../context/Mycontext";
import { useNavigation } from "@react-navigation/native";

const SoundsList = () => {
  const navigation = useNavigation();

  const context = useContext(Mycontext);
  const [AddToCreateMix, setAddToCreateMix] = useState([]);

  const { AllSongs } = context;

  console.log("mixsongs", AddToCreateMix.length);

  return (
    <View>
      <TopNav
        leftIcon={require("../assets/icons/TopNav.png")}
        rightIcon={require("../assets/icons/Notification.png")}
        secondRightIcon={require("../assets/icons/Search.png")}
        title="Sounds"
      />
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={style.imgbg}
      >
        <Category />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
          }}
        >
          {AllSongs.map((item) => {
            return (
              <MixListSingle
                item={item}
                AddToCreateMix={AddToCreateMix}
                setAddToCreateMix={setAddToCreateMix}
              />
            );
          })}
        </View>
        <View
          style={{
            width: "70%",
            height: 40,
            position: "absolute",
            bottom: 50,
            alignSelf: "center",
          }}
        >
          <Button
            title="Create New"
            onPress={() => navigation.navigate("CreateMix", { AddToCreateMix })}
          ></Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  imgbg: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

export default SoundsList;
