import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { CgShoppingCart } from 'react-icons/cg';
import { TbSearch } from 'react-icons/tb';
import { useState } from 'react';
import Search from './Search/Search';
import Cart from '../Cart/Cart';

function Header() {


    const [showSearch, setShowSearch] = useState(false)
    const [showCart, setShowCart] = useState(false)

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
                        <Nav.Link href="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link  href="/mobile">
                            Di động
                        </Nav.Link>
                        <Nav.Link  href="/tivi">
                            Nhà thông minh
                        </Nav.Link>
                    </Nav>
                    
                    <span style={{
                        fontSize: '25px',
                         display:'flex',
                         color: 'grey'}}>
                    <TbSearch onClick={() => setShowSearch(true)}/>
                    </span>

                    <span style={{
                        fontSize: '25px',
                         marginLeft: '30px',
                         display:'flex',
                         color: 'grey'}}>                                           
                    <CgShoppingCart onClick={() => setShowCart(true)} />
                    </span>
                </Navbar.Collapse>
            </Container>
            {showSearch && <Search setShowSearch={setShowSearch} />}
            {showCart && <Cart setShowCart={setShowCart}/>}
        </Navbar>
    )
}
export default Header