import React, { useContext } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Dropdown from "react-bootstrap/Dropdown";
import UserContext from "../../utils/UserContext";

function Dropdowns() {
    const { sortByIdAsc, sortByIdDesc, sortByLoginAsc, sortByLoginDesc } = useContext(UserContext);

    return (
        <Container>
            <Row>
                <Col size="6">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter By
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>ID</Dropdown.Item>
                            <Dropdown.Item>Login</Dropdown.Item>
                            <Dropdown.Item>URL</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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