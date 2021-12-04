import { useContext, useEffect, useRef } from "react";
import { ObserverContext } from "../../utils/ObserverContext";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const observer = useContext(ObserverContext);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    if (ref1.current && observer) {
      observer.observe(ref1.current);
    }
    if (ref2.current && observer) {
      observer.observe(ref2.current);
    }
  }, [ref1, ref2, observer]);

  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <Col
          xs={{ order: "last", span: 12 }}
          sm={{ order: "last", span: 12 }}
          md={{ order: "first", span: 7 }}
          className="d-flex align-items-center justify-content-center home-col home-col-up"
          ref={ref1}
          data-func="show"
          data-classname="transition-down"
        >
          Text
        </Col>
        <Col
          xs={{ order: "first", span: 12 }}
          sm={{ order: "first", span: 12 }}
          md={{ order: "first", span: 5 }}
          className="d-flex align-items-center justify-content-center home-col home-col-down"
          ref={ref2}
          data-func="show"
          data-classname="transition-up"
        >
          Image
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
