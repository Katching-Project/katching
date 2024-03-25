import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { idolGroupSelectStyles } from "../screens/styles/idolGroupSelectStyle";

const IdolGroupCard = ({ imageSource, buttonText, onPress, isPressed }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={idolGroupSelectStyles.buttonContainer}
    >
      <ImageBackground
        source={imageSource}
        style={idolGroupSelectStyles.imageBackground}
      >
        <View style={isPressed && idolGroupSelectStyles.buttonPressed}></View>
        <Text style={idolGroupSelectStyles.buttonText}>{buttonText}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default IdolGroupCard;
