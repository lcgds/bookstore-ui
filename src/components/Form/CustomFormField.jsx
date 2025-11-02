import { Form } from "react-bootstrap";
import { Handler } from "../../utils/handlersReact.js";

export function CustomFormField({label_text, typeField, nameField, autoFocus, formValue, setFormData, step, min, placeholder}) {
    return (
        <Form.Group>
            <Form.Label>{label_text}</Form.Label>
            <Form.Control
                type={typeField}
                name={nameField}
                required
                autoFocus={autoFocus}
                value={formValue}
                step={step}
                min={min}
                placeholder={placeholder}
                onChange={(e) => {
                    new Handler().handleChange(e, setFormData)
                }
                }
            />
        </Form.Group>
    )
}