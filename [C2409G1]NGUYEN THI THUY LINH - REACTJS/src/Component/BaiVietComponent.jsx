import { useEffect, useState } from "react";
import ItemComponent from "./ItemComponent";
import { Row, Col, Container, Badge } from "react-bootstrap";
import SubItemComponent from "./SubItemComponent";
import Image from 'react-bootstrap/Image';

function BaiVietComponent () {

    const [baiviet, setBaiviet] = useState([])
    useEffect(() => {
        fetch('https://67a889316e9548e44fc14ac0.mockapi.io/trangchu/baiviet')
        .then(data => {
            return data.json()
        }).then(data => {
            setBaiviet(data)
            console.log(data)
        })
    },[])

    return (
        <>
        <Container className="mt-4">
            <h2>
                <Badge bg="secondary">Tin nổi bật</Badge>
            </h2>
            <Row >
                <Col md={6}>
                    <Row>
                        {
                            baiviet.map((value, key) => {
                                if (value.rate == "hot" & key == 0) {
                                    return  <ItemComponent value={value} key={key} />
                                }
                                })
                        }
                    </Row>
                    <Row>                       
                            {
                                baiviet.map((value, key) => {
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
                            baiviet.map((value, key) => {
                                if (key == 3) {
                                    return  <ItemComponent value={value} key={key} />
                                }
                                })
                        }               
                    </Row>
                    <Row>
                        {
                            baiviet.map((value, key) => {
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

        <Container className="mt-4">
            <h2>
                <Badge bg="secondary">Tất cả tin</Badge>
            </h2>
            <Row md={4}> 
                    {
                        baiviet.map((value, key) => {
                            if (key >= 8) {
                                return <ItemComponent value={value} key={key} />
                            }
                            })
                    }         
            </Row>
        </Container>
        </>
    )
}

export default BaiVietComponent