import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MusicHeading = ({ title }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20 }}>
          {title}
        </Text>
      </View>
      <View>
        <Image source={require("../assets/icons/arrow.png")} />
      </View>
    </View>
  );
};

export default MusicHeading;

const styles = StyleSheet.create({});
