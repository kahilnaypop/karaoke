import axios from 'axios';


youTubeKey=process.env.REACT_APP_YOUTUBE_API_KEY
console.log('this is you tube key', youTubeKey)

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: youTubeKey

    }
})

