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
        this.re_passwordHandler=this.re_passwordHandler.bind(this);
        this.user_nameHandler=this.user_nameHandler.bind(this);
        this.emailHandler=this.emailHandler.bind(this);
        this.dobHandler=this.dobHandler.bind(this);
        this.photoHandler=this.photoHandler.bind(this);
    }
    nameHandler(event){
        event.preventDefault();
        this.setState({name: event.target.value});
        
    }
    passwordHandler(event){
        event.preventDefault();
        this.setState({password: event.target.value});
        
    }
    // re_passwordHandler(event){
    //     event.preventDefault();
    //     if (event.target.value === this.state.)
    // }
    user_nameHandler(event){
        event.preventDefault();
        this.setState({user_name: event.target.value});
        
    }
    emailHandler(event){
        event.preventDefault();
        this.setState({email: event.target.value});
        
    }
    dobHandler(event){
        event.preventDefault();
        this.setState({dob: event.target.value});
        
    }
    photoHandler(event){
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
                    <input type="text" value={this.state.username} onChange={this.usernameHandler} placeholder="user name" />
                    <p>Password</p>
                    <input type="text" value={this.state.password} onChange={this.passwordHandler} placeholder="password" />
                    <p>Re-enter password</p>
                    <input type="text" value={this.state.re_password} onChange={this.re_passwordHandler} placeholder="re-enter password" />
                    <p>E-mail</p>
                    <input type="text" value={this.state.email} onChange={this.emailHandler} placeholder="e-mail" />
                    <p>Enter your date of birth</p>
                    <input type="text" value={this.state.dob} onChange={this.dobHandler} placeholder="mm/dd/yyyy" />
                    <p>Enter URL with your photo</p>
                    <input type="text" value={this.state.photo} onChange={this.photoHandler} placeholder="url" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}