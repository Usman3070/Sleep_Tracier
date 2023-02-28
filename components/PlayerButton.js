import React from "react";
import { AntDesign } from "@expo/vector-icons";

const PlayerButton = (props) => {
  const { iconType, size = 40, iconColor = "white", onPress } = props;
  const getIconName = (type) => {
    switch (type) {
      case "PLAY":
        return "playcircleo";
      case "PAUSE":
        return "pausecircle";
      case "NEXT":
        return "forward";
      case "PREV":
        return "banckward";
    }
  };
  return (
    <AntDesign
      {...props}
      onPress={onPress}
      name={getIconName(iconType)}
      size={size}
      color={iconColor}
    />
  );
};

export default PlayerButton;
