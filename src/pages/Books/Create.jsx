import { useEffect, useState } from "react";
import { Alert, Form, Button, Card, Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import { BooksFetch } from "../../api/books.js";
import { Handler } from "../../api/handlersReact.js";
import { AuthorsFetch } from "../../api/authors.js";

export const BookCreate = () => {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    isbn: "",
    publish_year: "",
    price: "",
    stock: "",
    author_ids: [],
  });

  const [allAuthors, setAllAuthors] = useState([]);
  const [searchAuthor, setSearchAuthor] = useState("");

  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await new AuthorsFetch().getAllAuthors(true);
      setAllAuthors(response.data);
    };

    fetchAuthors();
  }, []);

  return (
    <>
      <Header />

      {show && (
        <Container className="mb-5">
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Registro cadastrado</Alert.Heading>
          </Alert>
        </Container>
      )}

      <Container>
        <Card>
          <Card.Body>
            <h2 className="mb-4">Cadastrar Livro</h2>

            <Form className="d-grid gap-0 row-gap-3" onSubmit={() => {
              event.preventDefault();

              const payload = {
                title: formData.title,
                isbn: formData.isbn,
                publish_year: Number(formData.publish_year),
                price: Number(formData.price),
                stock: Number(formData.stock),
                author_ids: formData.author_ids,
              };

              new BooksFetch().registerBook(payload);
              setShow(true);
              event.target.reset();
            }}>
              <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  required
                  autoFocus
                  value={formData.title}
                  onChange={(e) =>
                    new Handler().handleChange(e, setFormData)
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type="text"
                  name="isbn"
                  required
                  value={formData.isbn}
                  onChange={(e) =>
                    new Handler().handleChange(e, setFormData)
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Ano de publicação</Form.Label>
                <Form.Control
                  type="number"
                  name="publish_year"
                  step="1"
                  min="0"
                  required
                  value={formData.publish_year}
                  onChange={(e) =>
                    new Handler().handleChange(e, setFormData)
                  }
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
                  onChange={(e) =>
                    new Handler().handleChange(e, setFormData)
                  }
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
                  onChange={(e) =>
                    new Handler().handleChange(e, setFormData)
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Autores</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Pesquisar autor..."
                  value={searchAuthor}
                  onChange={(e) => setSearchAuthor(e.target.value)}
                />

                <div
                  className="border rounded p-2 mt-2"
                  style={{ maxHeight: "150px", overflowY: "auto" }}
                >
                  {allAuthors
                    .filter((a) => a.name?.toLowerCase().includes(searchAuthor.toLowerCase()))
                    .map((author) => (
                      <Form.Check
                        key={author.id}
                        type="checkbox"
                        label={author.name + " - Nacionalidade: " + author.nationality}
                        value={author.id}
                        checked={formData.author_ids.includes(author.id)}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setFormData((prev) => ({
                            ...prev,
                            author_ids: checked
                              ? [...prev.author_ids, Number(value)]
                              : prev.author_ids.filter(
                                  (id) => id !== Number(value)
                                ),
                            }));
                          }}
                        />
                      ))}
                </div>
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
