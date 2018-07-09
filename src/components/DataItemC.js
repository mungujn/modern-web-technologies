/**
 * Created by Mungujakisa on 9/25/2017.
 */
import React, {Component} from 'react';
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography} from "material-ui";
import {Link} from "react-router-dom";
const style = {
    style:{
        width: 200
    },
    avatar_style : {
        color: '#fff',
        backgroundColor: '#3f51b5',
    },
};

class DataItemC extends Component {
    render() {
        return (
            <Card style={style.style}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" style={style.avatar_style}>
                            {this.props.icon}
                        </Avatar>
                    }
                    title={this.props.title}
                    subheader={this.props.sub_title}
                />
                <CardContent>
                    <Typography component="p">
                        {this.props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button dense color="primary">
                        <Link to={this.props.button.link}>{this.props.button.text}</Link>
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default DataItemC;
