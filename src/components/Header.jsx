import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      data-bs-theme="dark"
      className="mb-5"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/favicon-32x32.png"
            alt="Marca"
            width="32"
            height="32"
            className="d-inline-block align-top"
          />{" "}
          Livraria
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Página inicial</Nav.Link>
            <Nav.Link href="/authors">Autores</Nav.Link>
            <Nav.Link href="/books">Livros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
