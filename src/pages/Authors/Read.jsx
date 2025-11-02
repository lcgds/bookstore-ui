import { useEffect, useRef, useState } from "react";
import { Alert, Table, Button, Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import { AuthorsFetch } from "../../api/authors.js"; 
import { ActionButton } from "../../components/Button/ActionButton.jsx";
import { CustomTable } from "../../components/Table/index.jsx";
import { HandlerTimeStamp } from "../../utils/handlerTimestamp.js";

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

        <CustomTable
          table_columns={["Nome", "Data de Nascimento", "Nacionalidade", "Data/Hora de Cadastro", "Data/Hora da Última Atualização", "Ações"]}
        >
          {authors.sort((a, b) => a.name.localeCompare(b.name)).map((author) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.birth_date}</td>
              <td>{author.nationality}</td>
              <td>{new HandlerTimeStamp().formatTimestampToDateHour(author.created_at)}</td>
              <td>{new HandlerTimeStamp().formatTimestampToDateHour(author.update_at)}</td>
              <td>
                <ActionButton
                  page="/authors/edit"
                  obj={author}
                  title="Editar"
                  variant="outline-primary"
                  symbol="edit"
                  classNameButton="me-2"
                  classNameSpan="material-symbols-outlined d-flex justify-content-center align-center"
                />

                <ActionButton
                  page="#"
                  title="Excluir"
                  variant="outline-danger"
                  symbol="delete"
                  classNameButton="me-2"
                  classNameSpan="material-symbols-outlined d-flex justify-content-center align-center"
                  onClick={() => {
                    new AuthorsFetch().deleteAuthor(author.id);
                    setShow(true);
                  }}
                />
              </td>
            </tr>
          ))}

        </CustomTable>

        <div className="d-flex justify-content-end mt-5">
            <ActionButton
              page="/authors/new"
              title="Novo Autor"
              variant="success"
              symbol="Novo Autor"
              classNameButton="d-flex align-items-center btn btn-success"
              classNameSpan="material-symbols-outlined me-2"
            />
        </div>
      </Container>
    </>
  );
};

export default AuthorsPage;
