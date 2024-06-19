import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../API/api';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cookies] = useCookies(['email']);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = async (product) => {
        if(!cookies.email){
            toast.error('Please log in to add a product.');
            return;
        }
        
        try {
            toast.loading('Adding to cart...');
            await api.post('/Cart', {
                email: cookies.email, productId: product.id,
                quantity: 1, brand: product.brand, image: product.image, title: product.title, price: product.price
            });
            // console.log('Product added to cart', response.data);
            toast.remove();
            toast.success('Product added to cart');
            CartHistory();
        } catch (error) {
            console.error('Error adding to cart', error);
            toast.remove();
            toast.error('Error adding to cart');
        }
    };

    const CartHistory = async () => {
        try {
            const resoponse = await api.get(`/CartHistory/${cookies.email}`);
            const cartCount = resoponse.data
            setCartCount(cartCount.length);
            // console.log(cartCount.length)
        } catch (error) {
            console.error('Error fetching cart history', error);
        }
    }

    useEffect(() => {
        if (cookies.email) {
            CartHistory();
        }
    })

    return (
        <CartContext.Provider value={{ addToCart, cartCount, CartHistory }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
