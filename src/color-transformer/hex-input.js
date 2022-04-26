import {useEffect, useState} from 'react';
import PropTypes from "prop-types";

function HexInput(props) {
    const { transformValue } = props;
    const [value, setValue] = useState('#');

    const inputHandler = (e) => {
        setValue(prevValue => {
            if (e.target.value === '') {
                return '#';
            }
            return e.target.value;
        });
    }

    useEffect(() => {
        if (value.length === 7) {
            transformValue(value);
        }
    }, [value, transformValue]);


    return (
        <input
            className={'ct-hex-input'}
            onChange={inputHandler}
            value={value}
            maxLength={7}/>
    )
}

HexInput.propTypes = {
    transformValue: PropTypes.func.isRequired,
}

export default HexInput;
