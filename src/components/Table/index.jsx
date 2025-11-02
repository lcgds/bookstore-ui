import { Table } from "react-bootstrap";

export function CustomTable({table_columns, children}){

    return (
    <Table striped bordered hover responsive>
        <thead>
            <tr>
                {table_columns.map((column, index) => 
                    (<th key={index}>{column}</th>)
                )}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </Table>
    )
}