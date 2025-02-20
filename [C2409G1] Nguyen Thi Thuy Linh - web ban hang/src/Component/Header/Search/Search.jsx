import "./Search.scss";
import {MdClose} from "react-icons/md";
import prod from "../../../../public/images/pocoX7.webp"

import PropTypes from "prop-types"

Search.propTypes = {
    setShowSearch: PropTypes.func.isRequired,
};
Search.defaultProp = {
    setShowSearch: () => {}
}

export default function Search ({setShowSearch}) {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input autoFocus type="text" placeholder="Search for products" />
                <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">

                <div className="start-msg">
                    Start typing to see products you are looking for.
                </div>

                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img src={prod} />
                        </div>
                        <div className="prod-details">
                            <span className="name">
                                Tên sản phẩm
                            </span>
                            <span className="desc">
                                Mô tả
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}