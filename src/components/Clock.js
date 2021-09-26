import React from 'react'
import LangWarning from './LangWarning'




class Clock extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {presentTime:new Date(), lang:this.props.lang}
    }

    // //or we can assign like this
    //  state = {presentTime:new Date().toLocaleTimeString(this.props.lang)}

    componentDidMount()
    {
      this.startTime = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount()
    {
        clearTimeout(this.startTime)
    }
    tick()
    {
        // another way but bad practice
        //this.setState({presentTime:new Date().toLocaleTimeString(this.props.lang)});

        //Correct practice , best practice
        this.setState((state,props) => ({
           presentTime:new Date()
        }))
    }

    changeLang = ()=>
    {
       let newLang = this.state.lang === 'bn-BD' ? 'en-EN' : 'bn-BD';
       this.setState((state,props) =>({
           lang:newLang
       }))
    }

    render()
    {
        let langMsg;
        if(this.state.lang === 'bn-BD')
        {
            langMsg = <p>বাংলায় আপনাকে স্বাগতম</p>;
        }else{
            langMsg = <p>Welcome in English</p>;
        }
        return (
            <div>
                <span>Time : {this.state.presentTime.toLocaleTimeString(this.state.lang)}</span> -
                <button onClick={this.changeLang}>Change to {this.state.lang === 'bn-BD' ? 'EN' : 'BN'}</button>
                {langMsg}
                <LangWarning show={this.state.lang === 'bn-BD' ? true : false} />
            </div>
        )
    }
}

export default Clock