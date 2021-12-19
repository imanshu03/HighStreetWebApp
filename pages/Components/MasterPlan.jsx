import React, { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ObserverContext } from '../../utils/ObserverContext';
import { Col, Container, Row } from 'react-bootstrap';
import ComponentHeader from './ComponentHeader';
import MasterImg from '../../assets/masterPlan.png';

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
      className="pt-3 pb-5 beige overflow-hidden"
      id="masterplan"
      fluid
    >
      <ComponentHeader heading="masterplan" />

      <Row
        className="transition-wrapper"
        ref={ref}
        data-func="show"
        data-classname="transition-up"
      >
        <Col
          xs={12}
          sm={12}
          md={5}
          className="d-flex align-items-center justify-content-center image-wrapper pt-2"
        >
          <Image
            src={MasterImg}
            alt="high street master plan"
            fill="responsive"
          />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={7}
          className="d-flex align-items-center justify-content-center pt-2"
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
