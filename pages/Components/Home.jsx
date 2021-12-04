import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ObserverContext } from '../../utils/ObserverContext';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../assets/images.png';

const Home = () => {
  const observer = useContext(ObserverContext);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container className="h-100" fluid>
      <Row
        className="h-100 home-col-up"
        ref={ref}
        data-func="show"
        data-classname="transition-up"
      >
        <Col
          xs={{ order: 'last', span: 12 }}
          sm={{ order: 'last', span: 12 }}
          md={{ order: 'first', span: 8 }}
          className="d-flex align-items-center justify-content-center"
        >
          <p className="lh-lg description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col
          xs={{ order: 'first', span: 12 }}
          sm={{ order: 'first', span: 12 }}
          md={{ order: 'first', span: 4 }}
          className="d-flex align-items-center justify-content-center"
        >
          <Image src={Logo} alt="high street logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
