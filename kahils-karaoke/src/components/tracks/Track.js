import React from 'react';
import { Link } from 'react-router-dom';

class Track extends Component {

    render() {
        console.log(this.props.track)

        let renderTrack = this.props.track && this.props.track.track_name.map((elem, index) => (

            <div>
                <p1 className="title" key={index}>Name: {elem.track_id} </p1>

            </div>
        ))

        return (
            <div>
                


                {/* <h5>{track.artist_name}</h5>
            <p><strong>
                <i /> Track
                     </strong>
                : {track.track_name}
                <br />
                <strong>
                    <i /> Album
                         </strong>
                : {track.album_name}
            </p>


            <Link
                to={`lyrics/track/${track.track_id}`}
                className="lyrics">
                <i /> View Lyrics
                    </Link> */}
            </div>


        );
    }
}


export default Track;