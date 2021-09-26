import React from 'react'
import '../assets/css/LangWarning.css';

class LangWarning extends React.Component {

    render()
    {
        if(!this.props.show) return null;
        return (
            <small className="warning-msg">
                Bengali is not supported for all system!
            </small>
        )
    }
}

export default LangWarning