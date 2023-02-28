import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SleepingRoutineComp = ({
  sourceGreater,
  sourceMain,
  time,
  title,
  title2,
  sourceMain2,
  time2,
}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", marginRight: 10, marginBottom: 8 }}>
            {title}
          </Text>
          <Image source={sourceGreater} style={{ marginBottom: 8 }} />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 8 }}>
          <Image source={sourceMain} style={styles.icon} />
          <Text style={{ color: "#fff", fontWeight: "600" }}>{time}</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", marginRight: 10, marginBottom: 8 }}>
            {title2}
          </Text>
          <Image source={sourceGreater} style={{ marginBottom: 8 }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={sourceMain2} style={styles.icon} />
          <Text style={{ color: "#fff", fontWeight: "600" }}>{time2}</Text>
        </View>
      </View>
    </View>
  );
};

export default SleepingRoutineComp;

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
});
