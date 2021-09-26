import TemperatureInput from './TemperatureInput';
import BoilingWater from './BoilingWater';
import React from 'react';
import { convert, toCelsius, toFahrenheit } from '../../lib/converter';

class Calculator extends React.Component
{
    state = {scale:'c', temparature:''}

    handleChanges = (e,scale)=>{
        this.setState({scale:scale,temparature:e.target.value});
    }
    render() {

        const {scale,temparature} = this.state;
        const celcius = scale === 'f' ? convert(temparature,toCelsius) : temparature;
        const fahrenheit = scale === 'c' ? convert(temparature,toFahrenheit) :temparature;

        return (
            <div>
                <TemperatureInput scale="c" temparature={celcius} onTemparatureChange={this.handleChanges} />
                <TemperatureInput scale="f" temparature={fahrenheit} onTemparatureChange={this.handleChanges} />
                <BoilingWater celsius={parseFloat(celcius)} />
            </div>
        )
    }
}

export default Calculator