import { useState } from "react";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";

function Dashboard() {


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


    const navigate = useNavigate();

    const handleNavigate = (title) => {
        navigate(`/${title}`);
    };



    return (
        <>
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

    <br/>

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

        </>
    );
}

export default Dashboard;