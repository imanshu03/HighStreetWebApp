import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const toggleMenu = (menu, button) => {
    menu.classList.toggle('show', false);
    button.classList.toggle('collapsed', true);
  };
  return (
    <Navbar bg="white" expand="md" fixed="top" className="h-10">
      <Container>
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
                window.scrollTo({ top: 0, behavior: 'smooth' });
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

export default Header;
