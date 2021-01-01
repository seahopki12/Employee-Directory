import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function Dropdowns() {
    return (
        <Container>
            <Row>
                <Col size="6">
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter By
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item">ID</button></li>
                            <li><button className="dropdown-item">Login</button></li>
                            <li><button className="dropdown-item">URL</button></li>
                            <li><button className="dropdown-item">Type</button></li>
                        </ul>
                    </div>
                </Col>
                <Col size="6">
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort By
                        </button>
                        <ul className="dropdown-menu">
                            <li>Login Ascending</li>
                            <li>Login Descending</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dropdowns;