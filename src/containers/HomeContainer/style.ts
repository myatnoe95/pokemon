import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	cardView: {
		marginBottom: 40,
	},
	cardInfo: {
		backgroundColor: '#fff',
		width: 250,
		marginTop: -70,
		height: 200,
		borderRadius: 20,
		justifyContent: 'center',
	},
	imageView: {
		alignSelf: 'center',
		zIndex: 100,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	cardImage: {
		width: 150,
		height: 250,
	},
	cardContent: {
		paddingTop: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	superTypeTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},
	nameTitle: {
		color: '#4B91C4',
	},
	priceView: {
		flexDirection: 'row',
		padding: 5,
	},
	stock: {
		marginLeft: 20,
	},
	cardBtn: {
		backgroundColor: 'yellow',
		borderRadius: 20,
		width: 100,
		height: 30,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 20,
	},
	logo: {
		width: 100,
		height: 100,
	},
	contentView: {
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		zIndex: 99,
		marginTop: hp(-6),
		marginBottom: 150,
	},
	container: {
		flex: 1,
	},
	titleContainer: {
		backgroundColor: '#fff',
	},
	title: {
		textAlign: 'center',
		marginVertical: 25,
		fontSize: 20,
		fontWeight: '600',
		color: '#000',
	},
	cardTitle: {
		color: '#fff',
	},
	floatingBtn: {
		position: 'absolute',
		width: 120,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		left: 30,
		right: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		bottom: 30,
		backgroundColor: '#298BFD',
		borderRadius: 15,
	},
	floatingLabel: {
		resizeMode: 'contain',
		width: 20,
		height: 20,
		marginRight: 5,
	},

	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	cartView: {
		flexDirection: 'row',
	},
	checkIcon: {
		width: 100,
		height: 100,
	},
	closeBtn: {
		backgroundColor: 'red',
		borderRadius: 50,
		padding: 5,
		marginTop: 15,
	},
	closeIcon: {
		width: 20,
		height: 20,
	},
	productView: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	productImageView: {
		width: '35%',
	},
	productCardView: {
		paddingRight: 20,
		width: '40%',
	},
	productImage: {
		width: 100,
		height: 100,
	},
	productName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	productPrice: {
		fontWeight: 'bold',
	},
	productCard: {
		marginTop: 15,
	},
	cardLeft: {
		color: 'red',
	},
	productPriceView: {
		marginTop: 5,
		width: '25%',
	},
	price: {
		marginTop: 5,
	},
	salePrice: {
		color: '#94C5FE',
		marginTop: 10,
	},
	clear: {
		marginBottom: 15,
	},
	totalView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	totalCards: {
		fontSize: 17,
		fontWeight: 'bold',
		color: '#000',
		marginRight: 25,
	},
	totalCardsTxt: {
		fontSize: 17,
		color: 'red',
		fontWeight: 'bold',
	},
	totalPrice: {
		fontSize: 17,
		fontWeight: 'bold',
		color: '#000',
		marginRight: 25,
	},
	totalPriceTxt: {
		fontSize: 17,
		color: 'red',
		fontWeight: 'bold',
	},
	payBtn: {
		marginTop: 20,
		backgroundColor: '#94C5FE',
		width: 100,
		alignItems: 'center',
		paddingVertical: 5,
		borderRadius: 10,
	},
	payTxt: {
		color: '#fff',
	},
});

export default styles;
