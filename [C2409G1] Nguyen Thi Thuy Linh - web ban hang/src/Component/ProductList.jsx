import {  Container, Row } from "react-bootstrap"
import ProductComponent from "./ProductComponent";
import FeatureProductCoponent from "./FeatureProductCoponent";
import PropTypes from "prop-types"


ProductList.propTypes = {
    productsProp: PropTypes.array.isRequired,
};





function ProductList ({productsProp}) {

    return (
        <>
            <Container style={{
                width: "1200px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
                 }}>
               
                        {
                            productsProp.slice(0,1).map((product, key) => (
                                <FeatureProductCoponent value={product} key={key}/>
                            )
                            )
                        }
                    
           
                <Row style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
                >
                    {
                        productsProp.slice(1,5).map((product, key) => {
                            return (
                                <ProductComponent value={product} key={key} id={product.id}/>
                            )
                        })
                    }
                </Row>
            </Container>
            
        </>
    )
}
export default ProductList