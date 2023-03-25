/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/images/logo.png';

//Context
import { AuthContext } from '../../contexts/AuthContext';
import styles from './styles';

const LoginContainer = () => {
	const { login } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [validPassword, setValidPassword] = useState(false);

	const goLogin = () => {
		if (email && password === '123') {
			login();
		}
	};
	return (
		<View>
			<View style={styles.container}>
				<Image source={Logo} style={styles.logo} />
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.emailInput}
						placeholder="Enter Your Email.."
						onChangeText={val => setEmail(val)}
						onBlur={() => setValidEmail(true)}
					/>
					{validEmail && email === '' && <Text style={styles.error}>Please fill this field!</Text>}
					<TextInput
						style={styles.passwordInput}
						placeholder="Enter Your Password"
						onChangeText={val => setPassword(val)}
						onBlur={() => setValidPassword(true)}
						secureTextEntry={true}
					/>
					{validPassword && password === '' && <Text style={styles.error}>Please fill this field!</Text>}
				</View>
				<TouchableOpacity style={styles.buttonContainer} onPress={goLogin} activeOpacity={0.7}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LoginContainer;
