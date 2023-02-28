import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Category = ({ setSongCategory }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <MaterialIcons
          name="border-all"
          size={24}
          color="white"
          onPress={() => setSongCategory(null)}
        />
        <Text style={styles.text}>All</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="ios-rainy-outline"
          size={24}
          color="white"
          onPress={() => setSongCategory("rain")}
        />
        <Text style={styles.text}>Rain</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name="leaf-maple"
          size={24}
          color="white"
          onPress={() => setSongCategory("nature")}
        />
        <Text style={styles.text}>Nature</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name="heart-multiple-outline"
          size={24}
          color="white"
          onPress={() => setSongCategory("life")}
        />
        <Text style={styles.text}>Life</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="mic" size={20} color="white" />
        <Text style={styles.text}>ASMR</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name="meditation" size={24} color="white" />
        <Text style={styles.text}>Meditatio</Text>
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
