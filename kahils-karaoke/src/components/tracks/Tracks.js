import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../layout/Loading'
// import Track from './Track'
import { Link } from 'react-router-dom';


const musixApi = process.env.REACT_APP_MUSIX_API_KEY



class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            track: []
        }
    }



    // componentDidMount() {
    //     axios
    //         .get(
    //             `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=
    //             &apikey=${musixApi}`
    //         )
    //         .then(resp => {
    //             this.setState({
    //                 lyrics:
    //                     resp.data.message.body.lyrics
    //             });

    //             return axios.get(
    //                 `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=&apikey=${musixApi}`
    //             );
    //         })
    //         .then(resp => {
    //             this.setState({ track: resp.data.message.body.track });
    //         })
    //         .catch(err => console.log(err));


    // }
    renderTracks = () => {

        const { track } = this.props
        console.log(track)
        return track
            ? track.map(track => (
                <p key={track.track.track_name}>
                    {track.track.track_name}
                </p>))
            : <Loading />

    }


    render() {
        // console.log(this.state.track);

        console.log('this is the props from app', this.props.track)

        // const { track } = this.props;

        // if (
        //     track === undefined ||
        //     Object.keys(track).length === 0 ||
        //     Object.keys(lyrics).length === 0
        // ) {
        //     return <Loading />;
        // } else {

            return (

                <div>
                    {this.renderTracks()}


            </div>

            );
        }
    }


    export default Tracks;