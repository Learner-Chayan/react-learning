// import React from 'react';

// class LearnUseEffect extends React.Component{
//     state = {count:0, date: new Date()}
//     componentDidMount(){
//         const {count} = this.state;
//         document.title = `Clicked ${count} times`;
//         setInterval(this.tick,1000);
//     }
//     componentDidUpdate(){
//         const {count} = this.state;
//         document.title = `Clicked ${count} times`;
//     }
//     const addClick =()=>{
//         this.setState(({count}) => ({
//             count:count + 1
//         }))
//     }
//     const tick = () => {
//         this.setState({date:new Date()})
//     }
//     render(){
//        const {date} = this.state;
//        return (
//             <div>
//                 <span>
//                     Time: {date.toLocaleTimeString()}</span>
//                 <p><button onClick={this.addClick}>Click to update count on title</button> </p>
//             </div>
//         )
//     }

// }
// export default LearnUseEffect


// *** Same thing using functional component *****************************************
import React from 'react';
import {useState,useEffect} from 'react';

export default function LearnUseEffect (){

    const [count , setCount] = useState(0);
    const [date,setDate] = useState(new Date());

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    },[count])

    useEffect(()=> {
        console.log('timer set');
        setInterval(tick,1000); // stop timer after work done

        return ()=> {
            clearInterval(1000);
        }
    },[]) // [] means this will update once
    
    const addClick = ()=>{
        setCount((count)=>count + 1)
    }
   
    // componentDidMount(){
    //     const {count} = this.state;
    //     document.title = `Clicked ${count} times`;
    //     setInterval(this.tick,1000);
    // }
    // componentDidUpdate(){
    //     const {count} = this.state;
    //     document.title = `Clicked ${count} times`;
    // }

    const tick = () => {
       setDate(new Date())
    }

       return (
            <div>
                <span>
                    Time: {date.toLocaleTimeString()}</span>
                <p><button onClick={addClick}>Click to update count on title</button> </p>
            </div>
        )
}