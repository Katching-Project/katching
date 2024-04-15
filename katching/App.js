import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from 'react-native';
import * as React from "react";
import BirthdayPage from "./screens/BirthdayPage";
import IdolGroupSelect from "./screens/IdolGroupSelect";
import IdolSelect from "./screens/IdolSelect";
import UserNamePage from "./screens/UserNamePage";

const Stack = createStackNavigator();

const os = Platform.OS;

// Get the operating system version
const version = Platform.Version;

export default function App() {
  // Log the information
  console.log('Operating System:', os);
  console.log('Operating System Version:', version);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserNamePage" component={UserNamePage} />
        <Stack.Screen name="BirthdayPage" component={BirthdayPage} />
        <Stack.Screen name="IdolGroupSelect" component={IdolGroupSelect} />
        <Stack.Screen name="IdolSelect" component={IdolSelect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
