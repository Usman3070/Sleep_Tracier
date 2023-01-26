import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Btn = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.source} style={{ marginRight: 8, marginLeft: -8 }} />
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#774DCE",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 48,
    width: 197,
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
  },
});
