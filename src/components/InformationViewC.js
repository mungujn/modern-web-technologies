/**
 * Created by Mungujakisa on 9/24/2017.
 */
import React, { Component } from 'react';
import {
    Paper,
    Typography,
    Avatar,
    Grid,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Button
} from 'material-ui';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import * as firebase from '../utilities/fire';

const style = {
    paper: {
        padding: 20,
        maxWidth: 400
    },
    avatar_style: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#3f51b5'
    },
    list: {
        marginTop: 40
    },
    bad: {
        color: '#fff',
        backgroundColor: red[500]
    },
    good: {
        color: '#fff',
        backgroundColor: green[500]
    },
    normal: {
        color: '#fff',
        backgroundColor: '#3f51b5'
    },
    action_button: {
        margin: 'auto',
        color: '#fff',
        backgroundColor: '#3f51b5'
    }
};

class InformationViewC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_type: props.item_type,
            uuid: props.match.match.params.uuid,
            health_center_name: '',
            time_updated: '',
            items: {
                tape_measures: '0',
                fetoscopes: '0',
                blood_pressure_machines: '0',
                weighing_scales: '0',
                watches: '0',
                thermometers: '0',
                catheters: '0',
                surgical_gloves: '0',
                umbilical_cord_clamps: '0',
                resuscitation_units: '0',
                surgical_blades: '0',
                baby_weighing_scales: '0',
                suturing_kits: '0',
                cotton_wool: '0',
                cannulas: '0',
                oxytocin: '0',
                urine_testing_kits: '0',
                hiv_testing_kits: '0',
                blood_grouping_kits: '0',
                blood_for_transfusion: '0'
            },
            title: props.title,
            sub_title: props.sub_title
        };
    }

    componentDidMount() {
        this.update();
    }

    componentWillUnmount() {}

    update() {
        let node = '';
        switch (this.state.item_type) {
            case 'Supply':
                node = 'supplies/' + this.state.uuid;
                this.updateSupply(node);
                break;
            case 'Prediction':
                node = 'predictions/' + this.state.uuid + '4';
                this.updatePrediction(node);
                break;
            case 'Request':
                node = 'predictions/' + this.state.uuid + '4';
                this.updateRequest(node);
                break;
            default:
                node = 'supplies/' + this.state.uuid;
                this.updateSupply(node);
                break;
        }
    }

    updateSupply(node) {
        firebase.readData(node).then(snapshot => {
            let x = snapshot.val();
            if (x !== null) {
                this.props.setToolbarTitle(
                    x.health_center_name + ' Health Center'
                );
                this.setState({
                    health_center_name: x.health_center_name,
                    items: x.items,
                    sub_title: 'Supplies as at ' + x.time_updated.substr(0, 15)
                });
            }
        });
    }

    updatePrediction(node) {
        firebase.readData(node).then(snapshot => {
            let x = snapshot.val();
            if (x !== null) {
                this.props.setToolbarTitle(
                    x.health_center_name + ' Health Center'
                );

                this.setState({
                    health_center_name: x.health_center_name + ' Health Center',
                    items: x.items,
                    sub_title: 'Predicted requirements for this month'
                });
            }
        });
    }

    updateRequest(node) {
        firebase.readData(node).then(snapshot => {
            let x = snapshot.val();
            if (x !== null) {
                this.props.setToolbarTitle(
                    x.health_center_name + ' Health Center Supply Request'
                );
                this.setState({
                    health_center_name: x.health_center_name + ' Health Center',
                    items: x.items,
                    sub_title:
                        'Supplies needed for optimal operation this month'
                });
            }
        });
    }

    getStyle(name, value) {
        let v = parseInt(value, 10);

        if (this.state.item_type === 'Supply') {
            switch (name) {
                case 'Blood Grouping Kits ':
                    if (v < 10) {
                        return style.bad;
                    }
                    break;
                case 'Cannulas ':
                    if (v < 10) {
                        return style.bad;
                    }
                    break;
                case 'Cotton Wool ':
                    if (v < 70) {
                        return style.bad;
                    }
                    break;
                case 'Surgical Blades ':
                    if (v < 20) {
                        return style.bad;
                    }
                    break;
                case 'Surgical_gloves ':
                    if (v < 70) {
                        return style.bad;
                    }
                    break;
                case 'Tape Measures ':
                    if (v < 2) {
                        return style.bad;
                    }
                    break;
                default:
                    if (v < 3) {
                        return style.bad;
                    }
            }
            return style.good;
        } else return style.normal;
    }

    generateItem(name, value) {
        return (
            <ListItem button>
                <ListItemText primary={name} />
                <ListItemAvatar>
                    <Avatar style={this.getStyle(name, value)}>{value}</Avatar>
                </ListItemAvatar>
            </ListItem>
        );
    }

    getItems() {
        let items = [];
        for (let key in this.state.items) {
            let name = this.formatName(key);
            let value = this.state.items[key];
            items.push(this.generateItem(name, value));
        }
        return items;
    }

    formatName(name) {
        let s = '';
        let items = name.split('_');
        for (let index in items) {
            let string = items[index];
            if (string === 'hiv') {
                string = 'HIV';
            }
            let array = string.split('');
            let first = array[0].toUpperCase();
            s += first + string.substr(1) + ' ';
        }
        return s;
    }

    setButton() {
        if (this.props.item_type === 'Supply') {
            return <Button style={style.action_button}>Edit</Button>;
        } else if (this.props.item_type === 'Request') {
            return <Button style={style.action_button}>Send?</Button>;
        }
    }

    render() {
        return (
            <div>
                <Paper elevation={5} style={style.paper}>
                    <Grid container>
                        <Grid item>
                            <Avatar style={style.avatar_style}>
                                {this.props.title[0]}
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography type="headline" component="h3">
                                {this.state.title}
                            </Typography>
                            <Typography type="body1" component="p">
                                {this.state.sub_title}
                            </Typography>
                            <div style={style.list}>{this.getItems()}</div>
                        </Grid>
                        {this.setButton()}
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default InformationViewC;
