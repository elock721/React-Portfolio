import React from "react";
import {Jumbotron, Row, Col, Image,  md} from "react-bootstrap"
const Hero = (props) => {
    return (
        <Jumbotron className="hero">
          <Row>
          <Col md={6}>
            <h1>Hello! Elliott Lockwood here</h1>
            <p>
            After being born and raised in Houston, Texas, I went on to graduate from the University of
							Kansas in 2012. I spent the next 7 years working offshore and traveling the world. Now I am a student at the UT Austin Coding
							Bootcamp preperaing for a career in tech!
            </p>
          </Col>
          <Col md={6}>
            <Image fluid src="https://pbs.twimg.com/profile_images/900107838562762752/DRkrjFed_400x400.jpg" />
          </Col>
        </Row>
      </Jumbotron>
    )
}
export default Hero;