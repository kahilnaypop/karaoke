import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import axios from 'axios';
import '../../App.css';
import Lyrics from '../tracks/Lyrics'



const musixApi = process.env.REACT_APP_MUSIX_API_KEY
// console.log(musixApi)


class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackTitle: '',
      searchedTrack: []
    };

    this.findTrack = this.findTrack.bind(this)
    this.trackChange = this.trackChange.bind(this)

  }



  findTrack(e) {
    e.preventDefault();
    console.log(e.target.value);


    console.log(`find track`, this.state.trackTitle);

    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
      this.state.trackTitle
      }&page_size=1&page=1&s_track_rating=desc&apikey=${musixApi}`
    )
      .then(data => data.json())
      .then(resp => {
        console.log(resp)
        this.setState({ searchedTrack: resp });
        console.log(`st is set searched Track`, this.state.searchedTrack)
      })
      .catch(err => console.log(err));
  };

  trackChange(e) {
    e.preventDefault()
    this.setState({
      trackTitle:
        e.target.value
    });
    console.log(`my input`, this.state.trackTitle);
  };

  // {track_id: 168109828, 
  // track_name: "Hello My Love", 
  // track_name_translation_list: Array(0), 
  // track_rating: 96, 
  // commontrack_id: 91266120, …}





  render() {
    console.log(this.state.searchedTrack)
    console.log(`my input`, this.state.trackTitle);

    const { searchedTrack } = this.state

    return (

      <div className="search-form">
        <form onSubmit={this.findTrack} >

          Name:
             <input
            type="text"
            name="name"
            placeholder="Song title..."
            value={this.state.trackTitle}
            onChange={this.trackChange}
          />

          <input
            type="submit"
            value="Submit" />
        </form>



        {/* <button
          className="btn btn-primary btn-lg btn-block mb-5"
          type="submit"
        >
          Get Track Lyrics
                </button> */}


        {/* <Lyrics
          searchedTrack={this.state.searchedTrack} />

        <h2>{this.state.searchedTrack}</h2> */}






      </div>
    );
  }
}



export default SearchForm;