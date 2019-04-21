import React, { Component } from 'react';
import axios from 'axios'

const musixApi = process.env.REACT_APP_MUSIX_API_KEY

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            track: []
        }
    }



    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart_name=top&page=1&page_size=7&country=us&f_has_lyrics=1&apikey=${musixApi}`)
            .then(resp => resp.json())
            .then(data => {
                console.log('track data', data)

                this.setState({
                    track: data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.track}
            </div>

        );
    }
}



export default Tracks;