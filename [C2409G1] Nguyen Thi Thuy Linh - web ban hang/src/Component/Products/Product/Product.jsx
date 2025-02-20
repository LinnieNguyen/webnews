import prod from "../../../../public/images/pococ75.webp"
function Product () {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} />
            </div>
            <div className="prod-details">
                <span className="name">Tên sản phẩm</span>
                <span className="price">300.000 VND</span>
            </div>
        </div>
    );
}
export default Product