import React from 'react';
import axios from "axios";
import './App.css';
import SignUpPage from "./components/SignUpPage";

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
    </div>
  );
}
}
export default App;
