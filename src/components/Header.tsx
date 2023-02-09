import React from 'react';
import Nav from './Nav';
import { useContext } from 'react';
import CartContext from '../context/CartProvider';

type PropsType = {
	viewCart: boolean;
	setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
    // Context directly from context without use useCart Hook to better understend.
	const { totalItems, totalPrice } = useContext(CartContext);

	const content = (
		<header className='header'>
			<div className='header__title-bar'>
				<h1>Acme Co.</h1>
				<div className='header__price-box'>
					<p>Total Item: {totalItems}</p>
					<p>Total Price: {totalPrice}</p>
				</div>
			</div>
			<Nav viewCart={viewCart} setViewCart={setViewCart} />
		</header>
	);
	return content;
};

export default Header;
