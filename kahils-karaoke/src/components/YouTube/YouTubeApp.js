import React from 'react';
// import YTSearch from 'youtube-api-search';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectVid: null

    }

    handleSubmit = async (searchTerm) => {
      const resp = await youtube.get('/search', {
        param: {
          q: searchTerm
        }
      })
      this.setState({
        video: resp.data.items
      })
    }

    handleVideoSelect = (vid) => {
      this.setState({ selectedVide: video })
    }
  }




  // YTSearch({
  //     key: API_KEYAIzaSyCZSy6PkjOKnBsa5K8cdN4y4plA1vunmlE, term: computers}, (videos) => {
  //   this.setState({
  //     videos: videos,
  //     selectedVideo: videos[0]
  //    });
  // });


  render() {
    return (
      <div>
        <YouTubeSearch handleFormSubmit={this.handleSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList handleVideoSelect={this.handleVideoSelect} video={this.state.video} />
      </div>

    )
  }
}
export default YouTubeApp;