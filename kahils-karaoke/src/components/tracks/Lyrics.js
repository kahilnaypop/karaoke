import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';

const musixApi = process.env.REACT_APP_MUSIX_API_KEY



class Lyrics extends Component {
    state = {
        lyrics: {}
    };

    //   componentDidMount() {
    //     axios
    //       .get(
    //         `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${musixApi}`)
    //       .then(res => {
    //         this.setState({ lyrics: res.data.message.body.lyrics });

    //         return axios.get(
    //           `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${musixApi}`)

    //       })
    //       .then(res => {
    //         this.setState({ track: res.data.message.body.track });
    //       })
    //       .catch(err => console.log(err));
    //   }

    renderTrackSearch = () => {

        const { searchedTrack } = this.props

        return searchedTrack
            ? searchedTrack.map(searchedTrack => (
                <p key={searchedTrack.track.track_name}>
                    {searchedTrack.track.track_name}
                </p>))
            : <Loading />

    }

    render() {
        console.log(this.props.searchedTrack)


        return (
            <div>

                {this.renderTrackSearch()}


                {/* <h5>
              {trackTitle.track_name} 

              <span className="">{track.artist_name}</span>
            </h5>
           
              <p className="">{lyrics.lyrics_body}</p> */}

            </div>

        );
    }
}

export default Lyrics;