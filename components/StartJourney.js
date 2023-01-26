import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import StartJourneyComp from "./StartJourneyComp";
const StartJourney = () => {
  const data = [
    {
      key: "1",
      image: require("../assets/images/music1.png"),
      title: "The River Of Sleep Hypnosis",
      subTitle: "64 min",
    },
    {
      key: "2",
      image: require("../assets/images/music1.png"),
      title: "The River Of Sleep Hypnosis",
      subTitle: "64 min",
    },
    {
      key: "3",
      image: require("../assets/images/music1.png"),
      title: "The River Of Sleep Hypnosis",
      subTitle: "64 min",
    },
    // additional items...
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <StartJourneyComp
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
        keyExtractor={(item) => item.key}
        horizontal={true}
      />
    </View>
  );
};

export default StartJourney;

const styles = StyleSheet.create({});
