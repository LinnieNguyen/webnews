import { Badge, Container, Row } from "react-bootstrap";
import ProductComponent from "../Component/ProductComponent";
import { products } from "../data/products";

function Tivi () {
        const tiviProducts = products.filter((product) => product.category === 'Giải Trí')
    
    return (
        <>
                <Container>
                    <h3 style={{marginTop: '50px'}}>
                    <Badge bg="secondary" >All Tivi</Badge>
        
                    </h3>
        
                    <Row style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                        >
                            {
                        tiviProducts.map((product, key) => {
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
export default Tivi