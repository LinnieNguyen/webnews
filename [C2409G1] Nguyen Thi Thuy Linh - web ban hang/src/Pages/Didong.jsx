import { Badge, Container, Row } from "react-bootstrap";
import ProductComponent from "../Component/ProductComponent";
import { products } from "../data/products";



function Didong () {
    const mobileProducts = products.filter((product) => product.type === 'mobile')

    return (
        <>
        <Container>
            <h3 style={{marginTop: '50px'}}>
            <Badge bg="secondary" >All Mobile</Badge>

            </h3>

            <Row style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
                >
                    {
                mobileProducts.map((product, key) => {
                    return (
                        <ProductComponent value={product} key={key} />
                    )
                } 
                )
            }
            </Row>
        </Container>
           
            
            
        </>
    )
}
export default Didong