import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const StatisticsComp = () => {
  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          padding: 15,

          backgroundColor: "#774DCE",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ color: "#fff" }}>It’s Not a Complete Record</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Image
              source={require("../assets/icons/close.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
        </View>
        <View>
          <Text style={{ color: "#fff" }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
        </View>
        <View>
          <View style={{ display: "flex", justifyContent: "flex-end" }}>
            <Text style={{ color: "#FF4E4E" }}>Delete This Record</Text>
          </View>
          <View>
            <Text style={{ color: "#000" }}>Solve the Problem</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatisticsComp;

const styles = StyleSheet.create({});
