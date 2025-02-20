import {FaCartPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter} from "react-icons/fa";
import './ProductDetail.scss'
import {  useNavigate, useParams } from "react-router";
import { products } from "../../data/products";
export default function ProductDetail () {
    const {id} = useParams();
    const navigate = useNavigate()
    const product = products.find((item) => item.id === parseInt(id));

    if(!product){
        return(
            <div>
                <button onClick={() => navigate("/")}>Back to Home</button>
            </div>

        )
    }
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                 
                            <div className="left">
                            <img src={product.image} />
                        </div>
                        <div className="right">
                            <span className="name">{product.name}</span>
                            <span className="price">{product.price}</span>
                            <span className="desc">Mô tả sản phẩm</span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                                <button className="add-to-cart-button">
                                    <FaCartPlus size={20} />
                                    ADD TO CART
                                </button>
                            </div>

                            <span className="divider" />
                            <div className="info-item">
                                <span className="text-bold">
                                    Category:
                                    <span>{product.category}</span>
                                </span>
                                <span className="text-bold">
                                    Share:
                                    <span className="social-icons">
                                        <FaFacebookF size={16} />
                                        <FaTwitter size={16} />
                                        <FaInstagram size={16} />
                                        <FaLinkedinIn size={16} />
                                        <FaPinterest size={16} />
                                    </span>
                                </span>
                            </div>
                        </div>
                  
                    
                </div>
            </div>
        </div>
    );
}