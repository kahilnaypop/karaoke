import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();
const musixApi = process.env.REACT_APP_MUSIX_API_KEY
console.log('muiix api', musixApi)

export class Provider extends Component {
    state = {
        track_list: [],
        heading: 'good tracks'
    }


    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart_name=top&page=1&page_size=7&country=us&f_has_lyrics=1&apikey=${musixApi}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))




    }
    render() {
        return (

            <Context.Provider value={this.state}>

                {this.props.children}

            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
