import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const SingleSongBottom = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2C1C45",
        width: "90%",
        padding: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("MixList")}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="musical-notes-outline" size={20} color="white" />
            <Text
              style={{ color: "white", fontWeight: "bold", marginStart: 10 }}
            >
              Mix
            </Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "white", marginEnd: 10 }}>Starship-28</Text>
            <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <SimpleLineIcons name="clock" size={24} color="white" />
          <Text style={{ color: "white", fontWeight: "bold", marginStart: 10 }}>
            Keep Music Playing
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: "white", marginEnd: 10 }}>Infinity</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Ionicons name="repeat" size={24} color="white" />

          <Text style={{ color: "white", fontWeight: "bold", marginStart: 10 }}>
            Repeate story
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: "white", marginEnd: 10 }}>Infinity</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Feather name="power" size={24} color="white" />
          <Text style={{ color: "white", fontWeight: "bold", marginStart: 10 }}>
            Close App After Ending
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: "white", marginEnd: 10 }}>Infinity</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
        </View>
      </View>
    </View>
  );
};

export default SingleSongBottom;
