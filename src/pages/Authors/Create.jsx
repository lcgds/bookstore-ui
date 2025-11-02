import { useState } from "react";
import { Alert, Form, Button, Card, Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Handler } from "../../utils/handlersReact.js";
import { AuthorsFetch } from "../../api/authors.js";
import { CustomForm } from "../../components/Form/CustomForm.jsx";
import { CustomFormField } from "../../components/Form/CustomFormField.jsx";
import { CustomFormSelect } from "../../components/Form/CustomFormSelect.jsx";
import { NationalityFormOption } from "../../components/Form/NationalityFormOption.jsx";
import { SubmitButton } from "../../components/Button/SubmitButton.jsx";
import { BackButton } from "../../components/Button/BackButton.jsx";

export const AuthorCreate = () => {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    nationality: "brasileiro(a)",
    birth_date: ""
  })

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
            <h2 className="mb-4">Cadastrar Autor</h2>

            <CustomForm
              className="d-grid gap-0 row-gap-3"
              onSubmit={() => {
                event.preventDefault();

                const payload = {
                  name: formData.name,
                  birth_date: formData.birth_date,
                  nationality: formData.nationality
                };

                new AuthorsFetch().registerAuthor(payload);
                setShow(true);
                event.target.reset();
              }}
            >

              <CustomFormField
                label_text="Nome"
                typeField="text"
                nameField="name"
                autoFocus={true}
                formValue={formData.name}
                setFormData={setFormData}
              />

              <CustomFormField
                label_text="Data de Nascimento"
                typeField="date"
                nameField="birth_date"
                formValue={formData.birth_date}
                setFormData={setFormData}
              />

              <CustomFormSelect
                label_text="Nacionalidade"
                nameField="nationality"
                formValue={formData.nationality}
                setFormData={setFormData}
              >

                <NationalityFormOption/>

              </CustomFormSelect>

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

export default AuthorCreate;
