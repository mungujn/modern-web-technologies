/**
 * Created by Mungujakisa on 9/8/2017.
 */
import React, { Component } from 'react';
import { Button, Grid } from 'material-ui';
import { Link, Route, Switch } from 'react-router-dom';
import AddMotherC from './AddMotherC';
import DataItemsListC from './DataItemsListC';

class MothersHomeC extends Component {
    constructor() {
        super();
        this.state = {
            buttons: [{ text: 'Add Mother', link: '"/mothers/add"' }]
        };
    }

    setButtons(buttons) {
        this.setState({ buttons });
    }

    componentDidMount() {
        this.setButtons([{ text: 'Add Mother', link: '/mothers/add' }]);
        this.props.setToolbarTitle('Mothers');
        this.props.setDrawerItems(['Predictions', 'Health Centers']);
    }

    render() {
        const button_style = {
            marginLeft: 20
        };

        const section_style = {
            marginTop: 20
        };

        let buttons = this.state.buttons.map(function(button) {
            return (
                <Button
                    key={button.link}
                    raised
                    color="primary"
                    style={button_style}
                >
                    <Link to={button.link}>{button.text}</Link>
                </Button>
            );
        });

        return (
            <div>
                <Grid
                    container
                    align="flex-start"
                    direction="column"
                    justify="space-around"
                >
                    <Grid item>{buttons}</Grid>

                    <Grid item style={section_style}>
                        <Switch>
                            <Route
                                path="/mothers/add"
                                render={() => (
                                    <AddMotherC
                                        setButtons={this.setButtons.bind(this)}
                                    />
                                )}
                            />
                            <Route
                                path="/mothers"
                                render={() => (
                                    <DataItemsListC
                                        item_type="Mother"
                                        uuid="019eb86f-b5fb-4b91-beff-a30609115a4d"
                                    />
                                )}
                            />
                        </Switch>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default MothersHomeC;
