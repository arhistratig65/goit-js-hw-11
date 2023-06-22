import axios from 'axios';
export {findImages};

async function findImages (name, perPg, pag) {
  const bazUrl = 'https://pixabay.com/api/';
  const keyApi = '?key=37679975-c61ca7dd5cf5e93b8af868242';
  const auxiliaryUrl =
    '&image_type=photo&orientation=horizontal&safesearch=true';
  const respons = await axios.get (
    `${bazUrl}${keyApi}&q=${name}${auxiliaryUrl}&per_page=${perPg}&page=${pag}`
  );
  return respons;
}
