import "./CartItem.scss";
import {MdClose} from "react-icons/md";
import prod from "../../../../public/images/pocoX7.webp"

export default function CartItem () {
    return (
        <div className="cart-products">

            <div className="search-result-item">
                <div className="image-container">
                    <img src={prod} />
                </div>
                <div className="prod-details">
                    <span className="name">Tên sản phẩm</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>
                            -
                        </span>
                        <span>1</span>
                        <span>
                            +
                        </span>
                    </div>
                    <div className="text">
                        <span>1</span>
                        <span>x</span>
                        <span className="highlight">
                            <span>&#8377;</span>
                            3000000
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}