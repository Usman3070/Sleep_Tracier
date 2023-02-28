import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Bloom_3D from "../3D/Screens/Bloom_hdr_3D/Bloom_3D";
import Box3D from "../3D/Screens/Box3D";
import WatchingTower from "../3D/Screens/WatchingTower";

import Iphone3D from "../3D/Screens/Iphone3D";
import Rig3D from "../3D/Screens/rig_3D/Rig3D";

import { StyleSheet, Text, View } from "react-native";

//Screen names
const homeName = "Home";
const musicName = "Music";
const MixList = "Statistics";
const profileName = "Profile";
const createName = "Night";

const Tab = createBottomTabNavigator();
function Navigation_3D() {
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
                  <Text style={styles.iconText}>Box</Text>
                </View>
              ) : iconName === "Music" ? (
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>IPhone</Text>
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
                  <Text>Tower</Text>
                </View>
              ) : iconName === "Statistics" ? (
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>Rig</Text>
                </View>
              ) : (
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>Bloon</Text>
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
      <Tab.Screen name={homeName} component={Box3D} />
      <Tab.Screen name={musicName} component={Iphone3D} />
      <Tab.Screen name={createName} component={WatchingTower} />
      <Tab.Screen name={MixList} component={Rig3D} />
      <Tab.Screen name={profileName} component={Bloom_3D} />
    </Tab.Navigator>
  );
}

export default Navigation_3D;
const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 15,

    textAlign: "center",
    color: "#774DCE",
  },
});
