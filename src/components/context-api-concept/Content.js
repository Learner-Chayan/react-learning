import React from "react";
import themeContext from "../../contexts/themeContext";
import ColorEffect from "./ColorEffect";
import HoverEffect from "./HoverEffect";
import {useContext} from 'react'

//** For Functional component - basic ******************** */
// themeContext.Provider is exist on MainComponent
export default function Content()
{
    return (
        <div>
            <ColorEffect renderHoverCount={(count,hoverCount) =>(
                <themeContext.Consumer > 
                   {({theme}) => (
                        <HoverEffect count={count} hoverCount={hoverCount} theme={theme} />
                   )}
                </themeContext.Consumer>
            )} />
        </div>
    );
}

// nicher gula kaj korce na ...

/** For Functional component - using outside and another way ******************** */
// export default function Content()
// {
//     const context = themeContext;
//     console.log(context);
//     const {theme} = context;
//     console.log('theme',theme);
//     return (
//         <div>
//             <ColorEffect renderHoverCount={(count,hoverCount) =>(
//                 <HoverEffect count={count} hoverCount={hoverCount} theme={theme} />
//             )} />
//         </div>
//     );
// }

// If The component was a class component and we need to access contenxt in the class then -> 

//  class Content extends React.Component
// {

//     componentDidMount()
//     {
//         console.log('here');
//         console.log(this);
//     }

//     render(){
//        //const {theme} = this.context;
//         return (
//             <div>
//                 <ColorEffect renderHoverCount={(count,hoverCount) =>(
//                     <HoverEffect count={count} hoverCount={hoverCount} theme={{theme:'dark'}} />
//                 )} />
//             </div>
//         );
//     }
// }

// Content.contextType = themeContext;
// export default Content
