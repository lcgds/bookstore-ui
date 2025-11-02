import { Button } from "react-bootstrap";

export function BackButton({classNameButton, variant, textButton}) {
    return (
        <Button
            className={classNameButton}
            variant={variant}
            onClick={() => window.history.back()}
        >
            {textButton}
        </Button>
    )
}