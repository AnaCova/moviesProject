import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";


const Search = () => {

  return (
    <Container fluid className="search_container">
      <Form className="d-flex search_form">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className="search_button">
          <i class="bx bx-search-alt-2"></i>
        </Button>
      </Form>
    </Container>
  );
};

export default Search;
