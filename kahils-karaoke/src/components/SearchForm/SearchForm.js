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
        this.setState({ searchedTrack: resp.message.body.track_list[0] });
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
        {/* {this.findTrack} */}


        <form onSubmit={this.findTrack} >

          <label>
            Name:
             <input
              type="text"
              name="name"
              //  value={this.state.trackTitle}
              onChange={this.trackChange}
            />


          </label>
          <input
            type="submit"
            value="Submit" />
        </form>

        <Lyrics
          searchedTrack={this.state.searchedTrack} />

        <h2>{this.state.searchedTrack}</h2>

        {/* {value => {
          const { dispatch } = value;
          return (
            <div className="">

              <form onSubmit = {this.findTrack} >



                <input
                  type="text"
                  className=""
                  placeholder="Song title..."
                  name="trackTitle"
                  value={this.state.trackTitle}
                  onChange={this.onChange} */}
        {/* /> */}
        {/* <input type="submit"/> */}





        {/* </form>

              <Button className="button"

                renderAs="a"
                color="success"
                size="large"
                rounded
                outlined
              >
                Get Lyrics!
</Button> */}
        {/* </div>
          );
        }} */}
      </div>
    );
  }
}



export default SearchForm;