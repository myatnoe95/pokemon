/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="MainPage" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default MainStack;
