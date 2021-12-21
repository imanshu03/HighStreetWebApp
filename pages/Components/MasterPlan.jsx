import React, { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ObserverContext } from '../../utils/ObserverContext';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import ComponentHeader from './ComponentHeader';
import MasterImg from '../../assets/masterPlan.png';
import RupeeIcon from '../../assets/rupee.svg';
import PossessionIcon from '../../assets/deal.svg';
import ScoSizeIcon from '../../assets/size.svg';
import PropertySizeIcon from '../../assets/measure.svg';
import TypeSizeIcon from '../../assets/property.svg';
import FloorIcon from '../../assets/social-housing.svg';
import ScoLeftIcon from '../../assets/for-sale.svg';
import TotalScoIcon from '../../assets/assets.svg';

const ProjectDetails = [
  { SvgIcon: <TypeSizeIcon />, heading: 'Type', value: 'SCO Sites' },
  {
    SvgIcon: <FloorIcon />,
    heading: 'Floors',
    value: '4 Floor Passed from state Government',
  },
  {
    SvgIcon: <ScoSizeIcon />,
    heading: 'Size',
    value: '15 * 50 feet',
    subValue: '15 * 60 feet',
  },
  {
    SvgIcon: <RupeeIcon />,
    heading: 'Price',
    value: 'Ask',
    onClickHandler() {
      document.getElementById('contact-us').scrollIntoView();
    },
  },
  {
    SvgIcon: <PossessionIcon />,
    heading: 'Possession',
    value: 'Ready on Spot',
  },
  { SvgIcon: <PropertySizeIcon />, heading: 'Property Area', value: '4 Acres' },
  { SvgIcon: <TotalScoIcon />, heading: 'Total SCO', value: '74 units' },
  { SvgIcon: <ScoLeftIcon />, heading: 'SCO Left', value: '11 Units' },
];

const DetailsBox = ({
  SvgIcon,
  heading,
  value,
  subValue = null,
  onClickHandler = null,
}) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <div
      className="masterPlan__desc__parent transition-wrapper"
      ref={ref}
      data-func="show"
      data-classname="transition-up"
      onClick={onClickHandler}
    >
      <div className="masterPlan__desc d-flex flex-column border border-light">
        <div className="fix">{SvgIcon}</div>
        <p>{heading}</p>
        <h5 className={onClickHandler ? 'masterPlan__Cta' : ''}>
          {value}
          {subValue && (
            <>
              <br />
              {subValue}
            </>
          )}
        </h5>
      </div>
    </div>
  );
};

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
      <ComponentHeader
        heading="about project"
        subheading="masterplan & project details"
      />

      <Row>
        <Col
          xs={12}
          sm={12}
          md={5}
          className="d-flex align-items-center justify-content-center image-wrapper pt-2 transition-wrapper"
          ref={ref}
          data-func="show"
          data-classname="transition-up"
        >
          <Image
            src={MasterImg}
            alt="high street master plan"
            fill="responsive"
            loading="eager"
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={7}
          className="d-flex align-items-center justify-content-center flex-column pt-2"
        >
          <Row className="w-100 d-flex flex-row flex-wrap justify-content-center">
            {ProjectDetails.map((tile, idx) => (
              <DetailsBox {...tile} key={idx} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MasterPlan;
