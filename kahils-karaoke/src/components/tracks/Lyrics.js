import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';
import Moment from 'react-moment';

const musixApi = process.env.REACT_APP_MUSIX_API_KEY

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${musixApi}`)
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${musixApi}`)
          
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Loading />;
    } else {
      return (
        <div>
          <Link to="/" className="">
            Go Back
          </Link>
          <div>
            <h5>
              {track.track_name} by{' '}
              <span className="">{track.artist_name}</span>
            </h5>
            <div className="">
              <p className="">{lyrics.lyrics_body}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Lyrics;