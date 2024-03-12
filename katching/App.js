import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserNamePage from './screens/UserNamePage';
import IdolGroupSelect from './screens/IdolGroupSelect';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserNamePage" component={UserNamePage}/>
        <Stack.Screen name="IdolGroupSelect" component={IdolGroupSelect}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}