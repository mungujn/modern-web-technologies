/**
 * Created by Mungujakisa on 9/8/2017.
 */
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';
import PregnantWoman from 'material-ui-icons/PregnantWoman';
import LocalHospital from 'material-ui-icons/LocalHospital';
import Assessment from 'material-ui-icons/Assessment';
import { NavLink, Route, Switch } from 'react-router-dom';
import MothersHomeC from './MothersHomeC';
import PredictionsC from './PredictionsC';
import RequestsC from './RequestsC';
import { Assignment, DirectionsBus, FolderOpen } from 'material-ui-icons';
import SuppliesC from './SuppliesC';
import HealthCentersHomeC from './HealthCentersHomeC';

class LayoutC extends Component {
    constructor() {
        super();
        this.state = {
            toolbar_title: 'Welcome',
            drawer_items: [
                'Predictions',
                'Mothers',
                'Supplies',
                'divider',
                'Requests',
                'Dispatches',
                'divider',
                'Health Centers'
            ]
        };
    }

    setToolbarTitle(toolbar_title) {
        this.setState({ toolbar_title });
    }

    setDrawerItems(drawer_items) {
        // this.setState({drawer_items}) kis
    }

    getDrawerItem(item) {
        switch (item) {
            case 'divider':
                return <Divider />;
            case 'Predictions':
                return (
                    <ListItem button key="predictions">
                        <ListItemIcon>
                            <Assessment />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <NavLink
                                    to="/predictions"
                                    className="clean_link"
                                >
                                    {item}
                                </NavLink>
                            }
                        />
                    </ListItem>
                );
            case 'Mothers':
                return (
                    <ListItem button key="mothers">
                        <ListItemIcon>
                            <PregnantWoman />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <NavLink to="/mothers" className="clean_link">
                                    {item}
                                </NavLink>
                            }
                        />
                    </ListItem>
                );
            case 'Supplies':
                return (
                    <ListItem button key="supplies">
                        <ListItemIcon>
                            <Assignment />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <NavLink to="/supplies" className="clean_link">
                                    {item}
                                </NavLink>
                            }
                        />
                    </ListItem>
                );
            case 'Requests':
                return (
                    <ListItem button key="requests">
                        <ListItemIcon>
                            <FolderOpen />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <NavLink to="/requests" className="clean_link">
                                    {item}
                                </NavLink>
                            }
                        />
                    </ListItem>
                );
            case 'Dispatches':
                return (
                    <ListItem button key="dispatches">
                        <ListItemIcon>
                            <DirectionsBus />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <NavLink
                                    to="/dispatches"
                                    className="clean_link"
                                >
                                    {item}
                                </NavLink>
                            }
                        />
                    </ListItem>
                );
            case 'Health Centers':
                return (
                    <ListItem button key="health-centers">
                        <ListItemIcon>
                            <LocalHospital />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <NavLink
                                    to="/health-centers"
                                    className="clean_link"
                                >
                                    {item}
                                </NavLink>
                            }
                        />
                    </ListItem>
                );
            default:
                return (
                    <ListItem button key="predictions">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <NavLink
                                    to="/predictions"
                                    className="clean_link"
                                >
                                    {item}
                                </NavLink>
                            }
                        />
                    </ListItem>
                );
        }
    }

    render() {
        const drawerWidth = 240;

        const styles = {
            appBar: {
                position: 'absolute',
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                order: 1,
                height: 56
            },
            drawerPaper: {
                position: 'relative',
                height: 'auto',
                width: drawerWidth
            },
            drawerHeader: {
                height: 56,
                width: drawerWidth
            },
            content: {
                width: '100%',
                padding: 30,
                height: '100%',
                marginTop: 56,
                marginLeft: drawerWidth
            },
            push: {
                marginBottom: '10px',
                marginLeft: '10px'
            }
        };

        let expanded_drawer_items = this.state.drawer_items.map(item => {
            return this.getDrawerItem(item);
        });

        return (
            <div>
                <AppBar style={styles.appBar}>
                    <Toolbar>
                        <Typography
                            style={styles.push}
                            type="title"
                            color="inherit"
                            noWrap
                        >
                            <span>{this.state.toolbar_title}</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    type="permanent"
                    classes={{
                        paper: styles.drawerPaper
                    }}
                >
                    <div style={styles.drawerHeader} />
                    <Divider />
                    <List>{expanded_drawer_items}</List>
                </Drawer>
                <main style={styles.content}>
                    <Switch>
                        <Route exact path="/" />
                        <Route
                            path="/predictions"
                            render={() => (
                                <PredictionsC
                                    setToolbarTitle={this.setToolbarTitle.bind(
                                        this
                                    )}
                                />
                            )}
                        />
                        <Route
                            path="/mothers"
                            render={() => (
                                <MothersHomeC
                                    setToolbarTitle={this.setToolbarTitle.bind(
                                        this
                                    )}
                                    setDrawerItems={this.setDrawerItems.bind(
                                        this
                                    )}
                                />
                            )}
                        />
                        <Route
                            path="/supplies"
                            render={() => (
                                <SuppliesC
                                    setToolbarTitle={this.setToolbarTitle.bind(
                                        this
                                    )}
                                />
                            )}
                        />
                        <Route
                            path="/requests"
                            render={() => (
                                <RequestsC
                                    setToolbarTitle={this.setToolbarTitle.bind(
                                        this
                                    )}
                                />
                            )}
                        />
                        <Route
                            path="/health-centers"
                            render={() => (
                                <HealthCentersHomeC
                                    setToolbarTitle={this.setToolbarTitle.bind(
                                        this
                                    )}
                                    setDrawerItems={this.setDrawerItems.bind(
                                        this
                                    )}
                                />
                            )}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default LayoutC;
