import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Post_job_card = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/6214/6214253.png"
        width={100}
        height={285}
      />
      <Card.Body>
        <Card.Title>Post Jobs</Card.Title>
        <Card.Text>
          Are you hiring and you have no clue how to do it?
          <br />
          Find the best way to post a job here clicking below
        </Card.Text>
        <Link to={`post_job`}>
          <Button variant="primary">Post a job</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default Post_job_card;
