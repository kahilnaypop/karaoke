import React, { Component } from 'react';

class Help extends Component {
    render() {
        return (
            <div className="help-wrapper">
            <div className="help">
                Welcome to Karaoke song finder!! 
                If you want to search by track just type it into the search bar and click on the link to display the lyrics and video!
                If you're looking for inspiration try checking the top 10 tracks in the charts today! Otherwise you can search by feelings. Enjoy!!
                Also we can't display full lyrics at this time due to our rubbish API, try making up the lyric for the 2nd half ! 
                
            </div>
            </div>
        );
    }
}

export default Help;