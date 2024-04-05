import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import IdolGroupCard from "../components/IdolGroupCard";
import { idolGroupSelectStyles } from "./styles/idolGroupSelectStyle";

const GRADIENT_COLOR_RANGE = ["#FFFFFF", "#13223F"];

// temporary number of idol groups. Will update after backend API established
const numButtons = 4;

const idolGroups = [
  {
    name: "BlakPink",
    sourcePath: require("../assets/girl1.jpg"),
    isPressed: false,
  },
  {
    name: "Le Sserafim",
    sourcePath: require("../assets/girl2.jpg"),
    isPressed: false,
  },
  {
    name: "Ive",
    sourcePath: require("../assets/girl3.jpg"),
    isPressed: false,
  },
  {
    name: "New Jeans",
    sourcePath: require("../assets/girl4.jpg"),
    isPressed: false,
  },
];

export default function IdolGroupSelect() {
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [allButtonIsPressed, setallButtonIsPressed] = useState(false);

  const handleAllButtonPress = () => {
    tempArray = [];
    // if currently allButtonIsPressed == true, now we are deselecting all groups
    if (allButtonIsPressed) {
      setallButtonIsPressed(false);
      for (let i = 0; i < numButtons; i += 1) {
        idolGroups[i].isPressed = false;
      }
    } else {
      // if currently allButtonIsPressed == false, now we are selecting all groups
      setallButtonIsPressed(true);
      tempArray = [];
      for (let i = 0; i < numButtons; i += 1) {
        tempArray.push(i);
        idolGroups[i].isPressed = true;
      }
    }
    setSelectedGroups(tempArray);
  };

  const handleButtonPress = (index) => {
    const selectedIndex = selectedGroups.indexOf(index);
    if (selectedIndex === -1) {
      // if clicked idolGroup is newly selected idolGroup:
      // add to selectedGroups and mark as pressed
      setSelectedGroups([...selectedGroups, index]);
      idolGroups[index].isPressed = true;
    } else {
      // if clicked idolGroup is already in selectedGroups:
      // remove from selectedGroups and mark as un-pressed
      const newSelectedGroups = [...selectedGroups];
      newSelectedGroups.splice(selectedIndex, 1);
      setSelectedGroups(newSelectedGroups);
      idolGroups[index].isPressed = false;

      // if All button is pressed, un-press it
      if (allButtonIsPressed) {
        setallButtonIsPressed(false);
      }
    }
  };

  const renderIdolGroupButtons = () => {
    const buttons = [];
    buttons.push(
      // "All" button
      <View key={-1} style={idolGroupSelectStyles.container}>
        <IdolGroupCard
          buttonText={"All"}
          onPress={() => handleAllButtonPress()}
          isPressed={allButtonIsPressed}
        />
      </View>
    );
    // add idolGroup buttons
    for (let i = 0; i < numButtons; i += 1) {
      buttons.push(
        <View key={i} style={idolGroupSelectStyles.container}>
          <IdolGroupCard
            imageSource={idolGroups[i].sourcePath}
            buttonText={idolGroups[i].name}
            // isSelected={isPressed}
            onPress={() => handleButtonPress(i)}
            isPressed={idolGroups[i].isPressed}
          />
        </View>
      );
    }
    return buttons;
  };

  return (
    <View style={idolGroupSelectStyles.mainContainer}>
      <LinearGradient
        colors={GRADIENT_COLOR_RANGE}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 0, y: 1 }}
        style={idolGroupSelectStyles.gradient}
      >
        <Text style={idolGroupSelectStyles.headerText}>
          Select Your Own Pool
        </Text>

        {/* create Idol Group buttons */}
        {renderIdolGroupButtons()}

        {/* Run Katch button: send selectedGroups list to next page */}
        <View style={idolGroupSelectStyles.runKatchButton}>
          <Button
            titleStyle={{
              color: "#FFFFFF",
            }}
            title="Run Katch"
            onPress={() => console.log(selectedGroups)}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
