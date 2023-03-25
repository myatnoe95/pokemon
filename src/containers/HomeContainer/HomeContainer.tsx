/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Modal, ScrollView } from 'react-native';

//Context
import { IProductData, CartContext } from '../../contexts/CartContext';

//Image
import Pokey from '../../../assets/images/pokey.png';
import Cart from '../../../assets/images/cart.png';
import Close from '../../../assets/images/close.png';
import Check from '../../../assets/images/check.png';

//Style
import styles from './style';

const HomeContainer = () => {
	const { products, setProducts } = useContext(CartContext);
	const [data, setData] = useState<IProductData[]>([]);
	const [sliceData, setSliceData] = useState<IProductData[]>([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(12);

	const [modalVisible, setModalVisible] = useState(false);
	const [modalPay, setModalPay] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const fetchData = () => {
			fetch('https://api.pokemontcg.io/v2/cards')
				.then(async res => {
					const cards_data = await res.json();
					setData(cards_data.data);
					setLoading(false);
				})
				.catch(err => {
					console.log('err::', err);
				});
		};
		fetchData();
	}, []);

	useEffect(() => {
		getCurrentPageData();
	}, [loading, page]);

	useEffect(() => {
		products &&
			products.map(product => {
				const price = product.cardmarket.prices['averageSellPrice'];
				const itemTotalPrice = price * 1;
				setTotalPrice(totalPrice + itemTotalPrice);
			});
	}, [products]);

	const getCurrentPageData = () => {
		const startIndex = (page - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const pushData = sliceData.concat(data.slice(startIndex, endIndex));
		setSliceData(pushData);
	};

	const handleSelectItem = (item: IProductData) => {
		setProducts(prevProducts => [...prevProducts, { ...item }]);
	};

	const renderCard = ({ item, index }: { item: IProductData; index: number }) => {
		return (
			<View style={styles.cardView} key={index}>
				<View style={styles.imageView}>
					<Image source={{ uri: item.images['small'] }} style={styles.cardImage} resizeMode="contain" />
				</View>

				<View style={styles.cardInfo}>
					<View style={styles.cardContent}>
						<Text style={styles.superTypeTitle}>{item.supertype}</Text>
						<Text style={styles.nameTitle}>{item.name}</Text>
						<View style={styles.priceView}>
							<Text>${item.cardmarket.prices['averageSellPrice']}</Text>
							<Text style={styles.stock}>{item.set['total']} left</Text>
						</View>
					</View>

					<TouchableOpacity style={styles.cardBtn} onPress={() => handleSelectItem(item)}>
						<Text>Select card</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	const clickHandler = () => {
		setModalVisible(!modalVisible);
	};

	const handleShowMore = () => {
		setPage(page + 1);
	};

	const handleClearData = () => {
		setProducts([]);
		setTotalPrice(0);
	};

	const handlePay = () => {
		setProducts([]);
		setModalPay(!modalPay);
		setModalVisible(!modalVisible);
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>TCG Marketplace</Text>
			</View>

			<View style={styles.contentView}>
				<Image source={Pokey} style={styles.logo} resizeMode="contain" />
				{loading ? (
					<ActivityIndicator size="large" color="#40DF9F" hidesWhenStopped={true} />
				) : (
					<>
						<FlatList data={sliceData} numColumns={1} renderItem={renderCard} />
						<TouchableOpacity onPress={handleShowMore}>
							<Text>Show more</Text>
						</TouchableOpacity>
					</>
				)}
			</View>

			<TouchableOpacity activeOpacity={0.7} onPress={clickHandler} style={styles.floatingBtn}>
				<View style={styles.cartView}>
					<Image source={Cart} style={styles.floatingLabel} />
					<Text style={styles.cardTitle}> View Cart</Text>
				</View>
			</TouchableOpacity>

			{modalPay && (
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalPay}
					onRequestClose={() => {
						setModalPay(!modalPay);
					}}
				>
					<View style={styles.modalView}>
						<Image source={Check} style={styles.checkIcon} />
						<Text>Payment Success!</Text>

						<TouchableOpacity onPress={() => setModalPay(!modalPay)} style={styles.closeBtn}>
							<Image source={Close} style={styles.closeIcon} />
						</TouchableOpacity>
					</View>
				</Modal>
			)}

			{modalVisible && (
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(!modalVisible);
					}}
				>
					<ScrollView>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								{products &&
									products.map(product => {
										return (
											<View style={styles.productView} key={product.name}>
												<View style={styles.productImageView}>
													<Image
														source={{ uri: product.images['small'] }}
														style={styles.productImage}
														resizeMode="contain"
													/>
												</View>

												<View style={styles.productCardView}>
													<Text style={styles.productName}>{product.name}</Text>
													<Text>
														<Text style={styles.productPrice}>${product.cardmarket.prices['averageSellPrice']} </Text>
														per card
													</Text>
													<Text style={styles.productCard}>
														<Text style={styles.cardLeft}>{product.set['total']}</Text> cards left
													</Text>
												</View>

												<View style={styles.ProductPriceView}>
													<Text>1</Text>
													<Text style={styles.price}>price</Text>
													<Text style={styles.salePrice}>${product.cardmarket.prices['averageSellPrice']}</Text>
												</View>
											</View>
										);
									})}
								<TouchableOpacity style={styles.clear} onPress={handleClearData}>
									<Text>Clear All</Text>
								</TouchableOpacity>
								<View>
									<View style={styles.totalView}>
										<Text style={styles.totalCards}>Total cards</Text>
										<Text style={styles.totalCardsTxt}>{products.length}</Text>
									</View>

									<View style={styles.totalView}>
										<Text style={styles.totalPrice}>Total Price</Text>
										<Text style={styles.totalPriceTxt}>{totalPrice.toFixed(2)}</Text>
									</View>
								</View>

								<TouchableOpacity style={styles.payBtn} onPress={handlePay}>
									<Text style={styles.payTxt}>Pay Now</Text>
								</TouchableOpacity>

								<TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.closeBtn}>
									<Image source={Close} style={styles.closeIcon} />
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</Modal>
			)}
		</View>
	);
};

export default HomeContainer;
