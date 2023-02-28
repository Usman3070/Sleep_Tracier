import React, { useState, useEffect } from "react";
import { View, Text, Animated } from "react-native";
import * as SVG from "react-native-svg";

const ClockFace = () => {
  const [time, setTime] = useState(new Date());
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const animate = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate();
  }, []);

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 12; i >= 1; i--) {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x = 150 + 70 * Math.cos(angle);
      const y = 150 + 70 * Math.sin(angle);
      numbers.push(
        <Text key={i} style={[styles.number, { left: x - 15, top: y - 15 }]}>
          {i}
        </Text>
      );
    }
    return numbers;
  };

  const renderMinuteDashes = () => {
    const minuteDashes = [];
    for (let i = 0; i < 60; i++) {
      const angle = (i * 6 - 90) * (Math.PI / 180);
      const x1 = 150 + 85 * Math.cos(angle);
      const y1 = 150 + 85 * Math.sin(angle);
      const x2 = 150 + 90 * Math.cos(angle);
      const y2 = 150 + 90 * Math.sin(angle);
      minuteDashes.push(
        <SVG.Line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth={1}
        />
      );
    }
    return minuteDashes;
  };

  const renderHourDashes = () => {
    const hourDashes = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x1 = 150 + 85 * Math.cos(angle);
      const y1 = 150 + 85 * Math.sin(angle);
      const x2 = 150 + 90 * Math.cos(angle);
      const y2 = 150 + 90 * Math.sin(angle);
      hourDashes.push(
        <SVG.Line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth={2}
        />
      );
    }
    return hourDashes;
  };

  return (
    <View style={styles.container}>
      <SVG.Svg width={300} height={300}>
        <SVG.Text cx={150} cy={150} textAnchor="middle" fontSize={20}>
          Hello World
        </SVG.Text>
        <SVG.Circle cx={150} cy={150} r={75} fill="#291C43" />
        <SVG.Circle
          cx={150}
          cy={150}
          r={85}
          stroke="#211833"
          strokeWidth={20}
        />

        <SVG.G
          rotation={30 * (time.getHours() + time.getMinutes() / 60)}
          originX={150}
          originY={150}
        >
          {renderNumbers()}
          {renderMinuteDashes()}
          {renderHourDashes()}

          <SVG.Circle
            style={styles.progressCircle}
            cx={150}
            cy={150}
            r={108}
            stroke="#271837"
            strokeWidth={30}
            fill="none"
          />

          <SVG.Circle
            style={styles.progressCircle}
            cx={150}
            cy={150}
            r={108}
            stroke="#A355EE"
            strokeWidth={25}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            align="center"
          />
        </SVG.G>
      </SVG.Svg>
    </View>
  );
};

const styles = {
  container: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  number: {
    position: "absolute",
    fontSize: 10,

    textAlign: "center",
    textAlignVertical: "center",
    width: 30,
    height: 30,
    color: "white",
  },
  progressCircle: {
    position: "absolute",
    top: 30,
    left: 30,
  },
};

export default ClockFace;
