import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/layout/NavBar';
import { Switch, Route, Router, Link } from "react-router-dom";
// import { Button } from "react-bulma-components/full";import Home from './components/Home';
// import FeelingsForm from './components/FeelingsForm';
// import DetailedForm from './components/DetailedForm';

import { Provider } from './components/context'



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
      baseURL: `https://api.musixmatch.com/ws/1.1/${lyricKey}`
    })
    let lyric = resp.data
    this.setState({ lyric })
    console.log('here are some lyrics', lyric)

  }


  render() {
    return (

      <Provider>
        <Router>
          <React.Fragment>
            <NavBar>
              <div className="container">
                <Switch>
                  {/* <Route exact path="/" component={Index} /> */}
                </Switch>
              </div>
            </NavBar>
          </React.Fragment>
        </Router>

      </Provider>

      //   <div className="App">
      //     <h2 className="header"> Kahils Karaoke </h2>
      //     <nav>

      //       <div className="links">
      //         <h3><Link to="/">Home</Link></h3>
      //         <h3><Link to="/pickasong">What are you feeling?</Link></h3>
      //         <h3><Link to="/detailed form">differenbt form</Link></h3>

      //       </div>

      //       <main>
      //         <Route path="/" exact component={Home} />
      //         <Route path="/pickasong" component={FeelingsForm} />
      //         <Route path="/details" component={DetailedForm} />

      //       </main>

      //     </div>

      //     <Button claccName="button"
      //       renderAs="a"
      //       color="success"
      //       size="large"
      //       rounded
      //       outlined
      //     >
      //       Send!
      //           </Button>



      //     <button onClick={async () => await this.getLyric()}>Get some lyrics </button>


      // </div>
    );
  }
}

export default App;
