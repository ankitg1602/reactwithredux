import Select from 'react-select';
import React, {Component} from 'react';

class SelectOption extends Component {
    constructor() {
        super();
        this.state = {
            options: [
                { value: '1', label: 'Clients Spend History' },
                { value: '2', label: 'Clients contacts management' },
            ],
        }
    }

    onChangeSelected = (sel) => {
        this.props.onSelectedChanged(sel)
    }

    render () {
        const selectedOption = this.props.selectedOption;
       
        return (
            <Select 
            value={selectedOption}
            onChange={this.onChangeSelected}
            options={this.state.options}/>
        )
    }
    

}

export default SelectOption