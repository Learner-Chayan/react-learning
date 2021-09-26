import React from 'react';

export default class Counter extends React.Component {
    
    state = {count:0}

    incrementCount = () => {
        this.setState((state,props) => ({count:state.count + 1}))
    }
    render()
    {
        const {count} = this.state;
        const {renderCount} = this.props;
        return renderCount(count, this.incrementCount);
    }
}