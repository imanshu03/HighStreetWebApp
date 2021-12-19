import React, { useRef, useEffect, useContext, useState } from 'react';
import { ObserverContext } from '../../utils/ObserverContext';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ComponentHeader from './ComponentHeader';
import { re } from 'prettier/doc';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const notify = (message) => toast(message);

  const constraint = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const sendQuery = async (data) => {
    try {
      const res = await axios.post('/api/contact', {
        data,
      });
      reset();
      notify('we haved recieved your query');
    } catch (err) {
      notify('Something went wrong, Please try after some time');
    }
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is a required field')
      .min(3, 'Name must be at least 3 characters'),
    mobile: yup.number().required('Please input your Mobile number'),
    email: yup.string().email().required('Email is a required field'),
    message: yup
      .string()
      .required('Message is a required field')
      .min(1, 'Message must be at least 1 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    sendQuery(data);
  };

  const ref = useRef(null);
  const refHeader = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container
      className="pt-3 pb-5 overflow-hidden bg-white"
      id="contact-us"
      fluid
    >
      <ComponentHeader heading="contact us" />
      <Row
        className="transition-wrapper"
        ref={ref}
        data-func="show"
        data-classname="transition-up"
      >
        <Col md={6} sm={12} className="mt-3">
          <Row className="details">
            <h6>
              Email: <span className="text-muted">Shubham@gmail.com</span>
            </h6>
            <h6>
              Contact: <span className="text-muted">+91-9780282060</span>
            </h6>
          </Row>
          <Row>
            <Container style={{ height: '410px' }} className="w-100">
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
          <Form
            className="w-100 h-100 d-flex flex-column justify-content-between"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <Form.Group>
              {/* <label>FirstName</label> */}
              <Form.Control
                {...register('name')}
                type="name"
                placeholder="Full Name"
              />
              <p>{errors.name?.message}</p>
            </Form.Group>
            <Form.Group className="mt-3">
              {/* <label>Mobile</label> */}
              <Form.Control
                {...register('mobile')}
                type="mobile"
                placeholder="Mobile Number"
              />
              <p>{errors.mobile?.message}</p>
            </Form.Group>
            <Form.Group className="mt-3">
              {/* <label>Email Address</label> */}
              <Form.Control
                {...register('email')}
                type="email"
                placeholder="Email Address"
              />
              <p>{errors.email?.message}</p>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control
                {...register('message')}
                rows="10"
                placeholder="Message"
                as="textarea"
              />
              <p>{errors.message?.message}</p>
            </Form.Group>
            <Button type="submit" className="mt-3 w-100 custom-btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ContactForm;
