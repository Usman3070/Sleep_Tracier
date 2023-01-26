import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const StartJourneyComp = ({ image, title, subTitle }) => {
  return (
    <ImageBackground
      source={image}
      style={{ width: 264, height: 174, marginRight: 10, position: "relative" }}
      imageStyle={{ borderRadius: 10 }}
      resizeMode='contain'
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
          {title}
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
          <Text style={{ color: "#fff" }}>{subTitle}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartJourneyComp;

const styles = StyleSheet.create({});
