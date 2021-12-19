import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="footer-wrapper py-2" fluid>
      <Row className="h-100">
        <Col className="d-flex flex-row align-items-center justify-content-center">
          <p className="footer-text">
            Copyright © 2021 High Street, Peermuchalla, Zirakpur
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
