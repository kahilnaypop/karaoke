import React from 'react';
import YTSearch from 'youtube-api-search';

let youTubeKey=process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectVid: null

    }
  }

  search() {
    return YTSearch({key: youTubeKey, term: term }, (videos) =>
    {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }
  


  render() {
    return (
      <div>
   
      </div>

    )
  }
  }

export default YouTubeApp;