import React, { useEffect, useContext, useRef } from 'react';
import { ObserverContext } from '../../utils/ObserverContext';
import { Row, Col } from 'react-bootstrap';

const ComponentHeader = ({ heading, subheading }) => {
  const refHeader = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (refHeader.current && observer) {
      observer.observe(refHeader.current);
    }
  }, [observer, refHeader]);

  return (
    <Row
      className="left-wrapper py-3"
      ref={refHeader}
      data-func="show"
      data-classname="transition-left"
    >
      <Col className="d-flex flex-row justify-content-center" xs={12}>
        <h3 className="display-4 component-heading">{heading}</h3>
      </Col>
      {subheading && (
        <Col className="d-flex flex-row justify-content-center" xs={12}>
          <h6 className="component-heading">{subheading}</h6>
        </Col>
      )}
    </Row>
  );
};

export default ComponentHeader;
