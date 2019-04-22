import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import axios from 'axios';
import '../../App.css';
import App from '../../App'


// import '../SearchForm/SearchForm.css'


const musixApi = process.env.REACT_APP_MUSIX_API_KEY
// console.log(musixApi)

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackTitle: ''
    };
  }

  findTrack = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
        this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
        musixApi
        }`
      )
      
      .then(res => {
        dispatch({
          type: 'SEARCH_TRACKS',
          payload: res.data.message.body.track_list
        });

        this.setState({ trackTitle: '' });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (

      <div className="search-form">

    

        <form>
          <label>
            Name:
             <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>


        {value => {
          const { dispatch } = value;
          return (
            <div className="">
              <h1 className="">
                <i className="" /> Search For A Song
              </h1>
              <p className="">Get the lyrics for any song</p>

              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="">

                  <input
                    type="text"
                    className=""
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <Button className="button"

                  renderAs="a"
                  color="success"
                  size="large"
                  rounded
                  outlined
                >
                  Get Lyrics!
                </Button>
              </form>
            </div>
          );
        }}
      </div>
    );
  }
}



export default SearchForm;