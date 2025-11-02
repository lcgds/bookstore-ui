import { Form } from "react-bootstrap";

export function CustomFormAuthorsSelection({label_text, searchFormValue, setSearchAuthorFunction, allAuthors, formData, setFormData}) {
    return (
        <Form.Group>
            <Form.Label>{label_text}</Form.Label>
            <Form.Control
                type="text"
                value={searchFormValue}
                onChange={(e) => setSearchAuthorFunction(e.target.value)}
            />

            <div
                  className="border rounded p-2 mt-2"
                  style={{ maxHeight: "150px", overflowY: "auto" }}
                >
                  {allAuthors
                    .filter((a) => a.name?.toLowerCase().includes(searchFormValue.toLowerCase()))
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
                                )
                            }));
                          }}
                        />
                      ))}
                </div>
        </Form.Group>
    )
}