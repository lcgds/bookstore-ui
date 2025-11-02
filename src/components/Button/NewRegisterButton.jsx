import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export function NewRegisterButton({page, obj, title, variant, onClick, classNameButton}){
    return (
        <Link to={page} state={obj || null}>
            <Button
                title={title}
                aria-label={title}
                variant={variant}
                size="sm"
                className={classNameButton ||"me-2"}
                onClick={onClick}
            >
                {title}
            </Button>
        </Link>
    )
}