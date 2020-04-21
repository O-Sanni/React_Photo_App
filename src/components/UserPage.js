// the props.id will be send to UserPage to open page for the particular user;
//there will be async function to get information by using axios.get
// will get information from http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users/ and /images ? userId= to userid
//then create check function to make sure that user info and images not empty
// then if it is not empty  function will return user information and image
//to render images i will use .map()
//create function to get time stamp for each image
//

import React from "react";
import axios from "axios";

class UserPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:"",
            images:""
        }
        
    }
    async getUserImages(){
        try{
            const listOfUserImages=await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/images?userid=${this.props.id}`);
            this.setState({images: listOfUserImages.data});
        }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){  
        this.getUserImages(); 
      axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users/${this.props.id}`).
      then(res=>{
          this.setState({user: res.data});
                    //console.log(this.state.user)
      }).catch(error=>{
                    console.log(error);
    })
}
    getTimeStamp(){
        let timeStamp= new Date();
        return (timeStamp.toDateString()+" time: "+timeStamp.toLocaleTimeString()+" "+timeStamp.getUTCMilliseconds()+"ms")    
    }
    
    checkIfUserExists(){
        if(this.state.userId==="" || this.state.images===""){
            return "Sorry, information is not availiable or user page has been deleted.";
    }
    else{
        console.log(this.user);
        let images=this.state.images.map(res=>
            {
                console.log(res.id)
                console.log(this.getTimeStamp())
          
        return (<div>   
                    <img src={res.imgurl} />
                    <p>Image added on: {this.getTimeStamp()}</p>
                </div>)   })
                return (<div>
                       {images}
                </div>)
                
    }
    }
    
        render(){   
           
            return (<div>
            <p>{this.state.user.name}</p>
            <p>{this.state.user.username}</p>
            <p>{this.state.user.dob}</p>
            <img src={this.state.user.photo}/>
            {this.checkIfUserExists()}
            </div> 
            );
        }
    }
export default UserPage;