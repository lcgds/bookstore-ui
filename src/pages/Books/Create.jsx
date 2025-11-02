import { useEffect, useState } from "react";
import { Alert, Form, Button, Card, Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import { BooksFetch } from "../../api/books.js";
import { Handler } from "../../utils/handlersReact.js";
import { AuthorsFetch } from "../../api/authors.js";
import { CustomForm } from "../../components/Form/CustomForm.jsx";
import { CustomFormField } from "../../components/Form/CustomFormField.jsx";
import { CustomFormAuthorsSelection } from "../../components/Form/CustomFormAuthorsSelection.jsx";
import { SubmitButton } from "../../components/Button/SubmitButton.jsx";
import { BackButton } from "../../components/Button/BackButton.jsx";

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

            <CustomForm
              className="d-grid gap-0 row-gap-3"
              onSubmit={() => {
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
            }}
            >
              
              <CustomFormField
                label_text="Título"
                typeField="text"
                nameField="title"
                autoFocus={true}
                formValue={formData.title}
                setFormData={setFormData}
              />

              <CustomFormField
                label_text="ISBN"
                typeField="text"
                nameField="isbn"
                formValue={formData.isbn}
                setFormData={setFormData}
              />

              <CustomFormField
                label_text="Ano de Publicação"
                typeField="number"
                nameField="publish_year"
                step="1"
                min="0"
                formValue={formData.publish_year}
                setFormData={setFormData}
              />

              <CustomFormField
                label_text="Preço"
                typeField="number"
                nameField="price"
                step="0.01"
                min="0"
                placeholder="R$"
                formValue={formData.price}
                setFormData={setFormData}
              />

              <CustomFormField
                label_text="Estoque"
                typeField="number"
                nameField="stock"
                step="1"
                min="0"
                formValue={formData.stock}
                setFormData={setFormData}
              />

              <CustomFormAuthorsSelection
                label_text="Autores"
                searchFormValue={searchAuthor}
                setSearchAuthorFunction={setSearchAuthor}
                allAuthors={allAuthors}
                formData={formData}
                setFormData={setFormData}
              />

              <div className="d-flex gap-2 mt-4 justify-content-end">
              
                <SubmitButton
                  variant="primary"
                  textButton="Salvar"
                />

                <BackButton
                  variant="secondary"
                  textButton="Cancelar"
                />
                
              </div>

            </CustomForm>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default BookCreate;
