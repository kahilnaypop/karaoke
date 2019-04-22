import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";



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


                <Button claccName="button"
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