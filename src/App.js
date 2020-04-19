import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props)
  {
    super(props)
   this.state={
      userInfo:null
   }
   }async getWineList(){

    try{
        const list= await axios.get(`https://my-json-server.typicode.com/OlgaSannikov/React_Photo_App/users`)
        this.setState({userInfo: list.data});
        console.log(this.state.userInfo)
    } 
    catch(error){
        console.log(error);
    }
}
componentDidMount(){
    this.getWineList();
}
  render(){
  return (
    <div className="App">
     
    </div>
  );
}
}
export default App;
