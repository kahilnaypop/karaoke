import React, { Component } from 'react';
import axios from 'axios';
// import Loading from '../layout/Loading'
import Track from './Track'


const musixApi = process.env.REACT_APP_MUSIX_API_KEY

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            track_list: []
        }
    }



    componentDidMount() {

        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart_name=top&page=1&page_size=7&country=us&f_has_lyrics=1&apikey=${musixApi}`

            )
            .then(resp => {

                // console.log(resp.data)
                // if (resp.data === undefined || resp.data.length === 0) {
                //     return <Loading />;
                // } else {
                //     return <h1>loading </h1>;
                // }


                this.setState({
                    track_List: resp.data.message.body.track_list
                })
                console.log(track_list)
            })
            .catch(err => console.log(err))

    }



    render() {
        // const { track_List, heading } = value;

        return (
            <div>
                {/* <h1 classNanme="text-center"> {header}</h1> */}
                <div className="row">

                    {/* {track_list.map(item => ( */}
                        <Track 
                        key={item.track.track_id} 
                        track={item.track}/>
                    ))}

                </div>
            </div>

        );
    }
}



export default Tracks;