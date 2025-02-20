import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function SliderbarComponent () {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='../public/images/8f3ae1d88fef01f6a45a9cbadaa926e1.jpeg'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <Button style={{display: 'flex'}} variant="outline-dark" size="lg" active>
                        Tìm hiểu thêm
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../public/images/1017eaa5b32d8e0b6bd3e4e357adbea0 .jpeg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <Button style={{display: 'flex'}} variant="outline-dark" size="lg" active>
                        Tìm hiểu thêm
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../public/images/e278da037a9ac7dfd85d6cc7dcf5be97.jpeg"
                    alt="Third slide"
                    />
                    
                    <Carousel.Caption>
                    <Button style={{display: 'flex'}} variant="outline-dark" size="lg" active>
                        Tìm hiểu thêm
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default SliderbarComponent