import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Days = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.daysBtn}>
        <Text style={styles.daysText}>S</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.daysBtn}>
        <Text style={styles.daysText}>M</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.daysBtn}>
        <Text style={styles.daysText}>T</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.daysBtn}>
        <Text style={styles.daysText}>W</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.daysBtn}>
        <Text style={styles.daysText}>T</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.daysBtn}>
        <Text style={styles.daysText}>F</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.daysBtn}>
        <Text style={styles.daysText}>S</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Days;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  daysBtn: {
    height: 40,
    width: 40,
    borderColor: "#774DCE",
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  daysText: {
    color: "#fff",
    fontWeight: "500",
  },
});
