import { useEffect, useState } from "react";
import { Alert, Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { BooksFetch } from "../../api/books.js";
import { CustomTable } from "../../components/Table/index.jsx";
import { ActionButton } from "../../components/Button/ActionButton.jsx";

export const BookRead = () => {
  
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await new BooksFetch().getAllBooks(true);
      setBooks(data.data);
    }
    fetchData();
    },[]);

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
        <h2 className="mb-4">Livros</h2>

        <CustomTable
          table_columns={["Título", "ISBN", "Ano de Publicação", "Preço", "Data de Cadastro", "Data da Última Atualização", "Ações"]}
        >
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.isbn}</td>
              <td>{book.published_year}</td>
              <td>R$ {book.price}</td>
              <td>{book.created_at}</td>
              <td>{book.updated_at}</td>
              <td>
                <ActionButton
                  page="/books/edit"
                  obj={book}
                  title="Editar"
                  variant="outline-primary"
                  classNameButton="me-2"
                  classNameSpan="material-symbols-outlined d-flex justify-content-center align-center"
                  symbol="edit"
                />
                
                <ActionButton
                  page="#"
                  title="Excluir"
                  variant="outline-danger"
                  classNameButton="me-2"
                  classNameSpan="material-symbols-outlined d-flex justify-content-center align-center"
                  symbol="delete"
                  onClick={() => {
                    new BooksFetch().deleteBook(book.id);
                    setShow(true);
                  }}
                />

              </td>
            </tr>
            ))}
          
        </CustomTable>

        <div className="d-flex justify-content-end mt-5">
          <ActionButton
            page="/books/new"
            title="Novo Livro"
            variant="success"
            classNameButton="d-flex align-items-center"
            classNameSpan="material-symbols-outlined me-2"
            symbol="Novo Livro"
          />
        </div>
      </Container>
    </>
  );
};
export default BookRead;
