import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../layout/Loading';

const musixApi = process.env.REACT_APP_MUSIX_API_KEY



class Lyrics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lyrics: []
        }
    }

      componentDidMount() {
          console.log('here')
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.searchedTrackId}&apikey=${musixApi}`)
          .then(res => {
            this.setState({ lyrics: res.data.message.body.lyrics });
            console.log('res data', res.data)


          })
          .then(res => {
            this.setState({ track: res.data.message.body.track });
          })
          .catch(err => console.log(err));
      }

    renderTrackSearch = () => {


    }


    render() {
        const { searchedTrack } = this.props
    


        return (
            <div>

                {this.renderTrackSearch()}


            </div>

        );
    }
}

export default Lyrics;