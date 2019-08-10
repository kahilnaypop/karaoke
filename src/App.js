import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Home from './components/Home';
import FeelingsForm from './components/FeelingsForm';
import SearchForm from './components/SearchForm/SearchForm';
import Tracks from './components/tracks/Tracks'
import YTSearch from 'youtube-api-search';
import Help from './components/layout/Help'


const musixApi = process.env.REACT_APP_MUSIX_API_KEY
let youTubeKey=process.env.REACT_APP_YOUTUBE_API_KEY


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
        this.setState({ track: 
          resp.data.message.body.track_list});

      })
      .catch(err => console.log('you did something wrong', err)); 
  }



  searchYouTube = (term) => {
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
    const { track } = this.state
    return (
      <div className="App">
        <h2 className="header"> KKaraoke </h2>


        <div className="links">
          <h3><Link to="/">Home</Link></h3>
          <h3><Link to="/help">Help</Link></h3>
          <h3><Link to="/pickasong">Pick a Song</Link></h3>
          <h3><Link to="/toptensongs">Show top Ten!</Link></h3>
          <h3><Link to="/searchbyfeels">Search by feels!</Link></h3>
          

      
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/help" component={Help} />
            <Route path="/pickasong" 
            render={() => <SearchForm/>}  />
            <Route path="/toptensongs" 
            render={() => <Tracks track={track}/>}/> 
            <Route path="/searchbyfeels" 
            render={() => <FeelingsForm track={track}/>}/> 
            
      

          </main>


        </div>
      </div>
    );
  }
}

export default App;
