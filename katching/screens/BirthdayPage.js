import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";
import { basicStyles } from "./styles/basicStyles";

const GRADIENT_COLOR_RANGE = ["#EE64D5", "#FAA8E8", "#FFF6FD"];
const SWIPE_THRESHOLD = -25;

const Months = {
  JANUARY: { name: "January", index: 0 },
  FEBRUARY: { name: "February", index: 1 },
  MARCH: { name: "March", index: 2 },
  APRIL: { name: "April", index: 3 },
  MAY: { name: "May", index: 4 },
  JUNE: { name: "June", index: 5 },
  JULY: { name: "July", index: 6 },
  AUGUST: { name: "August", index: 7 },
  SEPTEMBER: { name: "September", index: 8 },
  OCTOBER: { name: "October", index: 9 },
  NOVEMBER: { name: "November", index: 10 },
  DECEMBER: { name: "December", index: 11 },
};

const getMonthByIndex = (index) => {
  console.log("index:", index, "type:", typeof index);
  return Object.values(Months).find((month) => month.index === index) || null;
};

export default function BirthdayPage() {
  const navigation = useNavigation();

  const navigateToIdolGroupSelect = () => {
    navigation.navigate("IdolGroupSelect");
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
          navigateToIdolGroupSelect();
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

  const currentMonthIndex = new Date().getMonth();
  const currentMonth = getMonthByIndex(currentMonthIndex);
  const currentDay = new Date().getDate();

  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedDay, setSelectedDay] = useState(currentDay);

  // Function to generate an array of years, starting from 1900 up to the current year
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 1940; year <= currentYear; year++) {
      years.push(year.toString());
    }
    return years;
  };

  const generateDays = (year, month) => {
    const date = new Date(year, month.index, 1);
    date.setMonth(month.index + 1, 0);
    const totalDays = date.getDate();
    const daysArray = Array.from(
      { length: totalDays },
      (_, index) => index + 1
    );
    return daysArray.map((day) => day.toString()); // Convert days to strings
  };

  // Function to handle month change
  const handleMonthChange = (itemValue, itemIndex) => {
    setSelectedMonth(getMonthByIndex(parseInt(itemValue)));
  };

  // Function to handle year change
  const handleYearChange = (itemValue, itemIndex) => {
    setSelectedYear(itemValue);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    pickerContainer: {
      flexDirection: "row",
    },
    dropdown: {
      height: 50, // Adjust height as needed
      width: 150, // Adjust width as needed
    },
    picker: {
      marginRight: 5,
    },
  });

  return (
    <View style={basicStyles.container}>
      <LinearGradient
        colors={GRADIENT_COLOR_RANGE}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={basicStyles.gradient}
      >
        {/* Header Text */}
        <Text style={basicStyles.headerText}>What's Your Birthday?</Text>

        <View style={styles.pickerContainer}>
          {/* Year select */}
          <Picker
            selectedValue={selectedYear}
            style={[styles.dropdown, styles.picker]}
            onValueChange={handleYearChange}
          >
            {generateYears().map((year) => (
              <Picker.Item key={year} label={year} value={year} />
            ))}
          </Picker>
          {/* Month select */}
          <Picker
            selectedValue={selectedMonth.index}
            style={[styles.dropdown, styles.picker]}
            onValueChange={handleMonthChange}
          >
            {Object.keys(Months).map((month) => (
              <Picker.Item
                key={month}
                label={Months[month].name}
                value={Months[month].index}
              />
            ))}
          </Picker>
          {/* Day select */}
          <Picker
            selectedValue={selectedDay}
            style={[styles.dropdown, styles.picker]}
            onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
          >
            {generateDays(selectedYear, selectedMonth).map((day) => (
              <Picker.Item key={day} label={day} value={day} />
            ))}
          </Picker>
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
