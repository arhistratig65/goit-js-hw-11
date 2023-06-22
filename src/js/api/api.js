
import axios from "axios";


export async function getPhotos(inputValue, page) {
    try {
      return await axios.get('https://pixabay.com/api/', {
        params: {
            key: '37679975-c61ca7dd5cf5e93b8af868242',
            q: inputValue,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch : true,
            per_page: 40,
            page: page,
        }
      });
      
    } catch (error) {
      console.log(error);
    }
  }



