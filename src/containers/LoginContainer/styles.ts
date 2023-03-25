/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: hp(5),
	},
	logo: {
		width: 250,
		height: 150,
	},
	inputContainer: {
		width: wp(100),
		alignItems: 'center',
		marginTop: hp(5),
	},
	emailInput: {
		backgroundColor: '#ddd',
		width: wp(70),
		paddingHorizontal: hp(1),
		paddingVertical: hp(1),
		borderRadius: hp(1),
		fontFamily: 'Padauk-Regular',
	},
	passwordInput: {
		backgroundColor: '#ddd',
		width: wp(70),
		paddingHorizontal: hp(1),
		paddingVertical: hp(1),
		borderRadius: hp(1),
		marginTop: hp(2),
	},
	buttonContainer: {
		backgroundColor: '#FDCE29',
		width: wp(70),
		paddingVertical: hp(1.5),
		alignItems: 'center',
		marginTop: hp(3),
		borderRadius: hp(1),
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontFamily: 'Padauk-Bold',
	},
	error: {
		color: '#FF575F',
		marginBottom: 15,
		fontFamily: 'Oswald-Medium',
	},
});

export default styles;
