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
          className="d-flex align-items-center justify-content-center flex-column pt-2"
        >
          <Row className="w-100 d-flex flex-row flex-wrap justify-content-center">
            <div className="masterPlan__desc__parent">
              <div className="masterPlan__desc d-flex flex-column border border-light">
                <div className="fix">
                  <TypeSizeIcon />
                </div>
                <p>Type</p>
                <h5>SCO Sites</h5>
              </div>
            </div>
            <div className="masterPlan__desc__parent">
              <div className="masterPlan__desc d-flex flex-column border border-light">
                <div className="fix">
                  <FloorIcon />
                </div>
                <p>Floors</p>
                <h5>4 Floor Passed from state Government</h5>
              </div>
            </div>
            <div className="masterPlan__desc__parent">
              <div className="masterPlan__desc d-flex flex-column border border-light">
                <div>
                  {' '}
                  <ScoSizeIcon />
                </div>
                <p>Size</p>
                <h5>
                  15 * 50 feet <br></br>15 * 60 feet
                </h5>
              </div>
            </div>
            <div
              className="masterPlan__desc__parent"
              onClick={() =>
                document.getElementById('contact-us').scrollIntoView()
              }
            >
              <div className="masterPlan__desc d-flex flex-column border border-light">
                <div>
                  <RupeeIcon />
                </div>
                <p>Price</p>
                <h5 className="masterPlan__askPrice">Ask</h5>
              </div>
            </div>
            <div className="masterPlan__desc__parent">
              <div className="masterPlan__desc d-flex flex-column border border-light">
                <div>
                  <PossessionIcon />
                </div>
                <p>Possession</p>
                <h5>Ready on spot</h5>
              </div>
            </div>

            <div className="masterPlan__desc__parent">
              <div className="masterPlan__desc d-flex flex-column border border-light">
                <div>
                  <PropertySizeIcon />
                </div>
                <p>Project Area</p>
                <h5>4 Acres</h5>
              </div>
            </div>
            <div className="masterPlan__desc__parent">
              <div className="masterPlan__desc d-flex flex-column border border-light">
                <div className="fix">
                  <TotalScoIcon />
                </div>
                <p>Total SCO</p>
                <h5>74 units</h5>
              </div>
            </div>
            <div className="masterPlan__desc__parent">
              <div className="masterPlan__desc d-flex flex-column border border-light">
                <div>
                  <ScoLeftIcon />
                </div>
                <p>SCO Left</p>
                <h5>11 units</h5>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MasterPlan;
