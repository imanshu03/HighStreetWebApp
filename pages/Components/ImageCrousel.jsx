import React, { useEffect, useRef, useContext } from 'react';
import Image from 'next/image';
import { ObserverContext } from '../../utils/ObserverContext';
import { Carousel, Container, Col, Row } from 'react-bootstrap';
import Image1 from '../../assets/masterCrouseone.jpeg';
import Image2 from '../../assets/masterCrousesecond.jpeg';
import Image3 from '../../assets/masterCrousethird.jpeg';
import Image4 from '../../assets/masterCrousefour.jpeg';

const imageData = [
  {
    image: Image1,
    heading: 'First slide',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    image: Image2,
    heading: 'Second slide',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    image: Image3,
    heading: 'Third slide',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    image: Image4,
    heading: 'Four slide',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
];

const ImageCrousel = () => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container
      className="transition-wrapper grey py-5"
      id="image-gallery"
      fluid
      ref={ref}
      data-func="show"
      data-classname="transition-up"
    >
      <Row className="py-3">
        <Col>
          <h3 className="display-4 text-center">Image Gallery</h3>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-row justify-content-center h-100">
          <Carousel className="carousel-images">
            {imageData.map((data, i) => {
              return (
                <Carousel.Item key={i}>
                  <Image
                    src={data.image}
                    alt="first slide"
                    className="project-image"
                  />
                  <Carousel.Caption>
                    <h3>{data.heading}</h3>
                    <p>{data.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageCrousel;
