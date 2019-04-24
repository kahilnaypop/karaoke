import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import NavBar from './components/layout/NavBar';
import { Route, Link } from "react-router-dom";
import Home from './components/Home';
import FeelingsForm from './components/FeelingsForm';
// import ShowMeForm from './components/ShowMeForm';
import SearchForm from './components/SearchForm/SearchForm';
// import DetailedForm from './components/SearchForm';
import Tracks from './components/tracks/Tracks'
// import YouTubeApp from './components/YouTube/YouTubeApp'
// import SpotifySearch from './components/tracks/SpotifySearch'
import YTSearch from 'youtube-api-v3-search';




const musixApi = process.env.REACT_APP_MUSIX_API_KEY
let youTubeKey=process.env.REACT_APP_YOUTUBE_API_KEY

console.log(youTubeKey)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      track: null,
      videos: null,
      video: null
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          musixApi}`
      )
      .then(resp => {
        // console.log(resp.data);
        this.setState({ track: 
          resp.data.message.body.track_list});
// return resp.data
      })
      .catch(err => console.log('you did something wrong', err));

     
  }



  searchYouTube(term) {
    console.log(term)
    return YTSearch({key: youTubeKey, term: term }, (videos) =>
    {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }



  render() {
    // console.log(window.location.search);
    const { track } = this.state
    // console.log(this.state.track);
    return (
      <div className="App">
        <h2 className="header"> KKaraoke </h2>

       {/* <Tracks /> */}

        <div className="links">
          <h3><Link to="/">Home</Link></h3>
          <h3><Link to="/feeling">Search by feeling</Link></h3>
          <h3><Link to="/pickasong">Pick a Song</Link></h3>
          <h3><Link to="/toptensongs">Show tp Ten!</Link></h3>
          

          {/* <h3><Link to="/show me a picture">Show me a Picture</Link></h3> */}
        {/* <SpotifySearch /> */}
        {/* <YouTubeAxios /> */}

          <main>
            <Route path="/" exact component={Home} />
            {/* <Route path="/feeling" component={FeelingsForm} /> */}
            <Route path="/pickasong" 
            render={() => <SearchForm search={this.searchYouTube}/>}  />
            <Route path="/toptensongs" 
            render={() => <Tracks track={track}/>}/> 
            
        
            {/* <Route path="/show me a picture" co mponent={ShowMeForm} /> */}

          </main>

          {/* <YouTubeApp /> */}




          {/* <button onClick={async () => await this.getLyric()}>Get some lyrics </button> */}


        </div>
      </div>
    );
  }
}

export default App;
