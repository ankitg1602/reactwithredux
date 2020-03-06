import Select from 'react-select';
import React, {useState} from 'react';

function SelectOption(props) {
    const [selectedOption, setSelectedOption] = useState(props.selectedOption);
    const [options, setOptions] = useState([
        { value: '1', label: 'Clients Spend History' },
        { value: '2', label: 'Clients contacts management' },
    ])

   

    return (
        <select 
        value={selectedOption}
        onChange={(selOption) => setSelectedOption(selOption)}
        options={options}/>
    )

}

export default SelectOption