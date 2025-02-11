import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from "prop-types" 


NavbarComponent.propTypes = {
    handleGenreId: PropTypes.func
}

function NavbarComponent({handleGenreId}) {
    const [navbar, setNavbar] = useState([])
    useEffect(() => {
        fetch('https://67a889316e9548e44fc14ac0.mockapi.io/trangchu/Category')
        .then(res => {
            return res.json()
        }).then(data => {
            setNavbar(data)
            console.log(data)
        })
    },[])

    const handleOnClick = (a) => {
        console.log("TEST")
        console.log(a)
        handleGenreId (a)
    }

    return(
        <>
        <Navbar style={{fontSize: "12px", fontFamily: "Helvetica", backgroundColor: "#007F74", fontWeight: "bold", color: "white"}} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#" onClick={() => handleOnClick("Home")} >Home</Navbar.Brand>
                        <Nav className="me-auto">
                            {
                                navbar.map((value, key) => (
                                    <Nav.Link href="#"  key={key} onClick={() => handleOnClick(value.category)}>{value.category}</Nav.Link>
                                ))
                            }
                        </Nav>
                </Container>
        </Navbar>
        </>
    )
}

export default NavbarComponent