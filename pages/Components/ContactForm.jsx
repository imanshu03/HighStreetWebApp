import React, { useRef, useEffect, useContext } from 'react';
import { ObserverContext } from '../../utils/ObserverContext';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ComponentHeader from './ComponentHeader';
import * as yup from 'yup';

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
  const refHeader = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container className="py-5 overflow-hidden" id="contact-us" fluid>
      <ComponentHeader heading="contact us" />
      <Row
        className="transition-wrapper"
        ref={ref}
        data-func="show"
        data-classname="transition-up"
      >
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.1020759918065!2d76.85372301564612!3d30.659253996220155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95f194d5ca13%3A0x28f78ba6fdceed9b!2sHigh%20Street%2C%20Commercial%20Showrooms%20at%20Peer%20muchulla%2C%20Sector%2020%20Panchkula!5e0!3m2!1sen!2sin!4v1639038140568!5m2!1sen!2sin&z=20"
                allowFullScreen
                loading="lazy"
                className="w-100 h-100 map-location"
              ></iframe>
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
