import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import YTSearch from 'youtube-api-search';
import Loading from '../layout/Loading';
import { Nav, Button, FormControl, Navbar, Form } from 'react-bootstrap';
import YouTubeSearch from '../YouTube/YouTubeSearch'
import { Container } from 'semantic-ui-react';

const musixApi = process.env.REACT_APP_MUSIX_API_KEY
let youTubeKey = process.env.REACT_APP_YOUTUBE_API_KEY
console.log(musixApi)

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackTitle: '',
      trackArtist: '',
      searchedTrack: [],
      searchedLyrics: '',
      trackId: null,
      video: null
    };

    this.findTrack = this.findTrack.bind(this)
    this.trackChange = this.trackChange.bind(this)

  }


  findTrack(evt) {
    console.log(evt, 'hey', evt.target.userInput.value)
    evt.preventDefault();
    let trackId
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
      evt.target.userInput.value}&page_size=4&page=1&s_track_rating=desc&apikey=${musixApi}`
    )
      .then(data => data.json())
      .then(resp => {
        this.setState({
          searchedTrack: resp.message.body,
        });
        trackId = resp.message.body.track_list[0].track.track_id
      })
      .catch(err => console.log(err));
  }


  lyricFunc = (id, track, artist) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${musixApi}`)
      .then(data => data.json())
      .then(async resp => {
        await this.setState({
          searchedLyrics: resp.message.body.lyrics.lyrics_body
        });
        this.searchYouTube(track, artist)
      })
      .catch(err => console.log(err));
  };


  searchYouTube = (term) => {
    YTSearch({ key: youTubeKey, term: term }, (data) => {
      try {
        console.log(data);
        this.setState({
          videos: data,
          video: data[0]
        });
        console.log(this.state.video);
      } catch (err) {
        alert(err.message)
      }
    });
  }


  trackChange(evt) {
    evt.preventDefault()
    this.setState({
      trackTitle:
        evt.target.value
    });
  };


  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }


  render() {
    const { video } = this.state
    let trackIdd = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_id
      ? this.state.searchedTrack.track_list[0].track.track_id
      : <loading />;
    let trackNamee = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_name
      ? null
      : <loading />;
    let renderedLyrics = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list.map(trackdata => {
      let { track_id, track_name, artist_name } = trackdata.track;
      return (
        <h2 className="clickasong"
          key={track_id}
          onClick={() => this.lyricFunc(track_id, track_name)}> {track_name} ~ <span className="artist-style"> {artist_name} </span>
        </h2>
      )
    })

{/* ****** Sends search result to musix api **** */}    
    return (
      <div className="search-form-container">
        <div className="search-form">
          <Form onSubmit={this.findTrack} inline>
            <FormControl type="text" name="userInput" pointer="" placeholder="Search track" className="mr-sm-2" />
            <Button type="submit" variant="outline-info">Search</Button>
          </Form>
{/* ****** this renders 5 different songs and artists to choose from **** */}
          {renderedLyrics}
{/* ******* this renders video, title and lyrics ****** */}
          <div className="rendered-track">
          {trackNamee}
          </div>
          <YouTubeSearch
            video={video}
          />
          <div className="lyric-wrapper">
            <div className="lyrics">
              <h4 >{this.state.searchedLyrics} </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;