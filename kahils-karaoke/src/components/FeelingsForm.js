import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import '../App.css';

// set up a handle form function 
// take that input and store it in props
// send that input to the lyric searching thing
// train form
// lexicanna 



// handleInput = () => {

// }



class FeelingsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feelingSubmit: null



        }

    }
    setFeelings = () => {
        console.log('set the feels')

    }



    // handleSubmitForm(event) {
    //     event.preventDefault()
    //     this.submitForm()
    // }



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
                    onClick={this.setFeelings()}
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