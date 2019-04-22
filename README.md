# karaoke

I want to create an app that gives a user options of what kind of genre, artist, bpm or feeling they want to sing. Take that information and fetch the song through Spotify's API while also fetching information from API seed (a lyric fetching API) then render the lyrics and song on the page. 

Spotifys Docs
https://developer.spotify.com/documentation/

STYLE 
Try make it look like a karaoke bar using P5 
install wrapper 
https://www.npmjs.com/package/react-p5-wrapper
also use Bulma if needed 
https://alligator.io/react/intro-react-bulma-components/


GET LYRICS
https://orion.apiseeds.com/api/music/lyric/:artist/:track

key is in env file 

Difficulties...
Getting the lyrics to display on the screen while the music is playing? 
might not be possible 

Taking all the user input and searching through the data to find matching songs then being able to match that song with lyrics.

Will it be possible to send in the BPM as a searchable paramater?

Learning how to use P5 for styling.

Use Oauth 2 for Spotify authentification.

Use reacte router to navigate between pages.

- would love to be able to implement this with slack so people can recommend songs from slack

- Use provider to help manage state


- used cors anywhere to solve a network rejection issue








![capture logic](./kahils-karaoke/src/images/kara-wire2.jpg)
![capture logic](./kahils-karaoke/src/images/kara-wire3.jpg)
![capture logic](./kahils-karaoke/src/images/kara-wire1.jpg)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
