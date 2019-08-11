import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Home from './components/Home';
import kk from './images/kk.png'
import SearchForm from './components/SearchForm/SearchForm';
import Tracks from './components/tracks/Tracks'
import YTSearch from 'youtube-api-search';
import { Nav, Button, FormControl, Navbar, Form } from 'react-bootstrap';
import Help from './components/layout/Help'



const musixApi = process.env.REACT_APP_MUSIX_API_KEY
let youTubeKey = process.env.REACT_APP_YOUTUBE_API_KEY


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      track: null,
      videos: null,
      video: null,
      isToggleOn: false
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
        musixApi}`
      )
      .then(resp => {
        this.setState({
          track:
            resp.data.message.body.track_list
        });
      })
      .catch(err => console.log('you did something wrong', err));
  }


  searchYouTube = (term) => {
    console.log(term)
    return YTSearch({ key: youTubeKey, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }


  render() {
    let menuActive = this.state.isToggleOn ? 'is-active' : '';
    const { track } = this.state
    return (
      <div className="App">
        <div className={'nav-right nav-menu' +menuActive}>
          <Navbar bg="dark" variant="dark" pointer="">
            <Navbar.Brand href="/">Karaoke
            <img
              src="/kk.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pickasong">Pick Song</Nav.Link>
              <Nav.Link href="/toptensongs">Show Top Ten</Nav.Link>
              <Nav.Link href="/help">Help</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        {/* ****** Hamburger ****** */}
        <span className="nav-toggle" onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        {/* ****** Send props down ****** */}
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/pickasong"
            render={() => <SearchForm />} />
          <Route path="/toptensongs"
            render={() => <Tracks track={track} />} />
        </main>

        {/* ***** Footer ******÷ */}
        {/* <Navbar className="Footer" sticky="bottom" bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="/kk.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar> */}
      </div>
    );
  }
}

export default App;
