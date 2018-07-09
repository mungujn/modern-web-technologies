/**
 * Created by Mungujakisa on 9/11/2017.
 */
import React, {Component} from 'react';
import {Button, Paper, Snackbar, TextField} from "material-ui";
import Slide from 'material-ui/transitions/Slide';
import * as firebase from '../utilities/fire';

class AddHealthC extends Component {

    constructor(){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            weeks_pregnant: "",
            phone_number: "",
            location: "",
            longitude: "",
            latitude: "",
            bar: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.alertUserOfResult = this.alertUserOfResult.bind(this);
    }

    componentDidMount(){
        this.props.setButtons([{text: "Cancel", link: "/healths"}]);
    }

    componentWillUnmount(){
        this.props.setButtons([{text: "Add Health Center", link: "/healths/add"}]);
    }

    handleSubmit(event){
        event.preventDefault();
        window.location =  "/health-centers";
        /*
        const health = this.state;
        let promise = firebase.writeUserData(health);
        promise.then((obj)=>{
            console.log(obj);
        });
        */
    }

    alertUserOfResult(){
        this.setState({
            bar: true
        });
    }

    handleInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const text_field_style = {

        };

        const button_style = {
            marginBottom: 20
        };

        const form_style = {
            paddingLeft: 20
        };

        return (
        <Paper style={{width: 500}}>
            <form style={form_style} onSubmit={this.handleSubmit}>
                <TextField
                    required
                    name="last_name"
                    label="Name"
                    defaultValue=""
                    style={text_field_style}
                    margin="normal"
                    onChange={this.handleInput}
                />

                <br/>

                <TextField
                    required
                    name="location"
                    label="Location"
                    defaultValue=""
                    style={text_field_style}
                    margin="normal"
                    onChange={this.handleInput}
                />

                <br/>

                <TextField
                    name="longitude"
                    label="Longitude"
                    defaultValue=""
                    style={text_field_style}
                    margin="normal"
                    onChange={this.handleInput}
                />

                <br/>

                <TextField
                    name="latitude"
                    label="Latitude"
                    defaultValue=""
                    style={text_field_style}
                    margin="normal"
                    onChange={this.handleInput}
                />

                <br/>

                <TextField
                    required
                    name="extra"
                    label="Health Center Type"
                    defaultValue=""
                    style={text_field_style}
                    margin="normal"
                    onChange={this.handleInput}
                />

                <br/>

                <Button type="submit" raised color="primary" style={button_style}>
                    Save
                </Button>
            </form>
            <Snackbar
                open={this.state.bar}
                onRequestClose={this.handleRequestClose}
                transition={<Slide direction="up" />}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Saved</span>}
            />
        </Paper>
        );
    }
}

export default AddHealthC;
