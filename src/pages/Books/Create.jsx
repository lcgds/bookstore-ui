import { Form, Button, Card, Container } from "react-bootstrap";
import { Header } from "../../components/Header";

export const BookCreate = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Card>
          <Card.Body>
            <h2 className="mb-4">Cadastrar Livro</h2>
            <Form className="d-grid gap-0 row-gap-3">
              <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" name="title" required autoFocus />
              </Form.Group>

              <Form.Group>
                <Form.Label>ISBN</Form.Label>
                <Form.Control type="text" name="isbn" required />
              </Form.Group>

              <Form.Group>
                <Form.Label>Ano de publicação</Form.Label>
                <Form.Control type="text" name="published_year" required />
              </Form.Group>

              <Form.Group>
                <Form.Label>Preço</Form.Label>
                <Form.Control
                  type="number"
                  name="isbn"
                  min="1"
                  placeholder="R$"
                />
              </Form.Group>

              <div className="d-flex gap-2 mt-4 justify-content-end">
                <Button variant="primary" type="submit">
                  Salvar
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => window.history.back()}
                >
                  Cancelar
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default BookCreate;
