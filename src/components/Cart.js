import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useCallback, useEffect } from 'react';
import api from '../API/api';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import { Backdrop, CircularProgress, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCart } from '../Context/CartContext';


function Cart() {
    const [loader, setloader] = React.useState(false);
    const [Delivery, setDelivery] = React.useState(false);
    const [cartItem, setcartItem] = React.useState([]);
    const [cookies] = useCookies(['email']);
    const [product_total, setproduct_total] = React.useState(0);
    const [total_price, settotal_price] = React.useState(100);
    const [Gst, setGst] = React.useState(0);
    const [Discount, setDiscount] = React.useState(0);
    const [Shipping, setShipping] = React.useState(0);
    const { addToCart , CartHistory } = useCart();

    const calculateTotalPrice = useCallback((data) => {
        const totalAmounts = data.map(item => {
            const price = parseFloat(item.price.toString().replace(/,/g, ''));
            const quantity = parseFloat(item.quantity.toString().replace(/,/g, ''));
            return price * quantity;
        });

        const totalPrice = totalAmounts.reduce((total, amount) => total + amount, 0);

        // Calculate GST (18%)
        const gst = 0.18 * totalPrice;

        // Calculate discount (30%)
        const discount = 0.30 * totalPrice;

        // Apply GST and discount to the total price
        const finalTotalPrice = totalPrice + gst - discount + Shipping;

        setproduct_total(totalPrice);
        setGst(gst);
        setDiscount(discount);
        settotal_price(finalTotalPrice);
    }, [Shipping]);


    useEffect(() => {
        setloader(true);
        const getProducts = async () => {
            try {
                const response = await api.get(`/CartHistory/${cookies.email}`);
                // console.log(response.data);
                setcartItem(response.data)
                setloader(false);
                calculateTotalPrice(response.data);
            } catch (error) {
                console.log('Error', error);
                toast.error('Error to Load Product')
                setloader(false);
            }
        };

        getProducts();
        window.scrollTo(0,0);
    }, [cookies.email, calculateTotalPrice]);



    const removeItem = async(item) => {
        const data = {
            "email": cookies.email,
            "productId": item.productId,
            "quantity": item.quantity
        }
        try {
            setloader(true);
            const resoponse = await api.post(`/removeItem`, data);
            if(resoponse.data){
                toast.success('Item removed successfully');
                refreshcart();
                CartHistory();
            };

        } catch (error) {
            setloader(false);
            toast.error('error while remove product');
            console.error('Error fetching cart history', error);
        }
    }

        const refreshcart = async () => {
            try {
                setloader(true);
                const response = await api.get(`/CartHistory/${cookies.email}`);
                if(response.data.length===0){
                    setShipping(0);
                }
                setcartItem(response.data);
                setloader(false);
                calculateTotalPrice(response.data);
            } catch (error) {
                console.log('Error', error);
                toast.error('Error to Load Product')
                setloader(false);
            }
        }

    const checkout = () => {
        console.log("Checkout")
    }

    const onCheckboxChange = (e) => {
        setDelivery(e.target.checked);
        if (e.target.checked) {
            setShipping(100);
            settotal_price(total_price + 100);
        } else {
            setShipping(0);
            settotal_price(total_price - Shipping);
        }
    };

    const formatPrice = (priceString) => {
        return parseFloat(priceString.replace(/,/g, ''));
    };

    const increaseQty = (data) => {
        data.id = data.productId;
        addToCart(data);
        setTimeout(()=>{
            refreshcart();
        },500);
    }

    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <h1 className="text-center">Shopping Cart <ShoppingCartIcon /></h1>

            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">You have {cartItem.length} items in your cart</h5>
                                </div>
                                <div className="card-body">
                                    {cartItem.map((cart, index) => (
                                        <div className="row" key={index}>
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                    <img src={cart.image} className="w-100" style={{ boxShadow: "0 3px 6px #00000029, 0 3px 6px #0000003b", borderRadius: "15px" }} alt={cart.title} />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                <p><strong>{cart.brand}</strong></p>
                                                <p>{cart.title}</p>
                                                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                                    title="Remove item" onClick={() => removeItem(cart)}>
                                                    <i className="bi bi-trash-fill"></i>
                                                </button>
                                                
                                            </div>
                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor={`quantity-${index}`}>Quantity : <strong>{cart.quantity}</strong></label>
                                                       &nbsp;
                                                 <Fab size="small" color="primary" aria-label="add" onClick={() => increaseQty(cart)}>
                                                    <AddIcon />
                                                </Fab>
                                                    </div>
                                                    
                                                </div>
                                                <p className="text-start text-md-center">
                                                    Price : <strong>₹{formatPrice(cart.price) * cart.quantity}</strong>
                                                </p>

                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p><strong>Expected Shipping Delivery</strong></p>
                                    <p className="mb-0">{Shipping === 0 ? 'Within Week' : `Within 1-2 days`}</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p><strong>We accept</strong></p>
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                    <img className="me-2" width="45px"
                                        src="https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP"
                                        alt="PayPal acceptance mark" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Payment Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Product Total
                                            <span>₹{product_total}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            GST (18%)
                                            <span className="text-primary">+ ₹{Gst.toFixed(2)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Discount (30%)
                                            <span className="text-danger">- ₹{Discount.toFixed(2)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping Charges
                                            <span>{Shipping === 0 ? 'Free' : `₹ ${Shipping}`}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span><strong>₹{total_price.toFixed(2)}</strong></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div className="form-check">
                                                Fast Delivery
                                                <input className="form-check-input" type="checkbox" checked={Delivery} onChange={onCheckboxChange} />
                                            </div>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={checkout}>
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Cart;