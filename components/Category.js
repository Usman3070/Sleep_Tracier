import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Category = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/icons/All.png")} />
        <Text style={styles.text}>All</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/icons/Rain.png")} />
        <Text style={styles.text}>Rain</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/icons/Nature.png")} />
        <Text style={styles.text}>Nature</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/icons/Heart.png")} />
        <Text style={styles.text}>Life</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/icons/Mic.png")} />
        <Text style={styles.text}>ASMR</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/icons/yoga.png")} />
        <Text style={styles.text}>Meditation</Text>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "25%",
  },
  text: {
    color: "#fff",
  },
});
