import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "./screens/HomeScreen";
import MusicScreen from "./screens/MusicScreen";
import MixSoundsScreen from "./screens/MixSoundsScreen";
import { Image, Text, View, StyleSheet } from "react-native";
import ProfileScreen from "./screens/ProfileScreen";
import createNewScreen from "./screens/createNewScreen";

//Screen names
const homeName = "Home";
const musicName = "Music";
const MixList = "Statistics";
const profileName = "Profile";
const createName = "Night";

const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = "Home";
          } else if (rn === musicName) {
            iconName = "Music";
          } else if (rn === createName) {
            iconName = "Night";
          } else if (rn === MixList) {
            iconName = "Statistics";
          } else if (rn === profileName) {
            iconName = "Profile";
          }
          // You can return any component that you like here!
          return (
            // <Image source={iconName} style={{ height: 70, width: 70 }} />
            <View>
              {iconName === "Home" ? (
                <View style={styles.iconContainer}>
                  <Image
                    source={require(`../assets/icons/Home.png`)}
                    style={{ width: 26, height: 26, tintColor: color }}
                    resizeMode="contain"
                  />
                  <Text style={styles.iconText}>Home</Text>
                </View>
              ) : iconName === "Music" ? (
                <View style={styles.iconContainer}>
                  <Image
                    source={require(`../assets/icons/line-music.png`)}
                    style={{ width: 26, height: 26, tintColor: color }}
                    resizeMode="contain"
                  />
                  <Text style={styles.iconText}>Music</Text>
                </View>
              ) : iconName === "Night" ? (
                <View
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                  }}
                >
                  <Image
                    source={require(`../assets/icons/Night.png`)}
                    style={{
                      width: 100,
                      height: 100,
                      position: "absolute",
                      bottom: -15,
                      borderRadius: 70,
                      // borderColor: "#fff",
                      // borderWidth: 5,
                      backgroundColor: "#fff",
                    }}
                    resizeMode="contain"
                  />
                </View>
              ) : iconName === "Statistics" ? (
                <View style={styles.iconContainer}>
                  <Image
                    source={require(`../assets/icons/statistics.png`)}
                    style={{ width: 26, height: 26, tintColor: color }}
                    resizeMode="contain"
                  />
                  <Text style={styles.iconText}>MixList</Text>
                </View>
              ) : (
                <View style={styles.iconContainer}>
                  <Image
                    source={require(`../assets/icons/Profile.png`)}
                    style={{ width: 26, height: 26, tintColor: color }}
                    resizeMode="contain"
                  />
                  <Text style={styles.iconText}>Profile</Text>
                </View>
              )}
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#774DCE",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={musicName} component={MusicScreen} />
      <Tab.Screen name={createName} component={createNewScreen} />
      <Tab.Screen name={MixList} component={MixSoundsScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 10,
    textAlign: "center",
    color: "#774DCE",
  },
});
