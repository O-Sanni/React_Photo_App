import React from "react";
import axios from "axios";

class UserPage extends React.Components{
    constructor(props){
        super(props);
        this.state={
            userId: this.props,
            user:null,
        }
        
    }
async getUserList(){
        try{
            const listOfUsers= await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users/${this.state.userId}`)
            this.setState({user: listOfUsers.data});
        }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getWineList();
    }
    get
    getImages(){
        let images=this.state.user.map((response,index)=>{
            return (<div id={index}>
             <img src={response.image} alt="image" />
             <p>{getTimeStamp()}</p>
             </div> )});
             return images;
    }
    }
    checkIfUserExists(){
        if(this.state.userId===null){
            return "Sorry, information is not availiable or user page has been deleted.";
    }
    else{
        return (<div>
                    
                    <img src={this.state.user.photo} alt="profile photo" />
                    <p>Username</p>
                    <h4>{this.state.wineList.year}</h4>
                    <p>Date of Birth</p> 
                    <h4>{this.state.wineList.grapes}</h4>
                    <p>E-mail</p>
                    <h4>{this.state.wineList.country}</h4>
                    {this.getImages()}
                    </div>
    }
    }
        render(){   
    
            return (<div>{this.checkIfUserExists()}</div> 
            );
        }
    }
}