import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import PropTypes from "prop-types"

Cart.propTypes = {
    setShowCart: PropTypes.func.isRequired,
};
Cart.defaultProp = {
    setShowCart: () => {}
}


export default function Cart ({setShowCart}) {
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn">
                        <MdClose className="close-btn" onClick={() => setShowCart(false)} />
                        <span className="text">close</span>
                    </span>
                </div>

                <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the cart.</span>
                    <button className="return-cta">
                        RETURN TO SHOP
                    </button>
                </div>

                <>
                    <CartItem />

                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">
                                300000
                            </span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta">
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
}