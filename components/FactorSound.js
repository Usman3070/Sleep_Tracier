import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FactorSound = () => {
  return (
    <View style={styles.container}>
      <View style={styles.factorContainer}>
        <Image source={require("../assets/icons/node-plus.png")} />
      </View>
      <Text>FactorSound</Text>
    </View>
  );
};

export default FactorSound;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
  },
  factorContainer: {
    backgroundColor: "rgba(47, 35, 72, 0.6)",
    height: 70,
    padding: 10,
  },
});
