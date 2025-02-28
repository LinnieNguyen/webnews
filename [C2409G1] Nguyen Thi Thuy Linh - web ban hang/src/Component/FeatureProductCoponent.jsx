import { Card, Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import { useNavigate } from "react-router";


FeatureProductCoponent.propTypes = {
    value: PropTypes.object,
    addToCart: PropTypes.object,
};

function FeatureProductCoponent ({value, addToCart}) {
    const navigate = useNavigate()
    const handleProductClick = (id) => {
        navigate(`/product-detail/${id}`)
    }


    return(
        <>
            <Row style={{
                    border: '1px solid white',
                    marginTop: "40px", 
                    width: "1000px",
                    display: "flex",
                    }}>
                <Col>
                    <img style={{width: '450px'}} src={value.image} alt="" />
                </Col>
                <Col>
                <Card.Body onClick={() => handleProductClick(value.id) }>
                    <Card.Img variant="top" src={value.imagelogo} />
                    
                    <h2 style={{textAlign: 'center', marginTop: '30px'}}>Từ {value.price}</h2>
                    <button onClick={() => addToCart(value)}>Thêm vào giỏ hàng</button>
                </Card.Body>
                
                </Col>
                    
            </Row>
        </>
    )
}
export default FeatureProductCoponent