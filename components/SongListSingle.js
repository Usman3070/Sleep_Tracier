import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
const SongListSingle = ({ item, icon1 }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("PlaySongScreen", { item })}
      >
        <ImageBackground
          source={{ uri: item.cover }}
          style={{ width: 150, height: 190, marginRight: 10 }}
          imageStyle={{ borderRadius: 10 }}
          resizeMode="contain"
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 8,
            }}
          >
            {/* <View
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 5,
              position: "absolute",
              borderTopEndRadius: 15,
              borderBottomEndRadius: 15,
              top: 20,
            }}
          >
            <Text>NEW</Text>
          </View> */}
            <View style={{ position: "absolute", right: 5, top: 5 }}>
              <View style={{ marginBottom: 5 }}>
                <Image source={icon1} />
              </View>
            </View>
          </View>
          <View style={{ padding: 5, position: "absolute", bottom: 1 }}>
            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 14 }}>
              {item.title}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/icons/clock.png")}
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#fff" }}>{item.artist}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
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
    color: "#303d49",
    paddingLeft: 15,
  },
  audioArtist: {
    fontSize: 16,
    color: "#303d49",
    paddingLeft: 15,
  },
});

export default SongListSingle;
