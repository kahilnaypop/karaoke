import React, { Component } from 'react';
import axios from 'axios';


class SpotifySearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Spotify: null
        }
    }

    spotTrack = () => { let test = axios({
        method: 'GET',
         baseURL: `https://api.spotify.com/v1/search?q=tania%20bowra&type=artist`,
          headers: {
          'Authorization': `Bearer ${BQBqZ4Xh440QVc3D8_sS9P3e9juEq5BdDgLsA2F5uTQt5txu6rHqkUF1A_qA6N-TS6f1L4gHRktaVz2vGEwjSXCUl5WCNw1I8l64gLBVq8J1QBjlwgtXzVStTHNf91Ex6rRGuQY81FEfJteCYopGhjdWZzZb-CC7hwjbZw}`
          }

    });
    console.log(test);
}



    //  spotSong = axios({
    //         method: 'get',
    //          url: `https://api.spotify.com/v1/search?q=tania%20bowra&type=artist`,
    //           headers: {
    //           'Authorization': `Bearer ${BQBqZ4Xh440QVc3D8_sS9P3e9juEq5BdDgLsA2F5uTQt5txu6rHqkUF1A_qA6N-TS6f1L4gHRktaVz2vGEwjSXCUl5WCNw1I8l64gLBVq8J1QBjlwgtXzVStTHNf91Ex6rRGuQY81FEfJteCYopGhjdWZzZb-CC7hwjbZw}`
    //           })
    //           .then(resp => {
    //             console.log(resp.data);

    //             this.setState({ track: 
    //                 Spotify });
    //             // return resp.data
    //         })
        
    //     .catch(err => console.log('you did something wrong', err))
    //     })
        

    render() {
        return (


            <div>
                <button onClick={this.spotTrack}> soooongggg </button>

                <h2>Spotify info</h2>

            </div>
        );
    }
}

export default SpotifySearch;

