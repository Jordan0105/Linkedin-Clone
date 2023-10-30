import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";

const Favorites_modal = ({ showFavoritesModal, handleCloseModal }) => {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/favorites")
      .then(response => {
        setFavoritesList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [showFavoritesModal]);
  return (
    <>
      <Modal
        show={showFavoritesModal}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Favorites Jobs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th className="text-center">Job</th>
                <th className="text-center">Date Posted</th>
                <th className="text-center">Place</th>
              </tr>
            </thead>
            <tbody>
              {favoritesList.map(job => (
                <tr>
                  <td className="text-center">{job.name}</td>
                  <td className="text-center">
                    {new Date(job.date_posted).toLocaleDateString("en-GB")}
                  </td>
                  <td className="text-center">{job.work_location}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Favorites_modal;
