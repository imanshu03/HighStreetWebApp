import react, { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ObserverContext } from '../../utils/ObserverContext';
import { Col, Container, Row } from 'react-bootstrap';
import MasterImg from '../../assets/masterPlan.jpeg';

const MasterPlan = () => {
  const observer = useContext(ObserverContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container
      className="h-100  home-col-up"
      fluid
      ref={ref}
      data-func="show"
      data-classname="transition-up"
      id="masterplan"
    >
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <h2 className="lh-lg masterPlan__heading">Master Plan</h2>
        </Col>
      </Row>

      <Row className="h-100">
        <Col
          xs={12}
          sm={12}
          md={5}
          className="d-flex align-items-center justify-content-center"
        >
          <Image
            src={MasterImg}
            alt="high street master plan"
            className="masterPlan__logo"
          />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={7}
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
      </Row>
    </Container>
  );
};

export default MasterPlan;
