/**
 * Created by Mungujakisa on 9/8/2017.
 */
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import MothersListC from "./MothersHomeC";

class ContentC extends Component {

    getComponent(component){
        switch (component){
            case PatientsListC:
                this.props.setToolbarTitle("Mothers");
                return component;
            default:
                this.props.setToolbarTitle("Mothers");
                return component;
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path='/'/>
                <Route path="/mothers" render={() =>
                    <MothersHomeC
                        setToolbarTitle={this.setToolbarTitle.bind(this)}
                        setDrawerItems={this.setDrawerItems.bind(this)}
                    />}
                />
            </Switch>
        );
    }
}

export default ContentC;
