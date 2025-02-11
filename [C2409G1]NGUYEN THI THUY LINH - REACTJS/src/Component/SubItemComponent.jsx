import { CardTitle, Col, Container, Row } from "react-bootstrap"
import Image from 'react-bootstrap/Image';
import PropTypes from "prop-types"

SubItemComponent.propTypes = {
    value: PropTypes.object,
};

function SubItemComponent ({value}) {
    return (
        <>
        <Container>
            <Row className="mt-4">
                <Col>
                    <Image style={{width: "150px", height: "100px"}} src={value.photo} rounded />
                </Col>
                <Col>
                    <CardTitle style={{fontSize: "14px"}}>
                        {value.title}
                    </CardTitle>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default SubItemComponent