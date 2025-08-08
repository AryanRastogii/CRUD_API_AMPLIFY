export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function callApi(method, path, body) {
  const url = `${API_BASE_URL}${path}`;
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body && method !== "GET") {
    options.body = JSON.stringify(body);
  }
  if (method === "GET" && body?.id) {
    return fetch(`${url}?id=${body.id}`).then((res) => res.json());
  }
  return fetch(url, options).then((res) => res.json());
}