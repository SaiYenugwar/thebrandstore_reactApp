import React, { useEffect, useState } from "react";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
import api from "../API/api";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import toast from "react-hot-toast";
import { useCart } from "../Context/CartContext";
import { Backdrop, CircularProgress, Rating } from "@mui/material";

import { Card } from 'primereact/card';
import toast from "react-hot-toast";


function Dashboard() {

    const { addToCart } = useCart();

    const [category] = useState([
        {
            img: 'https://rukminim1.flixcart.com/image/612/612/jg406fk0/shirt/c/c/z/m-12111371olivine-jack-jones-original-imaf4f5ezheqnkmy.jpeg?q=70',
            title: 'Mens',
        },
        {
            img: 'https://rukminim1.flixcart.com/image/832/832/kulk9zk0/sweatshirt/h/4/q/s-hc4329-adidas-original-imag7zjsezpemggh.jpeg?q=70',
            title: 'Women',
        },
        {
            img: 'https://www.jiomart.com/images/product/original/493177794/apple-iphone-14-pro-1-tb-deep-purple-digital-o493177794-p593694325-0-202306301818.jpeg?im=Resize=(420,420)',
            title: 'Mobiles',
        },
        {
            img: 'https://assets.ajio.com/medias/sys_master/root/20230316/kfGo/6412bcc3f997dde6f4ff491e/-1117Wx1400H-464643786-black-MODEL.jpg',
            title: 'Watch',
        },
        {
            img: 'https://rukminim1.flixcart.com/image/312/312/kuyf8nk0/computer/3/n/s/mk183hn-a-laptop-apple-original-imag7yzkbgbwvwq3.jpeg?q=70',
            title: 'Laptop',
        },
        {
            img: 'https://rukminim2.flixcart.com/image/832/832/l0fm07k0/television/7/x/9/-original-imagc8fnpx39evgc.jpeg?q=70',
            title: 'TV',
        },
        {
            img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/x/r/k/modern-md272qp-full-hd-27-md272qp-msi-original-imaghsfvkbpy4hpe.jpeg?q=70',
            title: 'Monitor',
        },
        {
            img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/air-conditioner-new/r/p/k/-original-imagkqs8xkt8hhfw.jpeg?q=70',
            title: 'AC',
        },
        {
            img: 'https://rukminim2.flixcart.com/image/832/832/kigbjbk0-0/headphone/i/j/i/mgyn3hn-a-apple-original-imafy8wcgvdhsyjj.jpeg?q=70',
            title: 'Headphone',
        },
        {
            img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/o/k/w/-original-imagj72ttsqcrehk.jpeg?q=70',
            title: 'Tab',
        },
    ]);

    const [product, setProducts] = useState([]);
    const [loader, setloader] = React.useState(false);

    const navigate = useNavigate();

    const handleNavigate = (title) => {
        navigate(`/${title}`);
    };

    const menProducts = product.filter(product => product.category === "Men's");
    const womenProducts = product.filter(product => product.category === "Women");
    const mobileProducts = product.filter(product => product.category === "Mobile");
    // const watchProducts = product.filter(product => product.category === "Watch");
    const tvProducts = product.filter(product => product.category === "TV");
    const acProducts = product.filter(product => product.category === "AC");

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

        getProducts();
    }, []);



    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="line-slider-container">
                {category.map((a, index) => (
                    <div className="slider-item" key={index}>
                        <img
                            src={a.img}
                            width="100px"
                            height="50px"
                            alt={a.title}
                            onClick={() => handleNavigate(a.title)}
                        />
                        <h5>{a.title}</h5>
                    </div>
                ))}
            </div>

            <br />

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/M-1.0-Ajiomania-PreBuzz-UHP-15112023-MainBanner.gif"
                            onClick={() => handleNavigate('Mens')}
                            className="d-block w-100"
                            alt="Watch"
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/17032023-d-mhp-uhphim-p3-lacoste-markmaddox-upto70extra10.jpg"
                            onClick={() => handleNavigate('Watch')}
                            className="d-block w-100"
                            alt="Watch"
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://assets.tatacliq.com/medias/sys_master/images/45331207815198.jpg"
                            onClick={() => handleNavigate('Mobiles')}
                            className="d-block w-100"
                            alt="Mobiles"
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/17032023-UHP-D-Main-P3-SuperdryAx-Min50Extra35.jpg"
                            onClick={() => handleNavigate('Mens')}
                            className="d-block w-100"
                            alt="Mens"
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="mt-5">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-Trust%20Marker.jpg" width="100%" alt="" />
            </div>
            <div className="mt-5">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-14062024-SpecialCollection-halfbanner.gif" onClick={() => handleNavigate('Mens')} width="100%" alt="" />
            </div>



            {/* <div className="product-container">
                <div className="product-box">
                    <h2>Top Men's Clothing</h2>
                    <button className="btn btn-primary" onClick={() => handleNavigate('Mens')}>View All</button>
                </div>
            </div>
            <div className="product-cart">
                {menProducts.slice(5, 9).map((product) => (
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
            </div> */}

            <div className="container-fluid mt-5">
                <Card title="Top Men's Clothing">

                    <div className="product-cart">
                        {menProducts.slice(5, 9).map((product) => (
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
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-primary" onClick={() => handleNavigate('Mens')}>View All</button>
                    </div>

                </Card>
            </div>

            <div id="carouselExample" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/71x21-rev%20(9).jpg"
                            onClick={() => handleNavigate('Mens')}
                            className="d-block w-100"
                            alt="Watch"
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/1440x128BOB.jpg"
                            onClick={() => handleNavigate('Watch')}
                            className="d-block w-100"
                            alt="Watch"
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/1440x128phonepe.jpg"
                            onClick={() => handleNavigate('Mobiles')}
                            className="d-block w-100"
                            alt="Mobiles"
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-without%20CTA%202a.jpg"
                            onClick={() => handleNavigate('Mens')}
                            className="d-block w-100"
                            alt="Mens"
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-fluid mt-5">
                <Card title="Top Women's Clothing">

                    <div className="product-cart">
                        {womenProducts.slice(5, 9).map((product) => (
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
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-primary" onClick={() => handleNavigate('Women')}>View All</button>
                    </div>

                </Card>
            </div>




            <div className="container-fluid mt-5">
                <Card title="Top Mobile">

                    <div className="product-cart">
                        {mobileProducts.slice(5, 9).map((product) => (
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
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-primary" onClick={() => handleNavigate('Mobiles')}>View All</button>
                    </div>

                </Card>
            </div>




            <div className="container-fluid mt-5">
                <Card title="Top TV's">

                    <div className="product-cart">
                        {tvProducts.slice(5, 9).map((product) => (
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
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-primary" onClick={() => handleNavigate('TV')}>View All</button>
                    </div>

                </Card>
            </div>




            <div className="container-fluid mt-5">
                <Card title="Top AC">

                    <div className="product-cart">
                        {acProducts.slice(5, 9).map((product) => (
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
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-primary" onClick={() => handleNavigate('AC')}>View All</button>
                    </div>

                </Card>
            </div>




        </>
    );
}

export default Dashboard;