import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import axios from 'axios';
import '../../App.css';



const musixApi = process.env.REACT_APP_MUSIX_API_KEY
// console.log(musixApi)


class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackTitle: ''
    };

    this.findTrack = this.findTrack.bind(this)
    this.onChange = this.onChange.bind(this)

  }



  findTrack(e) {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
        this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${musixApi}`
      )

      .then(resp => {
        console.log(resp.data)
        this.setState({ lyrics: '' });
      })
      .catch(err => console.log(err));
  };

  onChange (e) {
    this.setState({ trackTitle: 
      e.target.value });
  };


  render() {
    return (

      <div className="search-form">
        {this.findTrack}


        <form onSubmit = {this.findTrack} >

          <label>
            Name:
             <input 
             type="text" 
             name="name"
            //  value={this.state.trackTitle}
            onChange={this.onChange} />


          </label>
          <input type="submit" value="Submit" />
        </form>


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