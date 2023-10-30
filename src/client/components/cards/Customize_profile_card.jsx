import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Outlet, Link } from "react-router-dom";

const Customize_profile_card = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-edit-profile-icon-png-image_780345.jpg"
        width={100}
        height={285}
      />
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <Card.Text>
          The best way to become visible on NicaJobs is to have a strong
          professional profile
        </Card.Text>
        <Link to={`available_jobs`}>
          <Button variant="primary">Edit your profile</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Customize_profile_card;
