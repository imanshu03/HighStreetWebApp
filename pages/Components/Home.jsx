import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ObserverContext } from '../../utils/ObserverContext';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../assets/images.png';

const Home = () => {
  const observer = useContext(ObserverContext);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <Container
      id="home"
      className="transition-wrapper py-5 h-100 overflow-hidden"
      ref={ref}
      data-func="show"
      data-classname="transition-up"
      fluid
    >
      <Row className="h-100">
        <Col
          xs={{ order: 'last', span: 12 }}
          sm={{ order: 'last', span: 12 }}
          md={{ order: 'first', span: 8 }}
          className="d-flex flex-column justify-content-center pt-2"
        >
          <Row>
            <h1>The HighStreet</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Park
              view Complex
            </p>
          </Row>

          <p className="lh-lg description">
            Nearest and Proximity disance to panchkula cojioing wall to
            panchkula. Zirakpur is an emerging city with superior connectivity,
            large number of people already living and working here. Zirakpur
            today, a busy commercial destination and there are plans to develop
            it furthure through state goverment.
            <br></br>
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
          <Image src={Logo} alt="high street logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
