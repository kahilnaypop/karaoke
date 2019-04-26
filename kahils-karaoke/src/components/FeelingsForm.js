import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import '../App.css';
import PrintLyrics from './../components/layout/PrintLyrics'
import { Route, Link } from "react-router-dom";

const musixApi = process.env.REACT_APP_MUSIX_API_KEY

class FeelingsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feelsSubmit: null,
            feelsLyrics: null

        }


        this.setFeelings = this.setFeelings.bind(this)
        this.feelsTrackChange = this.feelsTrackChange.bind(this)

    }



    setFeelings(evt) {
        evt.preventDefault();

        let trackId
        fetch(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
            evt.target.userInput.value}&page_size=4&page=1&s_track_rating=desc&apikey=${musixApi}`
        )
            .then(data => data.json())
            .then(resp => {
                this.setState({
                    feelsSubmit: resp.message.body,

                });

                trackId = resp.message.body.track_list[0].track.track_id
            })
            .catch(err => console.log(err));

        // this.lyricFeelFunc

    }


    lyricFeelFunc = (id, track, artist) => {

        console.log('hello')
        fetch(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${musixApi}`)
            .then(data => data.json())
            .then(async resp => {
                await this.setState({
                    feelsLyrics: resp.message.body.lyrics.lyrics_body
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


    // setFeel = () => {
    //     <h2>bloody hell</h2>
    // }



    render() {
        return (
            <div className="checkbox">

                <h2>Search by feels</h2>
                <form onSubmit={this.setFeelings} >
                    {/* <input
                    />
                    <input type="checkbox" 
                    /> */}


                    <div className="grid-list">



                        <input className="happy" type="checkbox" name="userinput" />
                        <p className="grid-item"> Happy</p>

                        <input className="sad" type="checkbox" name="userinput" />
                        <p className="grid-item"> Sad</p>

                        <input className="groovy" type="checkbox" name="userinput" />
                        <p className="grid-item"> Groovy</p>

                        <input className="sexy" type="checkbox" name="userinput" />
                        <p className="grid-item"> Sexy</p>

                        <input className="depressed" type="checkbox" name="userinput" />
                        <p className="grid-item"> Depressed</p>

                    </div>

                    <h3><Link to="/printLyrics">Get those feels!!!!</Link></h3>
                    <main>
                        <Route path="/printLyrics" component={PrintLyrics} />
                    </main>



                    <Button className="button"
                        onClick={this.handlePageChange}
                        type="submit"
                        renderAs="a"
                        color="success"
                        size="large"
                        rounded
                        outlined

                    >
                        Send!
                </Button>

                </form>

            </div>
        );
    }
}


export default FeelingsForm;