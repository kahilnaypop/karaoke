
<p align="center">
<img width="600" position="center" alt="image" src="https://user-images.githubusercontent.com/29616227/62827748-91b2fa80-bba3-11e9-8357-02d513fab431.png">
</p>


# Karaoke 

Create an app that gives a user options of what kind of genre, artist, bpm or feeling they want to sing. Take that information and fetch the song through Spotify's API while also fetching information from API seed (a lyric fetching API) then render the lyrics and song on the page. 

## Objective

Getting lyrics to display on the screen while the music is playing.
Taking all the user input and searching through the data to find matching songs then being able to match that song with lyrics.
Map the tempo 
Learning how to use P5 for styling.
Use Oauth 2 for Spotify authentification.
Use reacte router to navigate between pages.
Would love to be able to implement this with slack so people can recommend songs from slack
Use provider to help manage state
Use cors anywhere to solve a network rejection issue

# Wireframes

<img width="600" position="center" alt="image" src="https://user-images.githubusercontent.com/29616227/59503764-8ee8a180-8ea1-11e9-88db-f0f030d53014.jpg">


<img align="middle" width="600"  alt="image" src="https://user-images.githubusercontent.com/29616227/59503795-9e67ea80-8ea1-11e9-8792-7c3b0f2d6749.jpg">


# Sneak Peak


<!-- <img width="1440" alt="image" src="https://user-images.githubusercontent.com/29616227/59494562-b2095600-8e8d-11e9-8068-402e3bf06fc0.jpg"> -->


<img width="1440" alt="image" src="https://user-images.githubusercontent.com/29616227/59494585-c5b4bc80-8e8d-11e9-9e4d-a831e7d9de1b.jpg">


<img width="1440" alt="image" src="https://user-images.githubusercontent.com/29616227/59494617-d5340580-8e8d-11e9-9084-33df06dbfd00.jpg">



## Sneak Peak II

```JSX
findTrack(evt) {
    evt.preventDefault();
    let trackId
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
      evt.target.userInput.value}&page_size=4&page=1&s_track_rating=desc&apikey=${musixApi}`
    )
      .then(data => data.json())
      .then(resp => {
        this.setState({
          searchedTrack: resp.message.body,
        });
        trackId = resp.message.body.track_list[0].track.track_id
      })
      .catch(err => console.log(err));
  }
  lyricFunc = (id, track, artist) => {
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
  searchYouTube = (term) => {
    YTSearch({ key: youTubeKey, term: term }, (data) => {
      try {
        console.log(data);
        this.setState({
          videos: data,
          video: data[0]
        });
        console.log(this.state.video);
      } catch (err) {
        alert(err.message)
      }
    });
  }
  trackChange(evt) {
    evt.preventDefault()
    this.setState({
      trackTitle:
        evt.target.value
    });
  };
```


### MVP

Settled on a minimalist look and focussed on functionallity. 
Ended up using YouTube API.




### MVP 2
Develop the search by feeling functionality further.




### Technology

Spotifys Docs
https://developer.spotify.com/documentation/

STYLE 
karaoke bar inspo
use P5 
install wrapper 
https://www.npmjs.com/package/react-p5-wrapper

Bulma 
https://alligator.io/react/intro-react-bulma-components/

GET LYRICS
https://orion.apiseeds.com/api/music/lyric/:artist/:track

& musixMatch


## Try it here
https://kahils-karaoke-app.herokuapp.com/



