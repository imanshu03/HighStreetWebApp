import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="white" expand="md" fixed="top" className="h-10">
      <Container>
        <Navbar.Brand href="#home">High Street</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-md-flex justify-content-end"
        >
          <Nav className="">
            <Nav.Link
              onClick={() => document.getElementById('home').scrollIntoView()}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                document.getElementById('masterplan').scrollIntoView()
              }
            >
              Masterplan
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
