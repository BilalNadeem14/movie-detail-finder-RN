import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../features/home/screens/HomeScreen';
import * as React from 'react';
import MovieDetailsScreen from '@features/home/screens/MovieDetailsScreen';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_bottom'}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="AppNavigator"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
