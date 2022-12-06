import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 1QRMlupTqqYplga9GV96xtKy_A75D5Nl8uleK6PiW6I',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
