/**
 * Created by Mungujakisa on 9/8/2017.
 */
import React, { Component } from 'react';
import { Divider, Drawer, List } from 'material-ui';
import DRAWER_WIDTH from '../utilities/constants';

class DrawerC extends Component {
    render() {
        const drawer_width = DRAWER_WIDTH;

        const paper = {
            position: 'relative',
            height: 'auto',
            width: drawer_width
        };

        const drawerHeader = {
            height: 56
        };

        return (
            <Drawer
                type="permanent"
                classes={{
                    paper: paper
                }}
            >
                <div className={drawerHeader} />
                <Divider />
                <List>{this.props.drawer_items}</List>
            </Drawer>
        );
    }
}

export default DrawerC;
