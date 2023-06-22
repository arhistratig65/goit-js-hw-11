import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_Key = '37679975-c61ca7dd5cf5e93b8af868242';

export default class ImagesApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const url = `${BASE_URL}?key=${API_Key}&q=${this.searchQuery}&image_type=photo&per_page=40&page=${this.page}&orientation=horizontal&safesearch=true`;

    const response = await axios.get(url);
    this.incrementPage();
    return await response.data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
