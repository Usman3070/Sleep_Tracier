import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Musics = ({ image, title, subTitle, icon1, icon2 }) => {
  return (
    <ImageBackground
      source={image}
      style={{ width: 160, height: 190, marginRight: 10, position: "relative" }}
      imageStyle={{ borderRadius: 10 }}
      resizeMode='contain'
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 8,
          position: "relative",
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
          <View>
            <Image source={icon2} />
          </View>
        </View>
      </View>
      <View style={{ padding: 5, position: "absolute", bottom: 1 }}>
        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 14 }}>
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

export default Musics;

const styles = StyleSheet.create({});
