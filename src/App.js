import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/lego/2.jpg'
    }
  }

  onChangeFirstName = (event) => {
    const input = event.target
    const newFirstName = input.value
    this.setState((prevState) => {
      const user = prevState.user
      user.firstName = newFirstName
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
        <img src={ user.profileImageURL } alt = { `Profile pic for ${ user.firstName } ${ user.lastName }` }/>
        <p>Name: { user.firstName } { user.lastName }</p>
        <label>
          First name: {' '}
          <input 
            value={ user.firstName }
            onChange={
              this.onChangeFirstName
            } 
          />
        </label>
      </div>
    ); 
  }
}

export default App;
