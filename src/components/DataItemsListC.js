/**
 * Created by Mungujakisa on 9/25/2017.
 */
import React, { Component } from 'react';
import { Grid } from 'material-ui';
import DataItemC from './DataItemC';
import * as firebase from '../utilities/fire';

class DataItemsListC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_type: props.item_type,
            items: []
        };
    }

    componentDidMount() {
        this.updateItems();
    }

    updateItems() {
        let node = '';
        switch (this.state.item_type) {
            case 'Supply':
                node = 'supplies';
                this.getSupply(node);
                break;
            case 'Request':
                node = 'predictions';
                this.setState(this.getRequests(node));
                break;
            case 'Mother':
                console.log('updating mothers list');
                node = 'mothers';
                this.getMothers(node, 100);
                break;
            case 'Health Center':
                console.log('updating health centers list');
                node = 'health-centers';
                this.getHealthCenters(node);
                break;
            default:
                console.log('updating predictions list');
                node = 'predictions';
                this.getPredictions(node);
                break;
        }
    }

    getSupply(node) {
        firebase.readData(node).then(snapshot => {
            let x = snapshot.val();
            if (x !== null) {
                console.log(x);
                let array = [];
                let object = {};
                let c = 0;
                for (let key in x) {
                    if (c === 7) {
                        break;
                    }
                    object = x[key];
                    if (c !== 0) {
                        array.push({
                            icon: 'S',
                            title: object.health_center_name,
                            sub_title: 'Supply',
                            text: '',
                            link: '/supplies/' + key
                        });
                    }
                    c = c + 1;
                }
                this.setState({
                    items: array
                });
            }
        });
    }

    getHealthCenters(node) {
        firebase.readData(node).then(snapshot => {
            let x = snapshot.val();
            if (x !== null) {
                console.log(x);
                let array = [];
                let object = {};
                for (let key in x) {
                    object = x[key];
                    array.push({
                        icon: icon(object.type),
                        title: object.name,
                        sub_title: 'Health Center',
                        text: object.type,
                        link: '/health-centers/' + key
                    });
                }
                this.setState({
                    items: array
                });
            }
        });

        function icon(type) {
            let x = type.length;
            let arr = type.split('');
            if (arr[0] === 'H') {
                return 'H';
            } else {
                return arr[x];
            }
        }
    }

    getMothers(node, limit) {
        firebase.readListData(node, limit).then(snapshot => {
            let x = snapshot.val();
            if (x !== null) {
                console.log(x);
                let array = [];
                let object = {};
                for (let key in x) {
                    object = x[key];
                    let t = {
                        icon: object.name.split('')[0],
                        title: object.name,
                        sub_title: 'Mother',
                        text: object.weeks_pregnant + ' weeks pregnant',
                        link: '/mothers/' + key
                    };
                    array.push(t);
                }
                this.setState({
                    items: array
                });
            }
        });
    }

    getPredictions(node) {
        firebase.readData(node).then(snapshot => {
            let x = snapshot.val();
            if (x !== null) {
                console.log(x);
                let array = [];
                let object = {};
                for (let key in x) {
                    object = x[key];
                    array.push({
                        icon: 'P',
                        title: object.health_center_name,
                        sub_title: 'Prediction',
                        text: '',
                        link: '/predictions/' + object.health_center_uuid
                    });
                }
                this.setState({
                    items: array
                });
            }
        });
    }

    getRequests(node) {
        firebase.readData(node).then(snapshot => {
            let x = snapshot.val();
            if (x !== null) {
                console.log(x);
                this.props.setToolbarTitle('Supply Requests and Predictions');
                let array = [];
                let object = {};
                for (let key in x) {
                    object = x[key];
                    array.push({
                        icon: 'R',
                        title: object.health_center_name,
                        sub_title: 'Supply Request',
                        text: '',
                        link: '/requests/' + object.health_center_uuid
                    });
                }
                this.setState({
                    items: array
                });
            }
        });
    }

    renderItems() {
        let items = [];
        this.state.items.map(value => {
            items.push(
                this.renderSingleItem(
                    value.icon,
                    value.title,
                    value.sub_title,
                    value.text,
                    value.link
                )
            );
            return 0;
        });
        return items;
    }

    renderSingleItem(icon, title, sub_title, text, link) {
        let button = {
            link: link,
            text: 'View'
        };
        return (
            <Grid item>
                <DataItemC
                    icon={icon}
                    title={title}
                    sub_title={sub_title}
                    text={text}
                    button={button}
                />
            </Grid>
        );
    }

    render() {
        return <Grid container>{this.renderItems()}</Grid>;
    }
}

export default DataItemsListC;
