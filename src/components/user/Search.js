import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:''
    };

onChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
}
onSubmit=(e)=>{
    e.preventDefault();
    if(this.state.text ===''){
        this.props.setAlert('Please enter something','light');
    } else {
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    }
};
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder="enter your name"
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input onSubmit={this.onSubmit} type="submit" value="Search" className="btn btn-dark btn-block"/>
                
                </form>
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>CLear</button>
            </div>
        )
    }
}

export default Search
