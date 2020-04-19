import React from "react";
import axios from "axios";

class UserPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId: props.id,
            user:null,
            images:null
        }
        
    }
async getUserList(){
        try{
            const listOfUserInfo= await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users/${this.state.userId}`);
            const listOfUserImages=await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/images?userid=${this.state.userId}`);
            this.setState({user: listOfUserInfo.data});
            this.setState({images: listOfUserImages.data})
            let img=this.state.images.map((res)=>{
                return res.imgurl;
            })
            console.log(img[0]);
            console.log(this.state.images[0].id);
        }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getUserList();
    }
    // getTimeStamp(){
    //     let timeStamp=new Date();
    //     return timeStamp.Date.now();
    // }
    getImages(){
        // return <p>{this.state.images[0].imgurl}</p>
        // let images=this.state.user.map(response=>{
        // console.log(response.images)
        // })
        //     return (<div>
        //      <img src={response} alt="image" />
        //      <p>{this.getTimeStamp()}</p>
        //      </div> )});
        //      return images;
    }
    
    checkIfUserExists(){
        if(this.state.userId===null && this.state.images===null){
            return "Sorry, information is not availiable or user page has been deleted.";
    }
    else{
        return (<div>
                    
                    {/* {console.log(this.state.user.photo)} */}
                    {/* <img src={this.state.images[0].imgurl} alt="profile photo" /> */}
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