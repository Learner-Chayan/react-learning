import React from 'react';
import withCounter from './WithCounter';


// ** Before using HireOrder Component **********************************************
// export default class HoverCounter extends React.Component {
    
//     state = {countHover:0}

//     incrementHover = () => {
//         this.setState((state,props) => ({countHover:state.countHover + 1}))
//     }
//     render()
//     {
//         const {countHover} = this.state;
//         return (
//             <div>
//                 <a onMouseOver={this.incrementHover}>
//                     Hoverd {countHover} times
//                 </a>
//             </div>
//         )
//     }
// }


const HoverCounter = (props)=> {

        const {count,incrementCount} = props;
        return (
            <div>
                <a onMouseOver={incrementCount}>
                    Hoverd {count} times
                </a>
            </div>
        )
}


export default withCounter(HoverCounter)