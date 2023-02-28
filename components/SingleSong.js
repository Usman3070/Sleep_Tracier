import React from "react";
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Btn from "./Btn";
import SingleSongBottom from "./SingleSongBottom";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";

const SingleSong = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: item.cover }}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              position: "absolute",
              top: "4%",
              height: 50,
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
              <Ionicons name="chevron-back-sharp" size={28} color="white" />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                alignItems: "center",
                paddingEnd: 20,
              }}
            >
              <MaterialIcons
                name="notifications-none"
                size={22}
                color="white"
                style={{ marginEnd: 10 }}
              />
              <AntDesign name="hearto" size={20} color="white" />
            </View>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              alignSelf: "center",
            }}
          >
            {item.title}
          </Text>
        </ImageBackground>
      </View>

      <View style={{ flex: 1.5 }}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginTop: -30,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("PlaySongScreen", { item })}
            >
              <Btn
                source={require("../assets/icons/Playstore.png")}
                title="Play"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white" }}>img</Text>
            <Text style={{ marginStart: 10, marginEnd: 10, color: "white" }}>
              Narated By {item.artist}
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
          >
            <SimpleLineIcons name="clock" size={24} color="white" />
            <Text style={{ marginStart: 10, marginEnd: 10, color: "white" }}>
              duration
            </Text>
            <Text style={{ color: "white" }}>12mn</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "white" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
          >
            <Text style={{ color: "white" }}>Author</Text>
            <Text style={{ color: "white" }}>jun</Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <SingleSongBottom />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SingleSong;
