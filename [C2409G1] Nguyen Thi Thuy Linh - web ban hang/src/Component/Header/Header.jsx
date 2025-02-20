import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router';

function Header() {
    return (
        <Navbar>
            <Container >
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="subMenu me-auto my-2 my-lg-0 menu"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link  href="#action1">
                            <Link style={{textDecoration: 'none', color: 'grey'}} to="/home">
                            Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link  href="#action2">
                            <Link style={{textDecoration: 'none', color: 'grey'}} to="/mobile">
                            Di động
                            </Link>
                        </Nav.Link>
                        <Nav.Link  href="#">Nhà thông minh</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="tìm kiếm"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                       
                    </Form>
                    <span style={{
                        fontSize: '35px',
                         marginLeft: '50px',
                         display:'flex',
                         color: 'grey'}}>                                           
                            <CgShoppingCart />
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header