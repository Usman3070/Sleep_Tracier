import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MusicHeading from "./MusicHeading";
import Musics from "./Musics";

const TopRated = () => {
  const data = [
    {
      key: "1",
      image: require("../assets/images/music6.png"),
      title: "Ocean Wave Therapy",
      subTitle: "64 min",
    },
    {
      key: "2",
      image: require("../assets/images/music7.png"),
      title: "Ocean Wave Therapy",
      subTitle: "64 min",
    },
    {
      key: "3",
      image: require("../assets/images/music6.png"),
      title: "Ocean Wave Therapy",
      subTitle: "64 min",
    },
    // additional items...
  ];
  return (
    <View>
      <MusicHeading title='Top Rated' />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Musics
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            icon1={require("../assets/icons/LockBG.png")}
            icon2={require("../assets/icons/download.png")}
          />
        )}
        keyExtractor={(item) => item.key}
        horizontal={true}
      />
    </View>
  );
};

export default TopRated;

const styles = StyleSheet.create({});
