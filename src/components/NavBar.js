// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Kintoun from '../assets/img/Kintoun.webp';

function NavScrollExample() {
    return (
        <Navbar variant={"dark"} expand="lg" style={{ backgroundColor:'black' }}>
            <Container fluid>
                <Navbar.Brand href="#"><img src={Kintoun} alt="" width={150}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        
                        navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <NavDropdown title="Products" 
                            id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Motherboards</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Processors
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action5">
                                Graphic Cards
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;