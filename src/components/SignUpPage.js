// Create separate component, SignUpPage, write class will extend React.Component, main div will have the form with the following fields: name, photo upload, user name, email, 
// password, re-enter password, DOB, and submit button. 

import React from "react";
import axios from "axios";

class SignUpPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
            password:null,
            user_name:null,
            email: null,
            dob:null,
            photo: null,
            images: []
        }
        this.nameHandler=this.nameHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
        this.user_nameHandler=this.user_nameHandler.bind(this);
        this.emailHandler=this.emailHandler.bind(this);
        this.dobHandler=this.dobHandler.bind(this);
        this.photoHandler=this.photoHandler.bind(this);
    }
    nameHandler(){
        event.preventDefault();
        this.setState({name: event.target.value});
        
    }
    passwordHandler(){
        event.preventDefault();
        this.setState({password: event.target.value});
        
    }
    user_nameHandler(){
        event.preventDefault();
        this.setState({user_name: event.target.value});
        
    }
    emailHandler(){
        event.preventDefault();
        this.setState({email: event.target.value});
        
    }
    dobHandler(){
        event.preventDefault();
        this.setState({dob: event.target.value});
        
    }
    photoHandler(){
        event.preventDefault();
        this.setState({photo: event.target.value});
        
    }

    render(){
        return(
            <div id="mainDivSignUp">
                <form id="signUpForm" onSubmit={this.submitButton}>
                    <p>Name</p>
                    <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="name" />
                    <p>User name</p>
                    <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="name" />
                    <p>Name</p>
                    <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="name" />
                    <p>Name</p>
                    <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="name" />
                    <p>Name</p>
                    <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="name" />
                    <p>Name</p>
                    <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="name" />
                    <p>Name</p>
                    <input type="text" value={this.state.name} onChange={this.nameHandler} placeholder="name" />
                
                </form>
            </div>
        )
    }
}