import Nav from 'react-bootstrap/Nav';
import PropTypes from "prop-types"

NavbarCenterComponent.propTypes = {
    categories: PropTypes.array.isRequired,
    onSelectCategory: PropTypes.func,
};
  


function NavbarCenterComponent ({categories, onSelectCategory}) {



    return (
        <>
            <Nav style={{paddingLeft: "450px", display: "flex", gap: "50px"}}  variant="underline" defaultActiveKey="/home">

            {
                categories.map((category) => 
                    (
                    <Nav.Item key={category}>
                    <Nav.Link style={{color: 'black'}} href="" onClick={() => onSelectCategory(category)}>{category}</Nav.Link>
                    </Nav.Item>
                    )
                
                )
            }

            </Nav>
        </>
    )
}
export default NavbarCenterComponent