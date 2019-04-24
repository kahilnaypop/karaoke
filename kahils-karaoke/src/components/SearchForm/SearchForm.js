import React, { Component } from 'react';
// import { Button } from "react-bulma-components/full";
import axios from 'axios';
// import '../../App.css';
import Lyrics from '../tracks/Lyrics'



const musixApi = process.env.REACT_APP_MUSIX_API_KEY
// console.log(musixApi)


class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackTitle: '',
      trackArtist: '',
      searchedTrack: [],
      searchedLyrics:'',
      trackId: null
    };

    this.findTrack = this.findTrack.bind(this)
    this.trackChange = this.trackChange.bind(this)

  }



  findTrack(evt) {
    evt.preventDefault();
    // console.log(evt.target.userInput.value);


    // console.log(`find track`, this.state.trackTitle);
    let trackId
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
      evt.target.userInput.value}&page_size=5&page=1&s_track_rating=desc&apikey=${musixApi}`
    )
      .then(data => data.json())
      .then(resp => {
        this.setState({ 
          searchedTrack: resp.message.body,
        });
        console.log(resp.message.body.track_list[0].track.track_id)
        trackId = resp.message.body.track_list[0].track.track_id
      })
      .catch(err => console.log(err));
      console.log(trackId)
    }

    
  lyricFunc = (id) => {
    console.log(id)
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${musixApi}`)
      .then(data => data.json())
      .then(resp => {
        this.setState({ 
          searchedLyrics: resp.message.body.lyrics.lyrics_body
        });
      console.log(resp)
      })
      .catch(err => console.log(err));
    
  };




//   getLyricsFunction() {
//     // console.log('here')
//   axios
//     .get(
//       `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.searchedTrackId}&apikey=${musixApi}`)
//     .then(res => {
//       this.setState({ lyrics: res.data.message.body.lyrics });
//       console.log('res data', res.data)

//       // return axios.get(
//       //   `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${musixApi}`)

//     })
//     .then(res => {
//       this.setState({ track: res.data.message.body.track });
//     })
//     .catch(err => console.log(err));
// }


  trackChange(evt) {
    evt.preventDefault()
    this.setState({
      trackTitle:
        evt.target.value
    });
    console.log(`my input`, this.state.trackTitle);
  };


  // {track_id: 168109828, 
  // track_name: "Hello My Love", 
  // track_name_translation_list: Array(0), 
  // track_rating: 96, 
  // commontrack_id: 91266120, …}


  render() {
    // console.log(this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_id)
    // console.log(this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_name)
    // console.log(this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.artist_name)
    console.log(this.state.searchedTrack && this.state.searchedTrack)
    // console.log(`my input`, this.state.trackTitle);

    // const { searchedTrack } = this.state
    // trackIdd = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_id
    let trackIdd = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_id
    let trackNamee = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_name

    let renderedLyrics = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list.map(trackdata =>(
      <h2 key={trackdata.track.track_id} onClick={()=>this.lyricFunc(trackdata.track.track_id)}>{trackdata.track.track_name} {trackdata.track.track_artist} </h2>

      
    ))

    return (
      

      <div className="search-form">

        <form onSubmit={this.findTrack} >
          
              Name:
              <input
                type="text"
                name="userInput"
                placeholder="Track title..."
                // value={this.state.trackTitle}
                // onChange='{this.trackChange}'
              />
        
            <button
              value="Submit" 
              >SUBMIT</button>
          </form>
       
            {renderedLyrics}   
         <h2 onClick={()=>this.lyricFunc(trackIdd)}>{trackNamee} </h2>
         <h4 className="lyrics">{this.state.searchedLyrics} </h4>
         

      






    </div>
    );
  }
}



export default SearchForm;