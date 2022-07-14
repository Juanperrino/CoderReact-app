// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Kintoun from '../assets/img/Kintoun.webp';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import '../App.css'

function NavScrollExample() {
    return (
        <Navbar variant={"dark"} expand="navbar navbar-expand-lg pb-3" style={{ backgroundColor: 'black' }}>
            <Container fluid>
                <Link to="/"><img src={Kintoun} alt="" width={150} /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"

                        navbarScroll>
                        <Link to="/">Home</Link>
                        <Link to="/category/:Motherboardsid">Jackets</Link>
                        <Link to="/category/micros/:idMicros">Mens</Link>

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