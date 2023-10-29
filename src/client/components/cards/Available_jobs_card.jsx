import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Available_jobs_card = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/5434/5434883.png"
        width={100}
      />
      <Card.Body>
        <Card.Title>Jobs</Card.Title>
        <Card.Text>
          Are you searching for your dream job? You're in the right place!
          You're just one click away from having the best experience with
          NicaJobs
        </Card.Text>
        <Link to={`available_jobs`}>
          <Button variant="primary">Show Available Jobs</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Available_jobs_card;
