import { apiFetch } from "./api.js";

export class AuthorsFetch{
    async getAllAuthors(activeBoolean = null){
        let filter;

        if (activeBoolean === null) {
            filter = null;
        } else {
            filter = {active: Boolean(activeBoolean)};
        } 

        return await apiFetch("/authors", filter);
    }

    async getAuthorID(id){
            return await apiFetch(`/authors/${id}`);
        }
    
    async getBooksByAuthorID(id){
        return await apiFetch(`/authors/${id}/books`);
    }

    async registerAuthor(data){
        return await apiFetch("/authors", null, "POST", data);
    }

    async updateAuthor(id, data){
        return await apiFetch(`/authors/${id}`, null, "PATCH", data);
    }

    async deleteAuthor(id, forceBoolean=null){
        let params = null;

        if (forceBoolean === null) {
            params = null;
        } else {
            params = {force: Boolean(forceBoolean)};
        } 

        return await apiFetch(`/authors/${id}`, params, "DELETE");
    }

    async activateAuthor(id){
        return await apiFetch(`/authors/${id}/activate`, null, "PATCH");
    }
}