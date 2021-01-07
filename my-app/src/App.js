import React from 'react';
import axios from "axios";
import './App.css';
import DisplayYou from "./Components/DisplayYou";
import Followers from "./Components/Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      user: [],
      followers: []
    })
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/diddleslip")
    .then(response => {
      console.log(response);
      this.setState({
        user: response.data
      })
    }) 
    .catch(error => {
      console.log("You got error :(", error)
    })
    
    axios.get("https://api.github.com/users/diddleslip/followers")
    .then(response => {
      console.log("This is from second axios", response.data);
      this.setState({
        followers: response.data
      })
    }) 
    .catch(error => {
      console.log("You got error :(", error)
    })
  }


  render() {
    
    return (
      <div className="App">
        <h1>Welcome</h1>
        <div>
          <DisplayYou state={this.state.user}/>
          <Followers state={this.state.followers}/>
        </div>
      </div>
    );
  }
}

export default App;
