/**
 * Created by Mungujakisa on 9/24/2017.
 */
import React, { Component } from 'react';
import InformationViewC from './InformationViewC';
import { Grid } from 'material-ui';
import { Route, Switch } from 'react-router-dom';
import DataItemsListC from './DataItemsListC';

class SuppliesC extends Component {
    componentDidMount() {
        this.setToolbarTitle('Supplies');
    }

    setToolbarTitle(title) {
        this.props.setToolbarTitle(title);
    }

    render() {
        return (
            <Switch>
                <Route
                    path="/supplies/:uuid"
                    render={match => (
                        <Grid container>
                            <Grid item>
                                <InformationViewC
                                    match={match}
                                    item_type="Supply"
                                    title="Supply"
                                    sub_title="Current supplies for this health center"
                                    setToolbarTitle={this.setToolbarTitle.bind(
                                        this
                                    )}
                                />
                            </Grid>
                            <Grid item>
                                <InformationViewC
                                    match={match}
                                    item_type="Prediction"
                                    title="Prediction"
                                    sub_title="Predictions for this health center"
                                    setToolbarTitle={this.setToolbarTitle.bind(
                                        this
                                    )}
                                />
                            </Grid>
                        </Grid>
                    )}
                />
                <Route
                    path="/supplies"
                    render={() => (
                        <Grid container>
                            <DataItemsListC item_type="Supply" />
                        </Grid>
                    )}
                />
            </Switch>
        );
    }
}

export default SuppliesC;
