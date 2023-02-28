import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const StatisticsBtn = () => {
  const handlePress = () => {
    Alert.alert("Hellow", "and also Hello");
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "25%",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <View>
          <TouchableOpacity style={styles.btnLeft} onPress={handlePress}>
            <Text style={styles.textLeft}>Journal</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnRight}>
            <Text style={styles.textRight}>Statistics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StatisticsBtn;

const styles = StyleSheet.create({
  btnLeft: {
    backgroundColor: "#774DCE",
    borderTopLeftRadius: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    marginRight: 2,
  },
  btnRight: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  textLeft: {
    color: "#fff",
  },
  textRight: {
    color: "#000",
  },
});
