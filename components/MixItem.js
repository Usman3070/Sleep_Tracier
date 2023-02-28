import React from "react";
import { Button, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const MixItem = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: 50,
        paddingStart: 20,
      }}
    >
      <FontAwesome name="signal" size={24} color="white" />
      <Text style={{ marginStart: 15, fontSize: 20, color: "white" }}>
        helo
      </Text>
    </View>
  );
};

export default MixItem;
