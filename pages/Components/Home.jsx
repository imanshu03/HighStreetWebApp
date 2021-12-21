import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ObserverContext } from '../../utils/ObserverContext';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../assets/hslogo.png';

const Home = () => {
  const observer = useContext(ObserverContext);
  const refHeader = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
    if (refHeader.current && observer) {
      observer.observe(refHeader.current);
    }
  }, [ref, observer, refHeader]);

  return (
    <Container id="home" className="overflow-hidden bg-white" fluid>
      <Row
        className="left-wrapper"
        ref={refHeader}
        data-func="show"
        data-classname="transition-left"
      >
        <Col>
          <p id="rera-number">
            RERA NUMBER: <b>PBRERA-SAS79-PC0160</b>
          </p>
        </Col>
      </Row>
      <Row
        className="h-100 transition-wrapper"
        ref={ref}
        data-func="show"
        data-classname="transition-up"
      >
        <Col
          xs={{ order: 'last', span: 12 }}
          sm={{ order: 'last', span: 12 }}
          md={{ order: 'first', span: 8 }}
          className="d-flex flex-column justify-content-center pt-2 home-wrapper"
        >
          <Row>
            <div className="heading">
              <h1 className="display-2">The HighStreet</h1>
              <h4>Park View Complex</h4>
            </div>
          </Row>

          <p className="lh-lg description">
            Nearest and Proximity Distance to Chandigarh & Panchkula, Zirakpur
            is counted an emerging cities in the country for its high livability
            quotient, superior connectivity, Large number of IT companies and
            ample options for commercial investment. Originally a cluster of
            villages and a satellite town in Punjab, Zirakpur is today a busy
            commercial destination and there are plans to develop it further
            through efforts from the Greater Mohali Area Development Authority
            (GMADA) and the state government.
            <br />
            It is a key destination where a potential untapped market is poised
            to draw in crowds and investors from every imaginable industry.
          </p>
        </Col>
        <Col
          xs={{ order: 'first', span: 12 }}
          sm={{ order: 'first', span: 12 }}
          md={{ order: 'first', span: 4 }}
          className="d-flex align-items-center justify-content-center pt-2"
        >
          <Image
            src={Logo}
            alt="high street logo"
            id="hs-logo"
            loading="eager"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
