import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const TopNav = (props) => {
  return (
    <View style={styles.container}>
      {props.title && (
        <View style={styles.innerContainer}>
          <Image source={props.leftIcon} style={{ width: 20, height: 20 }} />
          <Text style={styles.text}>{props.title}</Text>
        </View>
      )}
      <View
        style={{ marginRight: "4%", display: "flex", flexDirection: "row" }}
      >
        {props.rightIcon && (
          <View>
            <Image source={props.rightIcon} style={{ width: 20, height: 20 }} />
          </View>
        )}
        {props.secondRightIcon && (
          <View>
            <Image
              source={props.secondRightIcon}
              style={{ marginLeft: 8, width: 20, height: 20 }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: "4%",
    marginBottom: -40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    marginLeft: 8,
    fontWeight: "500",
  },
});
