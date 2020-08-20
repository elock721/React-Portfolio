import React from "react";
import {Jumbotron} from "react-bootstrap"
const Hero = (props) => {
    return (
        <Jumbotron className="hero">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </Jumbotron>
    )
}
export default Hero;