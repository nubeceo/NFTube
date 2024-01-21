import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

const options = {
    url: BASE_URL,
    params: {
        part: 'snippet',
        videoId: 'M7FIvfx5J10'
    },
    headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

export const FetchFromApi = async (url) => { 
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}



