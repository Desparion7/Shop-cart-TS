import { createContext, ReactElement, useState } from 'react';

export type ProductType = {
	sku: string;
	name: string;
	price: number;
};

const initialState: ProductType[] = [
	{
		sku: 'item0001',
		name: 'Widget',
		price: 9.99,
	},
	{
		sku: 'item0002',
		name: 'Premium Widget',
		price: 19.99,
	},
	{
		sku: 'item0003',
		name: 'Delux Widget',
		price: 29.99,
	},
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] | undefined };
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
	const [products, setProducts] = useState<ProductType[]>(initialState);

	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext;