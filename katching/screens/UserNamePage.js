import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Animated, PanResponder, Text, TextInput, View } from "react-native";
import { basicStyles } from "./styles/basicStyles";

const GRADIENT_COLOR_RANGE = ["#EE64D5", "#FAA8E8", "#FFF6FD"];
const SWIPE_THRESHOLD = -25;

export default function UserNamePage() {
  const navigation = useNavigation();

  const [firstNameInputValue, setFirstNameInputValue] = useState("");
  const [lastNameInputValue, setLastNameInputValue] = useState("");

  const handleFirstNameInputChange = (text) => {
    setFirstNameInputValue(text);
  };

  const handleLastNameInputValue = (text) => {
    setLastNameInputValue(text);
  };

  const navigateToBirthdayPage = () => {
    navigation.navigate("BirthdayPage");
  };

  // Gesture handling for vertical swiping
  const pan = useState(new Animated.ValueXY())[0];
  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dy: pan.y }, // Vertical movement only
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dy < SWIPE_THRESHOLD) {
          navigateToBirthdayPage();
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    })
  )[0];

  useEffect(() => {
    const resetPan = () => {
      pan.setValue({ x: 0, y: 0 });
    };

    const unsubscribe = navigation.addListener("focus", resetPan);

    return unsubscribe;
  }, [navigation, pan]);

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

        {/* Swiping Area */}
        <Animated.View
          style={basicStyles.swipeArea}
          {...panResponder.panHandlers}
        >
          <Text style={basicStyles.swipeText}>Swipe up</Text>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
