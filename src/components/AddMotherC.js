/**
 * Created by Mungujakisa on 9/11/2017.
 */
import React, { Component } from 'react';
import { Button, Paper, Snackbar, TextField } from 'material-ui';
import Slide from 'material-ui/transitions/Slide';
// import * as firebase from '../utilities/fire';

class AddMotherC extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            weeks_pregnant: '',
            phone_number: '',
            location: '',
            longitude: '',
            latitude: '',
            bar: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.alertUserOfResult = this.alertUserOfResult.bind(this);
    }

    componentDidMount() {
        this.props.setButtons([{ text: 'Cancel', link: '/mothers' }]);
    }

    componentWillUnmount() {
        this.props.setButtons([{ text: 'Add Mother', link: '/mothers/add' }]);
    }

    handleSubmit(event) {
        event.preventDefault();
        window.location = '/mothers';
        /*
        const mother = this.state;
        let promise = firebase.writeUserData(mother);
        promise.then((obj)=>{
            console.log(obj);
        });
        */
    }

    alertUserOfResult() {
        this.setState({
            bar: true
        });
    }

    handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const text_field_style = {};

        const button_style = {
            marginBottom: 20
        };

        const form_style = {
            paddingLeft: 20
        };

        return (
            <Paper style={{ width: 500 }}>
                <form style={form_style} onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        name="firt_name"
                        label="First Name"
                        defaultValue=""
                        style={text_field_style}
                        margin="normal"
                        onChange={this.handleInput}
                    />

                    <br />

                    <TextField
                        name="last_name"
                        label="Last Name"
                        defaultValue=""
                        style={text_field_style}
                        margin="normal"
                        onChange={this.handleInput}
                    />

                    <br />

                    <TextField
                        required
                        name="weeks_pregnant"
                        label="Weeks Pregnant"
                        defaultValue=""
                        style={text_field_style}
                        margin="normal"
                        onChange={this.handleInput}
                    />

                    <br />

                    <TextField
                        name="phone_number"
                        label="Phone Number"
                        defaultValue=""
                        style={text_field_style}
                        margin="normal"
                        onChange={this.handleInput}
                    />

                    <br />

                    <TextField
                        required
                        name="location"
                        label="Location"
                        defaultValue=""
                        style={text_field_style}
                        margin="normal"
                        onChange={this.handleInput}
                    />

                    <br />

                    <TextField
                        name="longitude"
                        label="Longitude"
                        defaultValue=""
                        style={text_field_style}
                        margin="normal"
                        onChange={this.handleInput}
                    />

                    <br />

                    <TextField
                        name="latitude"
                        label="Latitude"
                        defaultValue=""
                        style={text_field_style}
                        margin="normal"
                        onChange={this.handleInput}
                    />

                    <br />

                    <TextField
                        name="extra"
                        label="Extra"
                        defaultValue=""
                        style={text_field_style}
                        margin="normal"
                        onChange={this.handleInput}
                    />

                    <br />

                    <Button
                        type="submit"
                        raised
                        color="primary"
                        style={button_style}
                    >
                        Save
                    </Button>
                </form>
                <Snackbar
                    open={this.state.bar}
                    onRequestClose={this.handleRequestClose}
                    transition={<Slide direction="up" />}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    message={<span id="message-id">Saved</span>}
                />
            </Paper>
        );
    }
}

export default AddMotherC;
