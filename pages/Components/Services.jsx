import { useRef, useEffect, useContext } from 'react';
import { ObserverContext } from '../../utils/ObserverContext';
import ComponentHeader from './ComponentHeader';
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

const ServiceBox = ({ heading, description }) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Col
      lg={3}
      md={5}
      sm={10}
      xs={10}
      className="m-3 service-box transition-wrapper"
      ref={ref}
      data-func="show"
      data-classname="transition-up"
    >
      <div className="content-wrapper">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </Col>
  );
};

const Services = () => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container id="services" className="py-5 beige overflow-hidden" fluid>
      <ComponentHeader heading="services" />
      <Row className="justify-content-evenly">
        {services.map((ele, idx) => (
          <ServiceBox {...ele} key={idx} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
