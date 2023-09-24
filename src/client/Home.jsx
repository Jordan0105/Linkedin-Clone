import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./components/NavBar";
import Available_jobs from "./components/cards/Available_jobs_card";
import Customize_profile from "./components/cards/Customize_profile_card";
const Home = () => {
  return (
    <>
      <Row className="nav-bar">
        <NavBar />
      </Row>
      <main>
        <section>
          <Row className="cards">
            <Col className="card_item">
              <Available_jobs />
            </Col>
            <Col className="card_item">
              <Customize_profile />
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};
export default Home;
