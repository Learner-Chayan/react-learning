
/**Default options  */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/**Lets learn awesome logic of reats  *******************************************************************
// const element = <h1>Hello world</h1> // jsx syntax
// console.log(element);
// ReactDOM.render(element,document.getElementById('root')) // which jsx , and where


/*REACT COMPONENT & PROPS*************************FUNCTIONAL COMPONENT************************************ */
// function GetStart({lang}) // props .. using object destructuring concpent 
// {
//   return (
//     <div>
//       <h1>Hello World (English)</h1>
//       <h2>Hello Bangladesh ({lang})</h2>
//     </div>
//   )
// }

// //ReactDOM.render(GetStart(),document.getElementById('root')); // This one also correct 
// ReactDOM.render(<GetStart lang="Bengali" />,document.getElementById('root')); // This is concpent is same as upper line using like function


/*REACT COMPONENT & PROPS*************************CLASS COMPONENT*************************************** */

// class GetStart extends React.Component {
//   render() // we should use render method for automatic call in class component
//   {
//     return (
//       <div>
//        <h1>Hello World (English)</h1>
//        <h2>Hello Bangladesh ({this.props.lang})</h2>
//      </div>
//     )
//   }
// }
//  ReactDOM.render(<GetStart lang="Bengali-BN" />,document.getElementById('root'));

 /**
  * class component props note : 
  * props exist on parent component
  * this key word presenting the class with parent class
  * all props storing on props property 
  * thats why we getting this.props.lang using like this .
  */




