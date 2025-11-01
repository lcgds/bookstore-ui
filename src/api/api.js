const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiFetch(endpoint, params=null, method = "GET", body = null) {
    const paramsEndPoint = new URLSearchParams(params);

    const fetchOptions = {method, headers: {"Content-Type": "application/json"}};
    if (body) fetchOptions.body = JSON.stringify(body);

    const response = await fetch(`${API_BASE_URL}${endpoint}?${paramsEndPoint}`, fetchOptions);
    
    let dataResponse = null;
    try {
        dataResponse = await response.json();
    } catch (e) {
        dataResponse = null;
    }

    return {statusCode: response.status, data: dataResponse};
}

export async function apiFetchBlob(endpoint,method = "GET", data = null) {

    const fetchOptions = {method, headers: {"Content-Type": "application/octet-stream"}};
    if (data) fetchOptions.body = data;

    const response = await fetch(`${API_BASE_URL}${endpoint}`, fetchOptions);
    
    let dataResponse = null;
    try {
        dataResponse = await response.blob();
    } catch (e) {
        dataResponse = null;
    }

    return {statusCode: response.status, contentType: response.headers.get("Content-Type"), data: dataResponse};
}