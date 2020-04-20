import React from 'react';
import axios from "axios";
import './App.css';
import SignUpPage from "./components/SignUpPage";
import UserPage from "./components/UserPage";
class App extends React.Component {
  constructor(props)
  {
    super(props)
   this.state={
   }
   }
render(){
  return (
    <div className="App">
     <SignUpPage />
     {/* <UserPage id="3" /> */}
    </div>
  );
}
}
export default App;
