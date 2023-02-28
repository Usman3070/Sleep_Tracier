import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { GLView } from "expo-gl";
import iphoneModelPath from "../../../assets/WatchingTower.glb";

const App = () => {
  const gltfRef = useRef();

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(url);
  //     const blob = await response.blob();
  //     const gltf = new GLTFLoader().parse(blob);
  //     setModel(gltf);
  //   })();
  // }, [url]);

  return (
    <View style={styles.container}>
      <GLView
        source={{ uri: `${iphoneModelPath}` }}
        onError={(error) => console.log(error)}
        onLoad={() => gltfRef.current.playAnimation()}
        ref={gltfRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gltfView: {
    width: 300,
    height: 300,
  },
});

export default App;
