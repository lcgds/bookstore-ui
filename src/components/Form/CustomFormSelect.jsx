import { Form } from "react-bootstrap";
import { Handler } from "../../utils/handlersReact";

export function CustomFormSelect({label_text, nameField, autoFocus, formValue, setFormData, children}) {
    return (
        <Form.Group>
            <Form.Label>{label_text}</Form.Label>
            <Form.Select
                name={nameField}
                required
                autoFocus={autoFocus}
                value={formValue}
                onChange={(e) => {
                    new Handler().handleChange(e, setFormData)
                }
                }
            >
                {children}
            </Form.Select>
        </Form.Group>
    )
}