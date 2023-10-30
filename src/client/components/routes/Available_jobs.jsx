import { useEffect, useState } from "react";
import axios from "axios";
import Jobs_card from "../cards/Jobs_card";
import Favorites_modal from "../modal/Favorites_modal";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Available_jobs = () => {
  const [jobsList, setJobsList] = useState([]);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);

  const handleCloseModal = () => setShowFavoritesModal(false);
  const handleShowModal = () => setShowFavoritesModal(true);

  useEffect(() => {
    axios
      .get("/api/available_jobs")
      .then(response => {
        setJobsList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [showFavoritesModal]);

  return (
    <>
      <h2 className="text-center my-5">Jobs Available</h2>
      <div className="row mb-5">
        <div className="col-10"></div>
        <div className="border d-flex justify-content-center align-items-center">
          <Button variant="light fw-bold fs-5" onClick={handleShowModal}>
            <FontAwesomeIcon icon={faHeart} size="xl" className="me-2" />
            Favorites
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <Favorites_modal
          showFavoritesModal={showFavoritesModal}
          handleCloseModal={handleCloseModal}
        />
        {jobsList.map(job => (
          <>
            <Jobs_card data={job} />
          </>
        ))}
      </div>
    </>
  );
};
export default Available_jobs;
