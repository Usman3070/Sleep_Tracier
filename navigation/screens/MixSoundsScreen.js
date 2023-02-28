import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Button, FlatList, ImageBackground, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import PlaySingleMixSong from "../../components/PlaySingleMixSong";

import { useNavigation } from "@react-navigation/native";
import Mycontext from "../../context/Mycontext";

const MixSoundsScreen = () => {
  const navigation = useNavigation();
  const context = useContext(Mycontext);
  const { MixTrackList } = context;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: "3%",
          height: 60,
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
          <MaterialIcons name="keyboard-arrow-down" size={35} color="black" />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
          }}
        >
          <AntDesign name="heart" size={20} color="black" />
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 70 }}>
        <ImageBackground
          source={require("../../assets/images/background.png")}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <View style={styles.container}>
            <FlatList
              data={MixTrackList}
              renderItem={({ item }) => (
                <PlaySingleMixSong
                  MixName={item.name}
                  MixedTracks={item.MixTrack}
                />
              )}
            />
          </View>
          <View
            style={{
              width: "70%",
              height: 40,
              position: "absolute",
              bottom: 40,
              alignSelf: "center",
            }}
          >
            <Button
              title="Create New Mix"
              onPress={() => navigation.navigate("SoundsList")}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MixSoundsScreen;
