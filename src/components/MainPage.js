//this.state will have 1 state for images
//images will be downloaded using axios

import React from "react";
import axios from "axios";

class MainPage extends React.Component{
constructor(props){
    super(props);
    this.state={
        images:""
    }
}

async getUserImages(){
    try{
        const listOfUserImages=await axios.get(`http://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/images`);
        this.setState({images: listOfUserImages.data});
    }
    catch(error){
        console.log(error);
    }
}
componentDidMount(){
    this.getUserImages();
}

getImages(){
    if(this.state.images===""){
        return "Sorry, information is not availiable";
}
else{

 let img=this.state.images.map(res=>{
      
    return (<div>
    <p>Posted by: </p>
    <img src={res.imgurl} />
    </div>)
});

return img; 
} 
}
render(){
    
    return (<div>
{this.getImages()}
    </div>)
}
}

export default MainPage;