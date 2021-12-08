import react, { useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
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
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h3>Crousel</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel>
              {imageData.map((data, i) => {
                return (
                  <Carousel.Item>
                    <Image src={data.image} alt="first slide" />
                    <Carousel.Caption>
                      <h3>{data.heading}</h3>
                      <p>{data.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCrousel;
