import React from 'react';
import withCounter from './WithCounter';


/** Before using Higher order component **************************************** */
// export default class ClickCounter extends React.Component {
    
//     state = {countClick:0}

//     incrementClick = () => {
//         this.setState((state,props) => ({countClick:state.countClick + 1}))
//     }
//     render()
//     {
//         const {countClick} = this.state;
//         return (
//             <div>
//                 <button onClick={this.incrementClick}>
//                     Clicked {countClick} times
//                 </button>
//             </div>
//         )
//     }
// }

/** Using Higher order component ******************************************** */



const clickCounter = (props)=> {

            const {count, incrementCount} = props;
            return (
                <div>
                    <button onClick={incrementCount}>
                        Clicked {count} times
                    </button>
                </div>
            )

}

export default withCounter(clickCounter)