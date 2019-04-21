import React, { Component } from 'react';


class FeelingsForm extends Component {
    render() {
        return (
            <div className="checkbox">
                <input type="checkbox" />
                <p> Happy</p>

                <input type="checkbox" />
                <p> Sad</p>

                <input type="checkbox" />
                <p> Groovy</p>

                <input type="checkbox" />
                <p> Sexy</p>

                <input type="checkbox" />
                <p> Depressed</p>
                
                
                
               
            </div>
        );
    }
}

export default FeelingsForm;