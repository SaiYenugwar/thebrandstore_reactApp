import { Backdrop, CircularProgress, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../API/api";
import toast from "react-hot-toast";
import { useCart } from "../../Context/CartContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Tab() {
    const [loader, setloader] = useState(false);
    const [product, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        setloader(true);
        const getProducts = async () => {
            try {
                const response = await api.get('/product');
                setProducts(response.data);
                setloader(false);
            } catch (error) {
                console.log('Error', error);
                toast.error('Error to Load Product')
                setloader(false);
            }
        };

        window.scrollTo(0,0);
        getProducts();
    }, []);

    var TabProducts = product.filter(product => product.category === "Tab");


    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <div className="container-fluid mt-5">
                <h1 className="text-center text-primary"> Tab</h1>

                <div className="product-cart mt-4">
                    {TabProducts.map((product) => (
                        <div className="product-cart-item" key={product.id}>
                            <i className="bi bi-bookmark"></i>
                            <div className="product-image" id={product.id}>
                                <img
                                    src={product.image}
                                    alt={product.title}

                                />
                            </div>
                            <div className="product-details m-2">
                                <h6 className="product-title">{product.brand}</h6>
                                <p className="product-title">{product.title}</p>
                                <div className="product-rating">
                                    <Rating name="half-rating-read" defaultValue={+product.rating.star} precision={0.5} readOnly />
                                </div>
                                <div className="product-price">₹ {product.price}</div>
                                <button
                                    className="p-ripple p-element p-button p-component p-button-icon-only"
                                    onClick={() => addToCart(product)}
                                    id="product-add-to-cart"
                                >
                                    <AddShoppingCartIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

        </>
    );
  }
  
  export default Tab;