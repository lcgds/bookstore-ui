import { Button } from "react-bootstrap";

export function SubmitButton({classNameButton, variant, textButton}) {
    return (
        <Button
            className={classNameButton || ""}
            variant={variant}
            type="submit"
        >
            {textButton}
        </Button>
    )
}