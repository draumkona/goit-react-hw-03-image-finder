import axios from 'axios';

const KEY = '34852127-c965fcd32e5f56da9013a5883';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  return { images: response.data.hits, total: response.data.totalHits };
};

const api = { fetchImages };

export default api;
