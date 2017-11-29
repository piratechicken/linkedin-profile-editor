import React, { Component } from 'react';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/lego/2.jpg'
    }
  }

  onChangeFirstName = (newName) => {
    this.setState((prevState) => {
      const user = prevState.user
      user.firstName = newName
      return {
        user: user
      }
    })
  }
  
  onChangeLastName = (newName) => {
    this.setState((prevState) => {
      const user = prevState.user
      user.lastName = newName
      return {
        user: user
      }
    })
  }
  
  onChangeProfileImageURL = (newURL) => {
    this.setState((prevState) => {
      const user = prevState.user
      user.profileImageURL = newURL
      return {
        user: user
      }
    })
  }

  render() {
    const user = this.state.user

    return (
      <div className="App">
        <h1>LinkedIn Profile Editor</h1>
        <ShowProfile 
          user={ user } 
        />
        <EditProfile 
          user={ user }
          updateFirstName={
            (newName) => {
              this.onChangeFirstName(newName)
            }}
          updateLastName={
            (newName) => {
            this.onChangeLastName(newName)
          }}
          updateURL={
            (newURL) => {
            this.onChangeProfileImageURL(newURL)
          }}
        />
      </div>
    ); 
  }
}

export default App;
