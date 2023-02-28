import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const StatisticsNotes = () => {
  const [inputHide, setInputHide] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const handleShow = () => {
    setInputHide(!inputHide);
  };
  const handleSubmit = () => {
    setNotes([...notes, newNote]);
    setNewNote("");
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#fff", marginRight: 5, fontWeight: "600" }}>
            Sleep Notes
          </Text>
          <TouchableOpacity onPress={handleShow}>
            <Image
              source={require("../assets/icons/pencil.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
        {inputHide && (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder='Notes'
              style={{
                backgroundColor: "#774DCE",
                width: "60%",
                marginLeft: "10%",
                borderRadius: 10,
                color: "#fff",
                padding: 5,
              }}
            />
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: "#774DCE",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View></View>
    </View>
  );
};

export default StatisticsNotes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
    marginBottom: 70,
  },
});
