import React, { useRef, useEffect, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { ObserverContext } from '../../utils/ObserverContext';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import * as yup from 'yup';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactForm = () => {
  const constraint = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is a required field')
      .min(3, 'Name must be at least 3 characters'),
    age: yup
      .number()
      .required('Please supply your age')
      .min(18, 'You must be at least 18 years')
      .max(60, 'You must be at most 60 years'),
    email: yup.string().email().required('Email is a required field'),
  });

  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container
      className="grey py-5 transition-wrapper"
      id="contact-us"
      fluid
      ref={ref}
      data-func="show"
      data-classname="transition-up"
    >
      <Row className="row py-3">
        <Col>
          <h1 className="display-4 text-center">Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12} className="mt-3">
          <Row>
            <h5>
              Address:{' '}
              <small className="text-muted">High Street, Peer Muchalla</small>
            </h5>
            <h5>
              Email: <small className="text-muted">Shubham@gmail.com</small>
            </h5>
            <h5>
              Contact:{' '}
              <small className="text-muted">
                +91 77009696967 || +91 7837770661
              </small>
            </h5>
          </Row>
          <Row>
            <Container style={{ height: '400px' }} className="w-100">
              <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={constraint.center}
                defaultZoom={constraint.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </Container>
          </Row>
        </Col>
        <Col md={6} sm={12} className="mt-3">
          <Form className="w-100 h-100 d-flex flex-column justify-content-between">
            <Form.Group>
              {/* <label>FirstName</label> */}
              <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mt-3">
              {/* <label>Mobile</label> */}
              <Form.Control type="mobile" placeholder="Mobile Number" />
            </Form.Group>
            <Form.Group className="mt-3">
              {/* <label>Email Address</label> */}
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control rows="10" placeholder="Message" as="textarea" />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3 w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
