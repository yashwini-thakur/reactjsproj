import { useParams, useHistory, useLocation } from "react-router-dom";
import qs from "query-string";

const About = () => {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const parsed = qs.parse(location.search);
  console.log(history.location, "history");
  return (
    <div>
      <h2>About</h2>
      <button onClick={() => history.push("/")}>Home</button>
    </div>
  );
};

export default About;

// import React from "react";

// function Welcome(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// export default Welcome;
