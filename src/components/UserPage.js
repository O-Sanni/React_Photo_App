import React from "react";
import axios from "axios";

class UserPage extends React.Components{
    constructor(props){
        super(props);
        this.state={
            userId: this.props,
            user:"",
            profilePhoto:"",
            userName: "",
            dob: "",
            email: "",
            images: []
        }
        
    }
async getUserList(){
    
        try{
            const list= await axios.get(`http://myapi-profstream.herokuapp.com/api/466840/wines/${this.state.id}`)
            this.setState({wineList: list.data});
        }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getWineList();
    }
    checkIfWineExists(){
        if(this.state.wineList===null){
            return "Sorry, information is not availiable or wine has been deleted.";
    }
    else{
        return (<div>
                    <h3>{this.state.wineList.name.toUpperCase()}</h3>
                    <img src={this.state.wineList.picture} alt="wine" />
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
    
            return (<div>{this.checkIfWineExists()}</div> 
            );
        }
    }
}