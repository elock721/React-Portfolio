import React from "react";
import {Card, Button} from "react-bootstrap"


const ProjectCard = ({project}) => {
    const {name, description, github, deployed} = project
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">{github}</Button>
    <Button variant="primary">{deployed}</Button>
  </Card.Body>
</Card>
    )
}
export default ProjectCard;