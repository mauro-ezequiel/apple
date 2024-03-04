import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/nav.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const Bar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="nav">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <i className="bi bi-apple"></i>
            </Nav.Link>
            <Nav.Link href="#pricing" className="bi">
              Store
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/mac/" className="bi">
              Mac
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/ipad/" className="bi">
              Ipad
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/iphone/" className="bi">
              Iphone
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/watch/" className="bi">
              Watch
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/watch/" className="bi">
              Vision
            </Nav.Link>
            <Nav.Link
              href="https://www.apple.com/apple-vision-pro/"
              className="bi"
            >
              Airpods
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/tv-home/" className="bi">
              TV & Home
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/services/" className="bi">
              Entertainment
            </Nav.Link>
            <Nav.Link
              href="https://www.apple.com/shop/accessories/all"
              className="bi"
            >
              Accessories
            </Nav.Link>
            <Nav.Link href="https://support.apple.com/" className="bi">
              Support
            </Nav.Link>
            <Nav.Link href="x" className="bi">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="x">
              <i className="bi bi-bag"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
