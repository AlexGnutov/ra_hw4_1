import ResultOutput from "./result-output";
import HexInput from "./hex-input";
import {useState} from "react";

function ColorTransformer(props) {
    const [state, setState] = useState('...')
    const [color, setColor] = useState('rgb(0,0,0)')

    const transform = value => {
        if (/^[A-Fa-f0-9]{6}$/.test(value.substring(1))) {
            const decimals = value
                .match(/[A-Fa-f0-9]{2}/g)
                .map(hexNumStr => parseInt(hexNumStr, 16));
            const colorString = `rgb(${decimals.join(', ')})`;
            setState(colorString);
            setColor(colorString);
            return;
        }
        setState('Error!');
        setColor('rgb(255,0,0)');
    }

    return (
        <div className={'color-transformer-container'} style={{backgroundColor: color}}>
            <div className={'color-transformer-element'}>
                <HexInput transformValue={transform}/>
                <ResultOutput text={state}/>
            </div>
        </div>
    )
}

export default ColorTransformer;
