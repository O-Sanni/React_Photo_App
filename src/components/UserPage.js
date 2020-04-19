// the props.id will be send to UserPage to open page for the particular user;
//there will be async function to get information by using axios.get
// will get information from http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users/ and /images ? userId= to userid
//then create check function to make sure that user info and images not empty
// then if it is not empty  function will return user information and image
//to render images i will use .map()
//create function to get time stamp for each image

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
async getUserInfo(){
        try{
            const listOfUserInfo= await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users/${this.props.id}`);
            const listOfUserImages=await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/images?userid=${this.props.id}`);
            this.setState({user: listOfUserInfo.data});
            this.setState({images: listOfUserImages.data});
        }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getUserInfo();   
    }
    getTimeStamp(){
        const month=["Jan","Feb","Apr","M"]
        let timeStamp=Date.now();





        return timeStamp;
    }
//     getImages(){
//         console.log(this.state.images[0].id);

//         // console.log(this.state.images[0].id)
//         // return <p>{this.state.images[0].imgurl}</p>
//         // let images=this.state.user.map(response=>{
//         // console.log(response.images)
//         // })
//         //     return (<div>
//         //      <img src={response} alt="image" />
//         //      <p>{this.getTimeStamp()}</p>
//         //      </div> )});
//         //      return images;
//  }
    
    checkIfUserExists(){
        if(this.state.userId==="" || this.state.images===""){
            return "Sorry, information is not availiable or user page has been deleted.";
    }
    else{
        let images=this.state.images.map(res=>
            {
                console.log(res.id)
                console.log(this.getTimeStamp())
            })
        // return (<div>
                    
             
        //         </div>)
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