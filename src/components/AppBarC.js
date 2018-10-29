/**
 * Created by Mungujakisa on 9/8/2017.
 */
import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

class AppBarC extends Component {
    render() {
        const style = {
            color: 'white'
        };

        return (
            <div style={style}>
                <AppBar position="static">
                    <Toolbar disableGutters>
                        <Typography type="title">
                            <span style={style}>
                                {this.props.toolbar_title}
                            </span>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default AppBarC;
