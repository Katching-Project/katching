import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import BirthdayPage from "./screens/BirthdayPage";
import IdolGroupSelect from "./screens/IdolGroupSelect";
import IdolSelect from "./screens/IdolSelect";
import UserNamePage from "./screens/UserNamePage";

const Stack = createStackNavigator();

export default function App() {
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
