import { useEffect, useRef, useState } from "react";
import { Alert, Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { AuthorsFetch } from "../../api/authors.js";

export const AuthorsPage = () => {

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await new AuthorsFetch().getAllAuthors(true);
      setAuthors(data.data);
    }
    fetchData()
  }, []);

  const [show, setShow] = useState(false);

  return (
    <>
      <Header />
      {show && (
        <Container className="mb-5">
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Registro excluído</Alert.Heading>
          </Alert>
        </Container>
      )}
      <Container>
        <h2 className="mb-4">Autores</h2>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de nascimento</th>
              <th>Nacionalidade</th>
              <th>Data de cadastro</th>
              <th>Data da última atualização</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td>{author.name}</td>
                <td>{author.birth_date}</td>
                <td>{author.nationality}</td>
                <td>{author.created_at}</td>
                <td>{author.updated_at}</td>
                <td>
                  <Link to={"/authors/edit"} state={author}>
                    <Button
                      title="Editar"
                      aria-label="Editar"
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                    >
                      <span className="material-symbols-outlined d-flex justify-content-center align-center">
                        edit
                      </span>
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      new AuthorsFetch().deleteAuthor(author.id);
                      setShow(true);
                    }}
                    title="Excluir"
                    aria-label="Excluir"
                    variant="outline-danger"
                    size="sm"
                  >
                    <span className="material-symbols-outlined d-flex justify-content-center align-center">
                      delete
                    </span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-end mt-5">
          <Link to="/authors/new">
            <Button variant="success" className="d-flex align-items-center">
              <span className="material-symbols-outlined me-2">add</span>
              <span>Novo Autor</span>
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default AuthorsPage;
