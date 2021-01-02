import React, { useContext } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Dropdown from "react-bootstrap/Dropdown";
import UserContext from "../../utils/UserContext";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Dropdowns() {
    const { sortByIdAsc, sortByIdDesc, sortByLoginAsc, sortByLoginDesc } = useContext(UserContext);

    return (
        <Container>
            <Row>
                <Col size="6">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </Col>
                <Col size="6">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Sort By
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={sortByIdAsc}>ID Ascending</Dropdown.Item>
                            <Dropdown.Item onClick={sortByIdDesc}>ID Descending</Dropdown.Item>
                            <Dropdown.Item onClick={sortByLoginAsc}>Login Ascending</Dropdown.Item>
                            <Dropdown.Item onClick={sortByLoginDesc}>Login Descending</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
};

export default Dropdowns;