import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Button, Text, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { basicStyles } from "./styles/basicStyles";

const GRADIENT_COLOR_RANGE = ['#EE64D5', '#FAA8E8', '#FFF6FD'];

export default function UserNamePage() {
  const navigation = useNavigation();

  const [firstNameInputValue, setFirstNameInputValue] = useState('');
  const [lastNameInputValue, setLastNameInputValue] = useState('');

  const handleFirstNameInputChange = (text) => {
    setFirstNameInputValue(text);
  };

  const handleLastNameInputValue = (text) => {
    setLastNameInputValue(text);
  };

  return (
    <View style={basicStyles.container}>
      <LinearGradient
        colors={GRADIENT_COLOR_RANGE}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={basicStyles.gradient}
      >
        {/* Header Text */}
        <Text style={basicStyles.headerText}>What's Your Name?</Text>

        {/* Input Box */}
        <View style={basicStyles.inputContainer}>
          <TextInput
            style={basicStyles.input}
            placeholder="First Name"
            value={firstNameInputValue}
            onChangeText={handleFirstNameInputChange}
          />
        </View>

        <View style={basicStyles.inputContainer}>
          <TextInput
            style={basicStyles.input}
            placeholder="Last Name"
            value={lastNameInputValue}
            onChangeText={handleLastNameInputValue}
          />
        </View>

        {/* Button */}
        <Button
          title="Swipe Up"
          onPress={() => navigation.navigate("IdolGroupSelect")}
        />
      </LinearGradient>
    </View>
  );
}
