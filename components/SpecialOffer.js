import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SpecialOffer = () => {
  return (
    <View style={{ marginBottom: 100 }}>
      <Text
        style={{
          color: "#fff",
          fontWeight: "500",
          fontSize: 20,
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Special Offer
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/specialOffer.png")}
          style={{ borderRadius: 10 }}
        />
      </View>
    </View>
  );
};

export default SpecialOffer;

const styles = StyleSheet.create({});
