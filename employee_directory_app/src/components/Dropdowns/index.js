import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Dropdown from "../Dropdown";

function Dropdowns() {
    return (
        <Container>
            <Row>
                <Col size="6">
                    <Dropdown dropdownName="Filter" />
                </Col>
                <Col size="6">
                    <Dropdown dropdownName="Sort" />
                </Col>
            </Row>
        </Container>
    );
};

export default Dropdowns;