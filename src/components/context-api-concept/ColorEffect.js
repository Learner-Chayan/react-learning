import React from "react";
import HoverEffect from "./HoverEffect";

export default class ColorEffect extends React.Component {

    state  = {count:0};

    hoverCount = () => {
        this.setState((state,props) => ({
            count:state.count + 1
        }))
    }

    render()
    {
        const {count} = this.state;
        const {renderHoverCount} = this.props;
        return renderHoverCount(count,this.hoverCount);
    }
}