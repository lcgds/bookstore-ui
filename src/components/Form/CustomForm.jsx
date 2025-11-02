import { Form } from "react-bootstrap";

export function CustomForm({className, onSubmit, children}) {
    return (
        <Form
            className={className}
            onSubmit={onSubmit}
        >
            {children}
        </Form>
    )
}