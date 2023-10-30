import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Available_jobs from "./cards/Available_jobs_card";
import Customize_profile from "./cards/Customize_profile_card";
import Post_job_card from "./cards/Post_job_card";

const Home = () => {
  return (
    <>
      <main>
        <section>
          <Row className="cards py-5">
            <Col className="card_item d-flex justify-content-center align-items-center">
              <Available_jobs />
            </Col>
            <Col className="card_item d-flex justify-content-center align-items-center">
              <Post_job_card />
            </Col>

            <Col className="card_item d-flex justify-content-center align-items-center">
              <Customize_profile />
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};
export default Home;
