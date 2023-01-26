import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileField = ({ iconSource, title, source }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        {source && <Image source={source} style={{ width: 20, height: 20 }} />}
        <Text style={{ color: "#fff", marginLeft: 8 }}>{title}</Text>
      </View>
      <View>
        <Image source={iconSource} />
      </View>
    </View>
  );
};

export default ProfileField;

const styles = StyleSheet.create({});
