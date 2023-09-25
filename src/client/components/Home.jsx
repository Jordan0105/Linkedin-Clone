import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Available_jobs from "./cards/Available_jobs_card";
import Customize_profile from "./cards/Customize_profile_card";
const Home = () => {
  return (
    <>
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
