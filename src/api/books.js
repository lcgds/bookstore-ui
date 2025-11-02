import { apiFetch, apiFetchBlob } from "./api.js";

export class BooksFetch{

    async getAllBooks(activeBoolean = null){
        let filter;

        if (activeBoolean === null) {
            filter = null;
        } else {
            filter = {active: Boolean(activeBoolean)};
        } 

        return await apiFetch("/books", filter);
    }

    async getBookID(id){
        return await apiFetch(`/books/${id}`);
    }

    async getAuthorsByBookID(id){
        return await apiFetch(`/books/${id}/authors`);
    }

    async getBookCoverID(id){
        return await apiFetchBlob(`/books/${id}/cover`);
    }

    async registerBook(data){
        return await apiFetch("/books", null, "POST", data);
    }

    async updateBook(id, data){
        return await apiFetch(`/books/${id}`, null, "PATCH", data);
    }

    async updateBookCover(id, data){
        return await apiFetchBlob(`/books/${id}/cover`, "PATCH", data);
    }

    async deleteBook(id){
        return await apiFetch(`/books/${id}`, null, "DELETE");
    }

    async deleteBookCover(id){
        return await apiFetch(`/books/${id}/cover`, null, "DELETE");
    }

    async activateBook(id){
        return await apiFetch(`/books/${id}/activate`, null, "PATCH");
    }
}