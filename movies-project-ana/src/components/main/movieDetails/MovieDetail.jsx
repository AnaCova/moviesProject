import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieDetail = ({ movie }) => {
  console.log("Details: ", movie);
  return (
    <>
      <Card className="media_details_container">
        <Card.Img
          variant="top"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          className="media_details_image"
        />
        <Container className="media_details_info_container">
          <Card.Title className="media_details_title">
            {movie.original_title}
          </Card.Title>
          <Container className="media_details_data_container">
            <Card.Title className="media_details_release_date">
              <i class="bx bx-calendar-star"></i>
              <span className="media_span">{movie.release_date}</span>
            </Card.Title>
            <Card.Title className="media_details_vote">
              <i class="bx bx-like"></i>
              <span className="media_span">{movie.vote_count}</span>
            </Card.Title>
          </Container>
          <Card.Body className="card_body_container">
            <Card.Text className="media_description">
              {movie.overview}
            </Card.Text>
            <Button className="media_button">
              <i class="bx bx-play"></i>
              <span className="media_play_span">Watch movie</span>
            </Button>
          </Card.Body>
        </Container>
      </Card>
    </>
  );
};

export default MovieDetail;
