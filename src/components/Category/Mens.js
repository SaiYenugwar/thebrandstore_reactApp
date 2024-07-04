import { Backdrop, CircularProgress, FormControl, InputLabel, MenuItem, Rating, Select } from "@mui/material";
import { useCart } from "../../Context/CartContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../API/api";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Mens() {
    const { addToCart } = useCart();
    const [product, setProducts] = useState([]);
    const [loader, setloader] = useState(false);
    const [category, setCategory] = useState('');
    const [sortby, setSortby] = useState('');
    const [menProducts, setMenProducts] = useState([]);

    // var menProducts = product.filter(product => product.category === "Men's");


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


    useEffect(() => {
        const filteredProducts = product.filter(product => product.category === "Men's");
        setMenProducts(filteredProducts);
      }, [product]);
    
      const categoryChange = (event) => {
        setCategory(event.target.value);
        const filteredProducts = product.filter(product => product.subcategory === event.target.value);
        setMenProducts(filteredProducts);
      };


    
    const sortbyChange = (event) => {
        setSortby(event.target.value);
        console.log(event.target.value);
    };


    return (

        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <div className="container-fluid mt-5">
                <h1 className="text-center text-primary"> Mens's</h1>

           <div className="d-flex justify-content-around">

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        value={category}
                        onChange={categoryChange}
                        label="category"
                    >

                        <MenuItem value="Shirt">Shirt</MenuItem>
                        <MenuItem value="Tshirt">T-shirt</MenuItem>
                        <MenuItem value="Jeans">Jeans</MenuItem>
                        <MenuItem value="Shoes">Shoes</MenuItem>
                        <MenuItem value="Hoodie">Hoodie</MenuItem>
                        <MenuItem value="Jacket">Jacket</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="sort-label">Sort By</InputLabel>
                    <Select
                        labelId="sort-label"
                        id="sort"
                        value={sortby}
                        onChange={sortbyChange}
                        label="sort"
                    >

                        <MenuItem value="Revelance">Revelance</MenuItem>
                        <MenuItem value="low">Price - Low to High</MenuItem>
                        <MenuItem value="discount">Discount</MenuItem>
                        <MenuItem value="high">Price - High to Low</MenuItem>
                        {/* <MenuItem value="hoodie">Hoodie</MenuItem>
                        <MenuItem value="jacket">Jacket</MenuItem> */}
                    </Select>
                </FormControl>

                </div>

                <div className="product-cart mt-4">
                    {menProducts.map((product) => (
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

export default Mens;