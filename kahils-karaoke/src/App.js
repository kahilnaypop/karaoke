import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/layout/NavBar';
import { Route, Link } from "react-router-dom";
import Home from './components/Home';
import FeelingsForm from './components/FeelingsForm';
import ShowMeForm from './components/ShowMeForm';
import SearchForm from './components/SearchForm';
import DetailedForm from './components/SearchForm';
import Tracks from './components/tracks/Tracks'




let lyricKey = process.env.REACT_APP_GETLYRIC_API_KEY
console.log(lyricKey)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lyrics: null
    }
  }

  // async axios
  getLyric = async () => {
    const resp = await axios({
      method: 'GET',
      baseURL: `https://api.musixmatch.com/ws/1.1/${lyricKey}`
    })
    let lyric = resp.data
    this.setState({ lyric })
    console.log('here are some lyrics', lyric)

  }


  render() {
    return (
      <div className="App">

        <h2 className="header"> KKaraoke </h2>

        <Tracks />


        <div className="links">
          <h3><Link to="/">Home</Link></h3>
          <h3><Link to="/pickasong">Search by feeling</Link></h3>
          <h3><Link to="/search by artist">Search by Artist</Link></h3>
          <h3><Link to="/show me a picture">Show me a Picture</Link></h3>


          <main>
            <Route path="/" exact component={Home} />
            <Route path="/pickasong" component={FeelingsForm} />
            <Route path="/details" component={SearchForm} />
            <Route path="/details" component={ShowMeForm} />

          </main>




          {/* <button onClick={async () => await this.getLyric()}>Get some lyrics </button> */}


        </div>
      </div>
    );
  }
}

export default App;
