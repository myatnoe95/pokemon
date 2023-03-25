/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { createContext, useState, ReactNode } from 'react';

const initialValue = {
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
};

const AuthContext = createContext<{
	isLoggedIn: boolean;
	login: () => void;
	logout: () => void;
}>(initialValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const loginHandler = () => {
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login: loginHandler, logout: logoutHandler }}>
			{children}
		</AuthContext.Provider>
	);
};
export { AuthContext, AuthProvider };
