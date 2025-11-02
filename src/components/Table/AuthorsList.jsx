import {useState, useEffect} from "react";
import { AuthorsFetch } from "../../api/authors.js";

export function AuthrosList({authors_id_list}) {
    if(!authors_id_list) return ""

    const [authorNames, setAuthorsNames] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            const response = await Promise.all(authors_id_list.map(async (author_id) => {
                const author = await new AuthorsFetch().getAuthorID(author_id)
                return author.data
                })
            )
            setAuthorsNames([...response.map((author) => author.name)]);
        }
        
        fetchAuthors()
    }, [])

    return (
        <ul>
            {authorNames.map((authorName, index) => {
                return (<li key={index}>{authorName}</li>)
            })}
        </ul>
    )
}