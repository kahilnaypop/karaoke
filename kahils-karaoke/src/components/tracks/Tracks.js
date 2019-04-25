import React, { Component } from 'react';
import Loading from '../layout/Loading'


class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            track: []
        }
    }

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
       
            return (

                <div>
                    {this.renderTracks()}

                 </div>

            );
        }
    }


    export default Tracks;