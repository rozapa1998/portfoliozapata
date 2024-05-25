import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarComponent = () => {
  return (
    <Navbar sticky='top' expand="lg" className="bg-body-tertiary nav-radius">
      <Container>
        <Navbar.Brand href="#home">Rodrigo Zapata</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComponent