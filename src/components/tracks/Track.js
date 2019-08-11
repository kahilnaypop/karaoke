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
            </div>
        );
    }
}


export default Track;