import React from 'react';
import YTSearch from 'youtube-api-search';


class App extends Component {
    constructor(props) {
      super(props);
        this.state = {
          videos: [],
          search: true,
          selectedVideo: {},
        };
  }
  
  
  
  YTSearch({
      key: API_KEYAIzaSyCZSy6PkjOKnBsa5K8cdN4y4plA1vunmlE, term: computers}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
     });
  });

  
         render(){
             return(

             )
         }
  }