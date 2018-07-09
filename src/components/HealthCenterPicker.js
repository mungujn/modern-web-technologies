/**
 * Created by Mungujakisa on 9/24/2017.
 */
import React, {Component} from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

class HealthCenterPicker extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <div>
                <FormControl>
                    <InputLabel htmlFor="health_center">Age</InputLabel>
                    <Select
                        value={10}
                        onChange={this.handleChange('age')}
                        input={<Input id="health_center" />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default HealthCenterPicker;
