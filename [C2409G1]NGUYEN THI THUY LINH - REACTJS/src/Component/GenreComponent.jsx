import { useEffect, useState } from "react"
import { Badge, Col, Container, Row } from "react-bootstrap"
import ItemComponent from "./ItemComponent"
import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import SubItemComponent from "./SubItemComponent";

GenreComponent.propTypes = {
    genre: PropTypes.string,
}
function GenreComponent ({genre}) {
    const [item, setItem] = useState ([])
    useEffect(() => {
        fetch('https://67a889316e9548e44fc14ac0.mockapi.io/trangchu/baiviet?category=' + genre)
        .then(data => {
            return data.json()
        }).then(data => {
            setItem(data)
            console.log(data)
        })
    },[genre])

    return (
        <>
        <Container className="mt-4">
            <h2>
                <Badge bg="secondary">{genre}</Badge>
            </h2>
            <Row >
                <Col md={6}>
                    <Row>
                        {
                            item.map((value, key) => {
                                if (key == 0) {
                                    return  <ItemComponent value={value} key={key} />
                                }
                                })
                        }
                    </Row>
                    <Row>                       
                            {
                                item.map((value, key) => {
                                    if (key >= 1 && key <= 2) {
                                        return <ItemComponent value={value} key={key} />
                                    }
                                    })
                            }           
                    </Row>
                </Col>
{/* Cot tin phu*/}
                <Col md={3}>
                    <Row>
                        {
                            item.map((value, key) => {
                                if (key == 3) {
                                    return  <ItemComponent value={value} key={key} />
                                }
                                })
                        }               
                    </Row>
                    <Row>
                        {
                            item.map((value, key) => {
                                if (key >=4 && key <=7) {
                                    return <SubItemComponent value={value} key={key} />
                                }
                            })
                        }
                    </Row>
                </Col>
{/* Cot QC*/}
                <Col className="mt-4">
                    <Image className="4" src="https://adi.admicro.vn/adt/adn/2021/04/banner-omf6HoH1R2.gif" fluid />

                    <Image className="4" src="https://adi.admicro.vn/adt/adn/2019/07/banner-XGgA24GH27.gif" fluid />
                </Col>
            </Row>
        </Container>          
        </>
    )
}

export default GenreComponent