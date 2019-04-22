import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/layout/NavBar';
import { Route, Link } from "react-router-dom";
import Home from './components/Home';
import FeelingsForm from './components/FeelingsForm';
import ShowMeForm from './components/ShowMeForm';
import SearchForm from './components/SearchForm/SearchForm';
// import DetailedForm from './components/SearchForm';
import Tracks from './components/tracks/Tracks'




const musixApi = process.env.REACT_APP_MUSIX_API_KEY
// console.log(musixApi)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      track: null
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          musixApi
        }`
      )
      .then(resp => {
        console.log(resp.data);
        this.setState({ track: 
          resp.data.message.body.track_list });
      })

      .catch(err => console.log('you did something wrong', err));


  }



  render() {
    return (
      <div className="App">

      {/* <p>{this.state}</p> */}
      

        <h2 className="header"> KKaraoke </h2>

       <Tracks />




        <div className="links">
          <h3><Link to="/">Home</Link></h3>
          <h3><Link to="/pickasong">Search by feeling</Link></h3>
          <h3><Link to="/search by track">Search by Track</Link></h3>
          {/* <h3><Link to="/show me a picture">Show me a Picture</Link></h3> */}


          <main>
            <Route path="/" exact component={Home} />
            <Route path="/pickasong" component={FeelingsForm} />
            <Route path="/search by track" 
            render={() => <Tracks track={this.state.track} />} />
            
        
            {/* <Route path="/show me a picture" component={ShowMeForm} /> */}

          </main>




          {/* <button onClick={async () => await this.getLyric()}>Get some lyrics </button> */}


        </div>
      </div>
    );
  }
}

export default App;
