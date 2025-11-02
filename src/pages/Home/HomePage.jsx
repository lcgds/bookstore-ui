import { Header } from "../../components/Header";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4">Bem-vindo à Livraria</h1>
          <p className="lead">Gerencie seu acervo de livros e autores</p>
        </div>

        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body className="text-center py-5">
                <Card.Title className="display-6">📚 Autores</Card.Title>
                <Card.Text>Gerencie os autores do seu acervo</Card.Text>
                <Link to="/authors">
                  <Button variant="primary">Ver Autores</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card>
              <Card.Body className="text-center py-5">
                <Card.Title className="display-6">📖 Livros</Card.Title>
                <Card.Text>Gerencie os livros do seu acervo</Card.Text>
                <Link to="/books">
                  <Button variant="primary">Ver Livros</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
