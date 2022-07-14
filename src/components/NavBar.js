// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Kintoun from '../assets/img/Kintoun.webp';
import CartWidget from './CartWidget';
import '../App.css'

function NavScrollExample() {
    return (
        <Navbar variant={"dark"} expand="navbar navbar-expand-lg pb-3" style={{ backgroundColor: 'black' }}>
            <Container fluid>
                <Navbar.Brand href="#"><img src={Kintoun} alt="" width={150} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"

                        navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Motherboards</Nav.Link>
                        <Nav.Link href="#action2">Micros</Nav.Link>

                        {/* <NavDropdown title="Products"
                            id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">
                                Motherboards</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Processors
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#containGraphic">
                                Graphic Cards
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;