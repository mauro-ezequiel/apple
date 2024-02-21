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
              Tienda
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/mac/" className="bi">
              Mac
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/ipad/" className="bi">
              Ipad
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/iphone/" className="bi">
              iphone
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/watch/" className="bi">
              whatch
            </Nav.Link>
            <Nav.Link href="https://www.apple.com /airpods/" className="bi">
              airpods
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/tv-home/" className="bi">
              Tv y casa
            </Nav.Link>
            <Nav.Link href="https://www.apple.com/ apple/" className="bi">
              apple
            </Nav.Link>
            <Nav.Link
              href="https://www.apple.com/shop/accessories/all"
              className="bi"
            >
              accesorios
            </Nav.Link>
            <Nav.Link href="https://support.apple.com/" className="bi">
              soportes
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
