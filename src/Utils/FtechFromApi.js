// import axios from "axios";


// const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/';


// const options = {
//     url: BASE_URL,
//     params: {
//         part: 'snippet',
//         videoId: 'M7FIvfx5J10'
//         key: YOUTUBE_API_KEY,
//     },
//     headers: {
//         key: YOUTUBE_API_KEY,
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }

    
// };

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

// export const FetchFromApi = async (url) => { 
//     // const {data} = await axios.get(`${BASE_URL}/${url}`)
//     const response = await fetch(`${BASE_URL}/${url}`);

//     if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//     }

//     const data = await response.json();

//     return data;
// }



