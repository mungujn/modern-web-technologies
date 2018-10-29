/**
 * Created by Mungujakisa on 9/25/2017.
 */
import React, { Component } from 'react';
import { Grid } from 'material-ui';
import { Route, Switch } from 'react-router-dom';
import InformationViewC from './InformationViewC';
import DataItemsListC from './DataItemsListC';

class RequestsC extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    icon: 'St.',
                    title: 'St. Annabel',
                    sub_title: 'Supply request',
                    text: 'Re-enforcment text'
                },
                {
                    icon: 'St.',
                    title: 'St. Annabel',
                    sub_title: 'Supply request',
                    text: 'Lorem arkfjnjfnfke akjnfea'
                },
                {
                    icon: 'St.',
                    title: 'St. Annabel',
                    sub_title: 'Supply request',
                    text: 'Lorem arkfjnjfnfke akjnfea'
                },
                {
                    icon: 'St.',
                    title: 'St. Annabel',
                    sub_title: 'Supply request',
                    text: 'Lorem arkfjnjfnfke akjnfea'
                }
            ]
        };
    }

    componentDidMount() {
        this.setToolbarTitle('Predictions');
    }

    setToolbarTitle(title) {
        this.props.setToolbarTitle(title);
    }

    updateItems() {
        this.state.items.pop();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path="/requests/:uuid"
                        render={match => (
                            <Grid item>
                                <InformationViewC
                                    match={match}
                                    item_type="Request"
                                    title="Request"
                                    sub_title="Supply Request "
                                    setToolbarTitle={this.setToolbarTitle.bind(
                                        this
                                    )}
                                />
                            </Grid>
                        )}
                    />
                    <Route
                        path="/requests"
                        render={() => (
                            <DataItemsListC
                                item_type="Request"
                                setToolbarTitle={this.setToolbarTitle.bind(
                                    this
                                )}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default RequestsC;
