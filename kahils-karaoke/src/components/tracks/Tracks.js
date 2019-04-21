import React, { Component } from 'react';
import axios from 'axios';


const musixApi = process.env.REACT_APP_MUSIX_API_KEY

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            track_list: []
        }
    }



    componentDidMount = async () => {
        const resp = await axios({
            method: 'GET',
            baseURL: `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart_name=top&page=1&page_size=7&country=us&f_has_lyrics=1&apikey=${musixApi}`
        })

        let trackData = resp.data
        this.setState({
            track_list: resp.data.message.body.track_list,
            
        })
            console.log('this should be track info', track_list)
        

    }


    render() {

        const { trackData } = this.state

        return (
            <div>
               
            </div >

        );
    }
}



export default Tracks;