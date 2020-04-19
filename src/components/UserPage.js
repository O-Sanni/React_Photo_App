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
    checkIfUserExists(){
        if(this.state.userId===null){
            return "Sorry, information is not availiable or user page has been deleted.";
    }
    else{
        return (<div>
                    
                    <img src={this.state.} alt="profile photo" />
                    <p>Year: {this.state.wineList.year}</p>
                    <p>Grapes: {this.state.wineList.grapes}</p>
                    <p>Country: {this.state.wineList.country}</p>
                    <p>Region: {this.state.wineList.region}</p>
                    <p>Price: {this.state.wineList.price}</p>
                    <p>Desctiption: {this.state.wineList.description}</p> 
                    <p>Wine Id: {this.state.wineList.id}</p> 
                </div>)
    }
    }
        render(){   
    
            return (<div>{this.checkIfUserExists()}</div> 
            );
        }
    }
}