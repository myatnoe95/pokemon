/* eslint-disable prettier/prettier */
import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';

//Context
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';

function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<AppNavigator />
			</CartProvider>
		</AuthProvider>
	);
}

export default App;
