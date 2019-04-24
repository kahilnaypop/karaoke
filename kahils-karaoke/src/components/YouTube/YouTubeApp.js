import React from 'react';
import YouTubeSearch from '../../components/YouTube/YouTubeSearch';
import YTSearch from 'youtube-api-search';
import youTube from 'apis???'
import VideoList from '../../components/YouTube/VideoList'
import VideoDetails from '../../components/YouTube/VideoDetails'



let youTubeKey=process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectVid: null

    }
  }

  //   handleSubmit = async (searchTerm) => {
  //     const resp = await youtube.get('/search', {
  //       param: {
  //         q: searchTerm
  //       }
  //     })
  //     this.setState({
  //       video: resp.data.items
  //     })
  //   }

  //   handleVideoSelect = (vid) => {
  //     this.setState({ selectedVide: video })
  //   }
  // }

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
        {/* <YouTubeSearch handleFormSubmit={this.handleSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList handleVideoSelect={this.handleVideoSelect} video={this.state.video} /> */}
      </div>

    )
  }
  }

export default YouTubeApp;