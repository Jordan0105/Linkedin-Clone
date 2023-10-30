import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Favorite_button = ({ id }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavoritesClick = id => {
    axios
      .post("/api/add_favorites", { id: id })
      .then(response => {
        console.log("success");
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deleteToFavoritesClick = id => {
    axios
      .post("/api/delete_favorites", { id: id })
      .then(response => {
        console.log("success");
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get("/api/favorites")
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [favorites]);

  const isFavorite = favorites.some(favorite => favorite.id === id);

  return (
    <>
      {isFavorite ? (
        <Button variant="light" onClick={() => deleteToFavoritesClick(id)}>
          <FontAwesomeIcon
            icon={faThumbsDown}
            size="xl"
            style={{ color: "#1100ff" }}
          />
        </Button>
      ) : (
        <Button variant="light" onClick={() => addToFavoritesClick(id)}>
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="xl"
            style={{ color: "#1100ff" }}
          />
        </Button>
      )}
    </>
  );
};
export default Favorite_button;
