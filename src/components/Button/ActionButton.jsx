import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export function ActionButton({page, obj, title, variant, symbol, onClick, classNameButton, classNameSpan}){
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
                <span className={classNameSpan || "material-symbols-outlined d-flex justify-content-center align-center"}>
                    {symbol}
                </span>
            </Button>
        </Link>
    )
}