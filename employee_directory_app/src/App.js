// import EmployeeDirectory from "./components/EmployeeDirectory";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Dropdown from "./components/Dropdown";

function App() {
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
