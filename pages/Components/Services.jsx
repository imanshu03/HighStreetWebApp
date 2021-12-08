import { useRef, useEffect, useContext } from 'react';
import { ObserverContext } from '../../utils/ObserverContext';
import { Container, Row, Col } from 'react-bootstrap';

const services = [
  {
    heading: 'Service 1',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  {
    heading: 'Service 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  {
    heading: 'Service 3',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  {
    heading: 'Service 4',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
  {
    heading: 'Service 5',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
  },
];

const Services = () => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container
      fluid
      id="services"
      className="transition-wrapper py-5"
      ref={ref}
      data-func="show"
      data-classname="transition-up"
    >
      <Row className="py-3">
        <h1 className="display-4 text-center">Services</h1>
      </Row>
      <Row className="justify-content-evenly">
        {services.map((ele, idx) => (
          <Col
            key={idx}
            lg={3}
            md={5}
            sm={10}
            xs={10}
            className="m-3 p-3 service-box"
          >
            <h2>{ele.heading}</h2>
            <p>{ele.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
