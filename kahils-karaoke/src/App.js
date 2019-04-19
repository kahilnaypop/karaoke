import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


let lyricKey = process.env.REACT_APP_GETLYRIC_API_KEY
console.log(lyricKey)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lyrics: null
    }
  }

  // async axios
  getLyric = async () => {
    const resp = await axios({
      method: 'GET',
      baseURL: `https://orion.apiseeds.com/api/music/lyric/:beatles/:yesterday&apikey=${lyricKey}`
    })
    let lyric = resp.data
    this.setState({ lyric })
    console.log('here are some lyrics', lyric)

  }


  render() {
    return (
      <div className="App">
      Kahils Karaoke site

      <button onClick={async () => await this.getLyric()}>Get some lyrics </button>
       
      </div>
    );
  }
}

export default App;
