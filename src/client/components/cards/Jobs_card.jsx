import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Favorite_button from "./Favorite_button";

const Jobs_card = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.photo_url} width={100} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {new Date(data.date_posted).toLocaleDateString("en-GB")}
        </Card.Subtitle>
        <Card.Text>{data.description}</Card.Text>
        <div className="buttons container d-flex justify-content-between">
          <Link to={`details/${data.id}`}>
            <Button variant="success">See details</Button>
          </Link>
          <Favorite_button id={data.id} />
        </div>
      </Card.Body>
    </Card>
  );
};
export default Jobs_card;
