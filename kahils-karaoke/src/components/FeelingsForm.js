import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";



class FeelingsForm extends Component {
    render() {
        return (
            <div className="checkbox">


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

            </div>
        );
    }
}

export default FeelingsForm;