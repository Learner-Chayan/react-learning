
const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
}

function TemperatureInput({scale,temparature,onTemparatureChange})
{
    return (
        <fieldset>
            <legend>Enter Temperature in {scaleNames[scale]}</legend> 
            <input value={temparature} type="text" onChange={(e)=>{onTemparatureChange(e,scale)}} /> 
        </fieldset>
    )
}

export default TemperatureInput