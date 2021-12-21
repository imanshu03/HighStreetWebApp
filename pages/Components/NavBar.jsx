import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
import Logo from '../../assets/hslogo.png';

const NavBar = () => {
  return (
    <Navbar bg="white" expand="md" sticky="top" className="hs-nav">
      <Container className="bg-white" fluid>
        <Navbar.Brand className="d-flex flex-row align-item-center">
          <span className="navbar-heading">High</span>
          <Image
            src={Logo}
            alt="high street logo"
            loading="eager"
            id="navbar-logo"
            width="30"
            height="30"
          />
          <span className="navbar-heading">Street</span>
        </Navbar.Brand>
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
                document.getElementById('home').scrollIntoView({
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
                document.getElementById('masterplan').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Masterplan
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (window.innerWidth <= 767) {
                  document.getElementById('button-toggle').click();
                }
                document.getElementById('image-gallery').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Image Gallery
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (window.innerWidth <= 767) {
                  document.getElementById('button-toggle').click();
                }
                document.getElementById('services').scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              Amenities
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                if (window.innerWidth <= 767) {
                  document.getElementById('button-toggle').click();
                }
                document.getElementById('contact-us').scrollIntoView({
                  behavior: 'smooth',
                });
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
