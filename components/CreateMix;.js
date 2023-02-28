import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  Modal,
  TextInput,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { doc, setDoc } from "firebase/firestore";
import MixSingleSong from "./MixSingleSong";
import Mycontext from "../context/Mycontext";
import { db } from "../db/Config";

const CreateMix = ({ route }) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const saveInput = () => {
    console.log("Input Value: ", inputValue);
    closeModal();
  };

  const context = useContext(Mycontext);

  const {
    playMix,
    setPlaymix,
    MixTrack,
    MixTrackList,
    setMixTrack,
    setMixTrackList,
  } = context;
  const { AddToCreateMix } = route.params;

  // Add a new document in collection "cities"

  const HandleMixList = async () => {
    let mixlistItem = { name: inputValue, MixTrack: MixTrack };
    try {
      await setDoc(doc(db, "MixCollection", "LA"), { mixlistItem });

      console.log("saved to db");
    } catch (err) {
      console.log(err);
    }

    setMixTrackList((prevArray) => [...prevArray, mixlistItem]);

    setMixTrack([]);

    navigation.navigate("BottomNavigation");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              paddingTop: 70,
              width: "100%",

              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Enter Mix Title:</Text>
            <TextInput
              style={{
                height: 40,
                width: 200,
                borderColor: "gray",
                borderWidth: 1,
              }}
              onChangeText={(text) => setInputValue(text)}
              value={inputValue}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            ></View>
          </View>
        </View>

        <FlatList
          style={styles.list}
          data={AddToCreateMix}
          renderItem={({ item }) => <MixSingleSong singleSong={item} />}
          ListFooterComponent={
            <View style={{ width: "50%", alignSelf: "center" }}>
              {playMix ? (
                <Button
                  title="Pause All"
                  onPress={() => setPlaymix(!playMix)}
                />
              ) : (
                <Button title="Play All" onPress={() => setPlaymix(!playMix)} />
              )}
            </View>
          }
        />

        <View style={styles.button}>
          <Button title="Save Mix" onPress={HandleMixList} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  button: {
    width: 100,
    height: 40,
    position: "absolute",
    bottom: "20%",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default CreateMix;
