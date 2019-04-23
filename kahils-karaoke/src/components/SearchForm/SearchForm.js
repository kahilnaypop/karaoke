import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import axios from 'axios';
import '../../App.css';
import Lyrics from '../tracks/Lyrics'
import Loading from '../layout/Loading'



const musixApi = process.env.REACT_APP_MUSIX_API_KEY
// console.log(musixApi)


class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackTitle: ''
    };

    this.findTrack = this.findTrack.bind(this)
    this.trackChange = this.trackChange.bind(this)

  }



  findTrack(e) {
    e.preventDefault();


    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
      this.state.trackTitle
      }&page_size=1&page=1&s_track_rating=desc&apikey=${musixApi}`
    )
      .then(data => data.json())
      .then(resp => {
        // console.log(resp.data)
        this.setState({ searchedTrack: resp });
        console.log(this.state.searchedTrack)
      })
      .catch(err => console.log(err));
  };

  trackChange(e) {
    this.setState({
      trackTitle:
        e.target.value
    });
  };


  renderTrackSearch = () => {

    const { searchedTrack } = this.state

    return searchedTrack
      ? searchedTrack.map(searchedTrack => (
        <p key={searchedTrack.track.track_name}>
          {searchedTrack.track.track_name}
        </p>))
      : <Loading />

  }



  render() {
    console.log(this.state.searchedTrack)
    // const { searchedTrack } = this.state

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
              onChange={this.trackChange} />


          </label>
          <input type="submit" value="Submit" />
        </form>



        {this.renderTrackSearch()}






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