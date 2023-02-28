import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SleepingRoutineComp from "./SleepingRoutineComp";
import PieChartComp from "./PieChartComp";
import StatisticsNotes from "./StatisticsNotes";

const StatisticsComp = () => {
  const [modal, setModal] = useState(true);

  const handleHide = () => {
    setModal(false);
  };
  const data = [
    {
      name: "",
      population: 200,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      //   legendFontSize: 15,
    },
    {
      name: "Segment 2",
      population: 50,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    // etc.
  ];
  return (
    <View style={{ padding: 20 }}>
      {modal && (
        <View
          style={{
            padding: 15,
            borderRadius: 10,
            backgroundColor: "#774DCE",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ color: "#fff" }}>It’s Not a Complete Record</Text>
            </View>
            <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleHide}>
              <Image
                source={require("../assets/icons/close.png")}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 13, marginBottom: 10 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", padding: 8 }}>
            <TouchableOpacity style={{ marginBottom: 8 }}>
              <Text style={{ color: "#FF4E4E", fontWeight: "500" }}>
                Delete This Record
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "#000", fontWeight: "600" }}>
                Solve the Problem
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <SleepingRoutineComp
            sourceGreater={require("../assets/icons/greater.png")}
            sourceMain={require("../assets/icons/bed.png")}
            sourceMain2={require("../assets/icons/sleep-regular.png")}
            time='6h 22m'
            time2='6h 22m'
            title='In Beds'
            title2='Asleep'
          />
        </View>
        <View style={{ marginBottom: 30 }}>
          <SleepingRoutineComp
            sourceGreater={require("../assets/icons/greater.png")}
            sourceMain={require("../assets/icons/bed-regular.png")}
            sourceMain2={require("../assets/icons/wakeup.png")}
            time='6h 22m'
            time2='6h 22m'
            title='Went to bed'
            title2='Woke Up'
          />
        </View>
        <View>
          <SleepingRoutineComp
            sourceGreater={require("../assets/icons/greater.png")}
            sourceMain={require("../assets/icons/sleep-filled.png")}
            sourceMain2={require("../assets/icons/soundwave.png")}
            time='6h 22m'
            time2='6h 22m'
            title='Asleep after'
            title2='Noise'
          />
        </View>
      </View>
      <View style={{ marginTop: 15, marginBottom: 25 }}>
        <View>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 20 }}>
            Sleep Stages
          </Text>
        </View>
        <View style={styles.container}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <PieChartComp data={data} percent='2%' title='Deep Sleep' />
            </View>
            <View>
              <PieChartComp data={data} percent='4%' title='Light Sleep' />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View>
              <PieChartComp data={data} percent='1%' title='REM' />
            </View>
            <View>
              <PieChartComp data={data} percent='93%' title='Awake' />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#999999",
              borderBottomWidth: 1,
              width: "100%",
              marginBottom: 20,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/icons/arrow-down.png")}
                style={{ height: 40, width: 40 }}
              />
              <Text style={{ color: "#fff", marginLeft: 5 }}>Sleep Debt</Text>
            </View>
            <View>
              <Text style={{ color: "#fff" }}>-1h 02m</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 20 }}>
            Notes
          </Text>
        </View>
        <StatisticsNotes />
      </View>
    </View>
  );
};

export default StatisticsComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
  },
});
