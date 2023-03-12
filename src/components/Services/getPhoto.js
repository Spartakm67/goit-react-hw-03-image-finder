const KEY_API = '32702624-2e762d8c87a3cafce881a5f67';
const BASE_URL = 'https://pixabay.com/api/';

export function getPhoto(searchText, page) {
  return fetch(`${BASE_URL}?key=${KEY_API}&q=${searchText}&page=${page}&per_page=12
`);
}