import React from "react";
import axios from "axios";

class UserPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId: props.id,
            user:"",
        }
        
    }
async getUserList(){
        try{
            const listOfUsers= await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users/${this.state.userId}`)
            this.setState({user: listOfUsers.data});
            // console.log(this.state.user);
            // console.log(this.state.user.images[0]);
        }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getUserList();
    }
    getTimeStamp(){
        let timeStamp=new Date();
        return timeStamp.Date.now();
    }
    getImages(){
        // console.log(this.state.user)
        // console.log(this.state.user.images);
        let images=this.state.user.images.map(res=>{
            console.log(res)
        })
        // let images=this.state.user.images.map((response,index)=>{
        //     return (<div id={index}>
        //      <img src={response} alt="image" />
        //      <p>{this.getTimeStamp()}</p>
        //      </div> )});

        //      return images;
    }
    
    checkIfUserExists(){
        if(this.state.userId===null){
            return "Sorry, information is not availiable or user page has been deleted.";
    }
    else{
        return (<div>
                    {/* {console.log(this.state.user.photo)} */}
                    <img src={this.state.user.photo} alt="profile photo" />
                    {/* <p>Username</p>
                    <h4>{this.state.wineList.year}</h4>
                    <p>Date of Birth</p> 
                    <h4>{this.state.wineList.grapes}</h4>
                    <p>E-mail</p>
                    <h4>{this.state.wineList.country}</h4> */}
                    {this.getImages()}
                    </div>)
    }
    }
        render(){   
    
            return (<div>
            {this.checkIfUserExists()}
            </div> 
            );
        }
    }
export default UserPage;