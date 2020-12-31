// import EmployeeDirectory from "./components/EmployeeDirectory";
import React, { useEffect, useState } from "react";
import UserContext from "../utils/userContext";
import API from "../utils/API";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Dropdown from "./components/Dropdown";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userIndex, setUserIndex] = useState(0);

  const loadUsers = () => {
    API.getUsers()
      .then(users => {
        setUsers(users);
        setUser(users[0]);
      })
      .catch(err => console.log(err));
  };

  return (
    // <EmployeeDirectory />
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col size="6">
            <Dropdown dropdownName="Filter" />
          </Col>
          <Col size="6">
            <Dropdown dropdownName="Sort"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
