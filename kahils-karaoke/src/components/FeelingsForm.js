import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import '../App.css';

const musixApi = process.env.REACT_APP_MUSIX_API_KEY

class FeelingsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feelsSubmit: null

        }


        this.setFeelings = this.setFeelings.bind(this)
        this.feelsTrackChange = this.feelsTrackChange.bind(this)

    }


    setFeelings(evt) {
        evt.preventDefault();
       
        let trackId
        fetch(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=africa&page_size=4&page=1&s_track_rating=desc&apikey=${musixApi}`
        )
            .then(data => data.json())
            .then(resp => {
                this.setState({
                    feelsSubmit: resp.message.body,

                });
               
                trackId = resp.message.body.track_list[0].track.track_id
            })
            .catch(err => console.log(err));

    }


    lyricFeelFunc = (id, track, artist) => {


        fetch(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${musixApi}`)
            .then(data => data.json())
            .then(async resp => {
                await this.setState({
                    searchedLyrics: resp.message.body.lyrics.lyrics_body
                });
                this.searchYouTube(track, artist)

            })
            .catch(err => console.log(err));

    };




    feelsTrackChange(evt) {
        evt.preventDefault()
        this.setState({
            trackTitle:
                evt.target.value
        });
    };



    render() {
        return (
            <div className="checkbox">

                <h2>Search by feels</h2>


                <input type="checkbox" />


                <div className="grid-list">

                    <p className="grid-item"> Happy</p>

                    <input type="checkbox" />
                    <p className="grid-item"> Sad</p>

                    <input type="checkbox" />
                    <p className="grid-item"> Groovy</p>

                    <input type="checkbox" />
                    <p className="grid-item"> Sexy</p>

                    <input type="checkbox" />
                    <p className="grid-item"> Depressed</p>


                </div>

                <Button className="button"
                    onClick={this.setFeelings}
                    renderAs="a"
                    color="success"
                    size="large"
                    rounded
                    outlined
                >
                    Send!
                </Button>

            </div>
        );
    }
}


export default FeelingsForm;