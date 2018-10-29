/**
 * Created by Mungujakisa on 9/8/2017.
 */
import React, { Component } from 'react';
import { Button, Grid } from 'material-ui';
import { Link, Route, Switch } from 'react-router-dom';
import DataItemsListC from './DataItemsListC';
import AddHealthCenterC from './AddHealthCenterC';

class HealthCentersHomeC extends Component {
    constructor() {
        super();
        this.state = {
            buttons: [
                { text: 'Add Health Center', link: '"/health-centers/add"' }
            ]
        };
    }

    setButtons(buttons) {
        this.setState({ buttons });
    }

    componentDidMount() {
        this.setButtons([
            { text: 'Add Health Center', link: '/health-centers/add' }
        ]);
        this.props.setToolbarTitle('Health Centers');
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
                                path="/health-centers/add"
                                render={() => (
                                    <AddHealthCenterC
                                        setButtons={this.setButtons.bind(this)}
                                    />
                                )}
                            />
                            <Route
                                path="/health-centers"
                                render={() => (
                                    <DataItemsListC
                                        item_type="Health Center"
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

export default HealthCentersHomeC;
