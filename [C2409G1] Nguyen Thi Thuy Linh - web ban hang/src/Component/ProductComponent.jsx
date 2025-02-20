import { Card, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { useNavigate } from "react-router";

ProductComponent.propTypes = {
    value: PropTypes.object,
};

function ProductComponent ({value}) {

    const navigate = useNavigate()
    const handleProductClick = (id) => {
        navigate(`/product-detail/${id}`)
    }


    return (
        <>
     
            <Col className='mt-4' >
                <Card style={{ width: '14rem' }} onClick={() => handleProductClick(value.id) }>
                    <Card.Img 
                    variant="top" src={value.image} />
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                        <Card.Title>Giá: {value.price}</Card.Title>
                        <button onClick={() => (value)}>Thêm vào giỏ hàng</button>

                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
export default ProductComponent