import { useRef, useEffect, useContext } from 'react';
import { ObserverContext } from '../../utils/ObserverContext';
import ComponentHeader from './ComponentHeader';
import { Container, Row } from 'react-bootstrap';
import MallIcon from '../../assets/mall.svg';
import CityIcon from '../../assets/cityscape.svg';
import HospitalIcon from '../../assets/hospital-building.svg';
import ParkingIcon from '../../assets/parking-area.svg';
import SocietyIcon from '../../assets/social-housing.svg';

const services = [
  { SvgIcon: CityIcon, text: 'Adjacent to panchkula' },
  { SvgIcon: HospitalIcon, text: '2 km to alchemist hospital' },
  { SvgIcon: MallIcon, text: 'walking distance to d-mart' },
  { SvgIcon: ParkingIcon, text: 'parking facilities' },
  {
    SvgIcon: SocietyIcon,
    text: 'surrounded by a number of housing co-operative society',
  },
];

const ServiceBox = ({ SvgIcon, text }) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <div
      className="m-3 service-box transition-wrapper"
      ref={ref}
      data-func="show"
      data-classname="transition-up"
    >
      <div className="content-wrapper">
        <SvgIcon />
        <h6>{text}</h6>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Container id="services" className="py-5 beige overflow-hidden" fluid>
      <ComponentHeader heading="amenities & specifications" />
      <Row className="justify-content-evenly">
        {services.map((ele, idx) => (
          <ServiceBox {...ele} key={idx} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
