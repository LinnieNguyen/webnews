import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types"
import { Col } from 'react-bootstrap';

ItemComponent.propTypes = {
    value: PropTypes.object,
};

function ItemComponent ({value}) {
    return (
        <>
            <Col className='mt-4'>
                <Card>
                    <Card.Img variant="top" src={value.photo} />
                    <Card.Body>
                        <Card.Title style={{fontFamily: "Arial"}}>
                                {value.title}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ItemComponent