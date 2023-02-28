import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StartJourneyComp = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => console.log("pressed")}>
      <ImageBackground
        source={item.image}
        style={{
          width: 264,
          height: 174,
          marginRight: 10,
          position: "relative",
        }}
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
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: 5,
            }}
          >
            <Text>NEW</Text>
          </View>
          <View>
            <Image source={require("../assets/icons/Lock.png")} />
          </View>
        </View>
        <View style={{ padding: 5, position: "absolute", bottom: 1 }}>
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: 16 }}>
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
            <Text style={{ color: "#fff" }}>{item.subTitle}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default StartJourneyComp;

const styles = StyleSheet.create({});
