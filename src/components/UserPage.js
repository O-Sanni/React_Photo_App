import React from "react";
import axios from "axios";

class UserPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId: props.id,
            user:"",
            images:""
        }
        
    }
async getUserInfo(){
        try{
            const listOfUserInfo= await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users/${this.props.id}`);
            // const listOfUserImages=await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/images?userid=${this.state.userId}`);
            this.setState({user: listOfUserInfo.data});
            // this.setState({images: listOfUserImages.data})
            // let img=this.state.images.map((res)=>{
            //     return res.imgurl;
            // })
            // console.log(img);
            // console.log(this.state.images[0].imgurl);
        }
        catch(error){
            console.log(error);
        }
    }
    // async getUserImages(){
    //     try{
    //         const listOfUserImages=await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/images?userid=${this.state.userId}`); 
    //         this.setState({images: listOfUserImages.data})

    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }
    componentDidMount(){
        this.getUserInfo();
        //this.getUserImages();
        // console.log(this.state.images)
        axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/images?userid=${this.props.id}`).
        then(res=>
            {this.setState({images: res.data})})

        .catch((error)=>{
            console.log(error);
        })

    }
    // getTimeStamp(){
    //     let timeStamp=new Date();
    //     return timeStamp.Date.now();
    // }
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
        
        // return (<div>
                    
                     console.log(this.state.user.photo)
                    console.log(this.state.images[0])
                    return <p>{this.state.images[0].id}</p>
        //             {/* <img src={this.state.images[0].imgurl} alt="profile photo" /> */}
        //             {/* <p>Username</p>
        //             <h4>{this.state.wineList.year}</h4>
        //             <p>Date of Birth</p> 
        //             <h4>{this.state.wineList.grapes}</h4>
        //             <p>E-mail</p>
        //             <h4>{this.state.wineList.country}</h4> */}
        //             {/* {this.getImages()} */}
        //             </div>)
    }
    }
    
        render(){   
            
            return (<div>
            {this.checkIfUserExists()}
            {/* {console.log(this.state.images[0])} */}
            </div> 
            );
        }
    }
export default UserPage;