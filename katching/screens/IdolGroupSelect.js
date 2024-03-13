import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { basicStyles } from "./styles/basicStyles";

const GRADIENT_COLOR_RANGE = ["#FFFFFF", "#13223F"];

// temporary number of idol groups. Will update after backend API established
const numButtons = 10;

// const [selectedGroups, setSelectedGroups] = useState([]);

// export const useSelectedGroups = () => {
//   const [selectedGroups, setSelectedGroups] = useState([]);
//   // Any additional functions related to selectedGroups can be defined here
//   return { selectedGroups, setSelectedGroups };
// };

// TOODO: need to import idol group images and names, then render buttons
// Or we can hard code three versions: Male, Female, Both
const renderIdolGroupButtons = () => {
  const buttons = [];
  for (let i = 0; i < numButtons; i += 2) {
    buttons.push(
      //   <View key={i} style={styles.row}>
      <View key={i} style={basicStyles.idolGroupButton}>
        <Button
          title={`Button ${i + 1}`}
          //   onPress={() => handleButtonPress(i)}
        />
        {/* {i + 1 < numButtons && (
          <Button
            title={`Button ${i + 2}`}
            onPress={() => handleButtonPress(i + 1)}
          />
        )} */}
      </View>
    );
  }
  return buttons;
};

const handleButtonPress = (index) => {
  //   const { selectedGroups, setSelectedGroups } = useSelectedGroups();
  const selectedIndex = selectedGroups.indexOf(index);
  if (selectedIndex === -1) {
    // if newly selected idol group
    setSelectedGroups([...selectedGroups, index]);
  } else {
    const newSelectedGroups = [...selectedGroups];
    newSelectedGroups.splice(selectedIndex, 1);
    setSelectedGroups(newSelectedGroups);
  }
};

export default function IdolGroupSelect2() {
  //   const navigation = useNavigation();
  //   const { selectedGroups, setSelectedGroups } = useSelectedGroups();
  const [selectedGroups, setSelectedGroups] = useState([]);
  return (
    <View style={basicStyles.container}>
      <LinearGradient
        colors={GRADIENT_COLOR_RANGE}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 0, y: 1 }}
        style={basicStyles.gradient}
      >
        {/* Header Text */}
        <Text style={basicStyles.headerText}>Select Your Own Pool</Text>

        {/* create Idol Group buttons */}
        {renderIdolGroupButtons()}

        {/* Button */}
        <View style={basicStyles.runKatchButton}>
          <Button
            titleStyle={{
              color: "#FFFFFF",
            }}
            title="Run Katch"
            // buttonStyle={{
            //   backgroundColor: "#9A2AA4",
            //   borderRadius: 4,
            //   margin: 5,
            // }}
            // onPress={() => navigation.navigate("IdolGroupSelect")}
            onPress={() => console.log(selectedGroups)}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
