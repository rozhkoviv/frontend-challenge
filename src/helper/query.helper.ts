const API_KEY = '454622f2-2998-44c8-ac86-4995c08a9dc9';
const BASE_URL = 'https://api.thecatapi.com/v1/';

export default async function query(path: string, params: URLSearchParams = new URLSearchParams()) {

  const headersInit: HeadersInit = new Headers();
  headersInit.set('x-api-key', API_KEY);

  const url = new URL( BASE_URL.concat(path) );
  url.search = params.toString();

  return fetch(url.toString(), {
    headers: headersInit,
  });
}