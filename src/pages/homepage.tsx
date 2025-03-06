import { Container, Nav, Navbar } from "react-bootstrap";
import "../Css/header.css";

function HomePage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto flex flex-row justify-between">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Work Experience</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="header-content">
        <h1>Hello, I'm Yagit Gadhok</h1>
        <p>
          I'm a Frontend Developer with a passion for creating beautiful and
          user-friendly interfaces.
        </p>
      </div>
    </>
  );
}

export default HomePage;
