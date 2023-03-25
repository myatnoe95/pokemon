/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Navigators
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

//Context
import { AuthContext } from '../contexts/AuthContext';

const AppNavigator = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return <NavigationContainer>{isLoggedIn ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default AppNavigator;
