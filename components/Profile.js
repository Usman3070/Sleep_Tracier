import { Image, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import ProfileField from "./ProfileField";
import Slider from "@react-native-community/slider";
const Profile = () => {
  const [switchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn(!switchOn);
  };
  return (
    <View
      style={{
        paddingLeft: 30,
        paddingTop: 90,
        paddingRight: 30,
        marginBottom: 50,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <View>
          <Image
            source={require("../assets/images/profile.png")}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            //   alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20 }}>
              Title goes here
            </Text>
          </View>
          <View>
            <Text style={{ color: "#fff" }}>SubTitle goes here</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          backgroundColor: "rgba(0, 0, 0, 0.14)",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <ProfileField
          source={require("../assets/icons/profileIcon.png")}
          title='User Profile'
          iconSource={require("../assets/icons/greater.png")}
        />
      </View>

      <View
        style={{
          padding: 15,
          backgroundColor: "rgba(0, 0, 0, 0.14)",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <View style={{ marginBottom: 15 }}>
          <ProfileField
            source={require("../assets/icons/clock-icon.png")}
            title='User Profile'
            iconSource={require("../assets/icons/greater.png")}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#2F2348",
            borderBottomWidth: 1,
            width: "100%",
            marginBottom: 20,
          }}
        />
        <View>
          <ProfileField
            source={require("../assets/icons/bell-notification.png")}
            title='User Profile'
            iconSource={require("../assets/icons/greater.png")}
          />
        </View>
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: "rgba(0, 0, 0, 0.14)",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <View>
          <ProfileField
            title='Sound Setting'
            iconSource={require("../assets/icons/greater.png")}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#2F2348",
            borderBottomWidth: 1,
            width: "100%",
            marginBottom: 20,
            marginTop: 20,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/icons/sound-mute.png")}
            style={{ height: 20, width: 20 }}
          />
          <Slider
            style={{ width: 200, height: 30 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor='#774DCE'
            maximumTrackTintColor='#fff'
            thumbTintColor='#fff'
          />
          <Image
            source={require("../assets/icons/sound-on.png")}
            style={{ height: 20, width: 20 }}
          />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.14)",
          borderRadius: 10,
          padding: 5,
          marginBottom: 20,
        }}
      >
        <View>
          <Text style={{ color: "#fff", marginLeft: 8 }}>Sleep Recording</Text>
        </View>
        <View>
          <Switch
            value={switchOn}
            onValueChange={toggleSwitch}
            trackColor={{ false: "gray", true: "#fff" }}
            thumbColor={switchOn ? "#774DCE" : "#fff"}
          />
        </View>
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: "rgba(0, 0, 0, 0.14)",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#fff", marginLeft: 8, marginBottom: 20 }}>
          Others
        </Text>
        <View
          style={{
            borderBottomColor: "#2F2348",
            borderBottomWidth: 1,
            width: "100%",
            marginBottom: 20,
          }}
        />
        <View style={{ marginBottom: 20 }}>
          <ProfileField
            source={require("../assets/icons/share.png")}
            title='Share with Friends'
            iconSource={require("../assets/icons/greater.png")}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#2F2348",
            borderBottomWidth: 1,
            width: "100%",
            marginBottom: 20,
          }}
        />
        <View style={{ marginBottom: 20 }}>
          <ProfileField
            source={require("../assets/icons/chat-alt.png")}
            title='Leave Feedback'
            iconSource={require("../assets/icons/greater.png")}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#2F2348",
            borderBottomWidth: 1,
            width: "100%",
            marginBottom: 20,
          }}
        />
        <View style={{ marginBottom: 20 }}>
          <ProfileField
            source={require("../assets/icons/bell-notification.png")}
            title='Reminders'
            iconSource={require("../assets/icons/greater.png")}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#2F2348",
            borderBottomWidth: 1,
            width: "100%",
            marginBottom: 20,
          }}
        />
        <View style={{ marginBottom: 20 }}>
          <ProfileField
            source={require("../assets/icons/paper-airplane.png")}
            title="FAQ's"
            iconSource={require("../assets/icons/greater.png")}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#2F2348",
            borderBottomWidth: 1,
            width: "100%",
            marginBottom: 20,
          }}
        />
        <View style={{ marginBottom: 20 }}>
          <ProfileField
            source={require("../assets/icons/information-circle.png")}
            title='About'
            iconSource={require("../assets/icons/greater.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
