import React, { Component } from 'react';

import {
    Field,
    Control,
    Label,
    Input,
    Textarea,
    Help,
    Button,
    Icon,
} from "react-bulma-components/full";



class DetailedForm extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
        }
    }


    onChange = evt => {
        this.setState({
            value: evt.target.value,
        });
    };


    render() {
        return (
            <div>

                <h1>This is the picture form</h1>
                <Control>
                    <Button onChange={this.onChange} checked={this.state.selected === 'Yes'} value="Yes" name="question">
                        Yes
        </Button>
                    <Button onChange={this.onChange} checked={this.state.selected === 'No'} value="No" name="question">
                        No
        </Button>
                </Control>


                <Field>
                    <Label>Name</Label>
                    <Control>
                        <Input placeholder="Text input" />
                    </Control>
                </Field>

                <Field>
                    <Label>Username</Label>
                    <Control>
                        <Input color="success" type="text" placeholder="Text input" value="bulma" />
                    </Control>
                    <Help color="success">This username is available</Help>
                </Field>

                <Field>
                    <Label>Email</Label>
                    <Control>
                        <Input color="danger" type="email" placeholder="Email input" value="hello@" />
                    </Control>
                    <Help color="danger">This email is invalid</Help>
                </Field>
                <Field>
                    <Label>With Icons</Label>
                    <Control iconLeft iconRight>
                        <Input color="success" type="email" placeholder="I have icons" />
                        <Icon align="left" icon="bars" />
                        <Icon align="right" icon="bars" />
                    </Control>
                    <Help color="danger">This email is invalid</Help>
                </Field>
                <Field>
                    <Label>Subject</Label>
                    
                </Field>

                <Field>
                    <Label>Message</Label>
                    <Control>
                        <Textarea placeholder="Textarea" />
                    </Control>
                </Field>



                <Field kind="group">
                    <Control>
                        <Button type="primary">Submit</Button>
                    </Control>
                    <Control>
                        <Button color="link">Cancel</Button>
                    </Control>
                </Field>
            </div>
        )
    }
}



export default DetailedForm;