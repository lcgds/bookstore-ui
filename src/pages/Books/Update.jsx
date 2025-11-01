import { useEffect, useState } from "react";
import { Alert, Form, Button, Card, Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import { useLocation } from "react-router-dom";
import { Handler } from "../../utils/handlersReact.js";
import { BooksFetch } from "../../api/books.js";

export const BookUpdate = () => {
  const [show, setShow] = useState(false);

  const initialData = useLocation().state || {};

  const [formData, setFormData] = useState({
    title: initialData.title || "",
    isbn: initialData.isbn || "",
    published_year: initialData.published_year || "",
    price: initialData.price || "",
    stock: initialData.stock || "",
  });

  return (
    <>
      <Header />
      {show && (
        <Container className="mb-5">
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Registro atualizado</Alert.Heading>
          </Alert>
        </Container>
      )}
      <Container>
        <Card>
          <Card.Body>
            <h2 className="mb-4">Editar Livro</h2>
            <Form
              className="d-grid gap-0 row-gap-3"
              onSubmit={() => {
                event.preventDefault();
                new BooksFetch().updateBook(initialData.id, formData);
                setShow(true);
              }}
            >
              <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  required
                  onChange={(e) => new Handler().handleChange(e, setFormData)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  required
                  onChange={(e) => new Handler().handleChange(e, setFormData)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Ano de publicação</Form.Label>
                <Form.Control
                  type="number"
                  step="1"
                  name="published_year"
                  value={formData.published_year}
                  required
                  onChange={(e) => new Handler().handleChange(e, setFormData)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Preço</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  placeholder="R$"
                  value={formData.price}
                  required
                  onChange={(e) => new Handler().handleChange(e, setFormData)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Estoque</Form.Label>
                <Form.Control
                  type="number"
                  name="stock"
                  min="0"
                  step="1"
                  value={formData.stock}
                  required
                  onChange={(e) => new Handler().handleChange(e, setFormData)}
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

export default BookUpdate;
