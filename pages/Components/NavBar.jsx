import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="white" expand="md" sticky="top" className="hs-nav">
      <Container className="bg-white" fluid>
        <Navbar.Brand>High Street</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="button-toggle" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-md-flex justify-content-end"
        >
          <Nav className="">
            <Nav.Link
              onClick={() => {
                if (window.innerWidth <= 767) {
                  document.getElementById('button-toggle').click();
                }
                document.getElementById('main-content').scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (window.innerWidth <= 767) {
                  document.getElementById('button-toggle').click();
                }
                document.getElementById('masterplan').scrollIntoView();
              }}
            >
              Masterplan
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (window.innerWidth <= 767) {
                  document.getElementById('button-toggle').click();
                }
                document.getElementById('image-gallery').scrollIntoView();
              }}
            >
              Image Gallery
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (window.innerWidth <= 767) {
                  document.getElementById('button-toggle').click();
                }
                document.getElementById('services').scrollIntoView();
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (window.innerWidth <= 767) {
                  document.getElementById('button-toggle').click();
                }
                document.getElementById('contact-us').scrollIntoView();
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
