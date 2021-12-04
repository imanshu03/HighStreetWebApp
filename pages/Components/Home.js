import { useContext, useEffect, useRef } from "react";
import { ObserverContext } from "../../utils/ObserverContext";

const Home = () => {
  const observer = useContext(ObserverContext);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <div
      ref={ref}
      data-classname="show-div"
      data-func="show-timeout"
      data-delay="3000"
    ></div>
  );
};

export default Home;
