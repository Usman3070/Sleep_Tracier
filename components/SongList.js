import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import Musics from "./Musics";
import SongListSingle from "./SongListSingle";

const SongList = ({ songs }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
      }}
    >
      {songs.map((item) => {
        return (
          <SongListSingle
            item={item}
            icon1={require("../assets/icons/download.png")}
          />
        );
      })}
    </View>
  );
};

export default SongList;
