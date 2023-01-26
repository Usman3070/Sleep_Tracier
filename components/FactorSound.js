import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
const FactorSound = () => {
  return (
    <View style={styles.container}>
      <View style={styles.factorContainer}>
        <Image source={require("../assets/icons/node-plus.png")} />
        <Text style={styles.text}>Factors</Text>
        <Text style={{ color: "#fff" }}>Sleep Factors</Text>
      </View>
      <View style={styles.factorContainer}>
        <Image source={require("../assets/icons/music.png")} />
        <Text style={styles.text}>Sounds</Text>
        <Text style={{ color: "#fff" }}>Better Sleep</Text>
      </View>
    </View>
  );
};

export default FactorSound;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    marginBottom: "10%",
  },
  factorContainer: {
    backgroundColor: "rgba(47, 35, 72, 0.6)",
    height: 170,
    padding: 10,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
    borderRadius: 18,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 24,
  },
});
