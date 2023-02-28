import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";

const PieChartComp = ({ data, title, percent }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ marginRight: 10 }}>
        <PieChart
          data={data}
          width={50}
          height={50}
          hasLegend={false}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor='population'
          backgroundColor='transparent'
          paddingLeft='15'
          // absolute //for the absolute number remove if you want percentage
        />
      </View>
      <View>
        <Text style={{ color: "#fff" }}>{title}</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#fff" }}>{percent}</Text>
        </View>
      </View>
    </View>
  );
};

export default PieChartComp;

const styles = StyleSheet.create({});
