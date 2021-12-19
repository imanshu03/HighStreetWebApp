import React, { useEffect, useContext, useRef } from 'react';
import { ObserverContext } from '../../utils/ObserverContext';
import { Row, Col } from 'react-bootstrap';

const ComponentHeader = ({ heading }) => {
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
      <h3 className="display-4 component-heading text-center">{heading}</h3>
    </Row>
  );
};

export default ComponentHeader;
