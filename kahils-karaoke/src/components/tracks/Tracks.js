import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../layout/Loading'
import Track from './Track'
import { Link } from 'react-router-dom';


const musixApi = process.env.REACT_APP_MUSIX_API_KEY

// console.log(this.props.track)

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            track_list: []
        }
    }

   

    // componentDidMount() {
    //     axios
    //         .get(
    //             `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=
    //             &apikey=${musixApi}`
    //         )
    //         .then(resp => {
    //             this.setState({ lyrics: 
    //                 resp.data.message.body.lyrics });

    //             return axios.get(
    //                 `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=&apikey=${musixApi}`
    //             );
    //         })
    //         .then(resp => {
    //             this.setState({ track: resp.data.message.body.track });
    //         })
    //         .catch(err => console.log(err));

    //         console.log('this is the tracks', resp.data.message.body.track)
    // }


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
                    {/* <Link to="/">
                        Go Back
                  </Link>
                    <div >
                        <h5 >
                            {track.track_name} by{' '}
                            <span>{track.artist_name}</span>
                        </h5>
                        <div>
                            <p>{lyrics.lyrics_body}</p>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <strong>Album ID</strong>: {track.album_id}
                        </li>
                        <li>
                            <strong>Song Genre</strong>:{' '}
                            {track.primary_genres.music_genre_list.length === 0 ? 'NO GENRE AVAILABLE' : track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                        </li>
                        <li className="list-group-item">
                            <strong>Explicit Words</strong>:{' '}
                            {track.explicit === 0 ? 'No' : 'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date</strong>:{' '}
                        </li>
                    </ul> */}
                </div>
            );
        }
    }
}

export default Tracks;