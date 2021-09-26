// import React from 'react'
import React from 'react'


class Forms extends React.Component {
    state = {name:'',type:0,comment:'',gender:'',agreement:true,submittedInfo:''}

    hanldeChange = (e)=>{
        let targetInput = e.target.name;

        if(targetInput === 'name')
        {
            this.setState({
                name:e.target.value
            })
        }else if(targetInput === 'type')
        {
            this.setState({
                type:e.target.value
            })
        }else if(targetInput === 'comment')
        {
            this.setState({
                comment:e.target.value
            })
        }else if(targetInput === 'agreement')
        {
            this.setState({
                agreement:e.target.value
            })
        }
        else if(targetInput === 'gender')
        {
            this.setState({
                gender:e.target.value
            })
        }

    }

    onFormSubmit = (e)=> {
        e.preventDefault();
        console.log('form submitted');
        let type = this.state.type == 1 ? 'Student':this.state.type == 2 ? 'Teacher' : '---';
        let submittedInfo = `Your submitted info - 
                    name : ${this.state.name} , Type: ${type} , Gender : ${this.state.gender}
                    Agreement : ${this.state.agreement} , 
                    your comment : ${this.state.comment}                    
        `;

        this.setState({submittedInfo:submittedInfo});
    }
    render()
    {
        let  {name,type,comment,agreement,submittedInfo} = this.state;
        return (
            <div>
                <span>..............................</span>
                <form onSubmit={this.onFormSubmit}>
                    <h5>Lets learn react form </h5>
                    <label>Name</label>
                    <input onChange={this.hanldeChange} value={name} name="name" type="text" placeholder="Enter Your Name"/>
                    <br/>
                    <label>Type</label>
                    <select onChange={this.hanldeChange} value={type} name="type">
                        <option value="0">Select One</option>
                        <option value ="1">Student</option>
                        <option value="2">Teacher</option>
                    </select>
                    <br/>
                    <label>Your Comment</label>
                    <textarea onChange={this.hanldeChange} value={comment} name="comment"></textarea>
                    <br/>
                    <label>Gender</label>
                    <input onChange={this.hanldeChange} value="male" type="radio" name="gender" id="male" /> <label htmlFor="male">Male</label>
                    <input onChange={this.hanldeChange} value="female" type="radio" name="gender" id="female" /> <label htmlFor="female">Female</label>
                    <br/>
                    <label>Agreement - </label>
                    <input onChange={this.hanldeChange} checked={agreement} type="checkbox" name="agreement" id="agreement" /> <label htmlFor="agreement">I agree . </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>

                <p>{submittedInfo}</p>
            </div>
        )
    }
}

export default Forms;