/* eslint-disable react/react-in-jsx-scope */
import { createContext, ReactNode, useState } from 'react';

const initialValue = {
	products: [],
	setProducts: () => {},
};

export interface IProductData {
	image: string;
	name: string;
	type: string;
	price: string;
	stock: number;
}

interface IProductContext {
	products: IProductData[];
	setProducts: React.Dispatch<React.SetStateAction<IProductData[]>>;
}

const CartContext = createContext<IProductContext>(initialValue);

const CartProvider = ({ children }: { children: ReactNode }) => {
	const [products, setProducts] = useState<IProductData[]>([]);

	return (
		<CartContext.Provider
			value={{
				products,
				setProducts,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
