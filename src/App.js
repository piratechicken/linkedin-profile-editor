import React, { Component } from 'react';
import ShowProfile from './components/ShowProfile';
import EditProfile from './components/EditProfile';
import Button from './components/Button';
import './App.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/lego/2.jpg'
    },
    viewEdit: true
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

  toggleView = () => {
    this.setState({
      viewEdit: !this.state.viewEdit
    })
  }

  onRandomise = () => {
    fetch('https://randomuser.me/api/')
      .then(resp => {
        return resp.json()
      })
      .then(resp => {
        const randomUser = {
          firstName: capitalizeFirstLetter(resp.results[0].name.first),
          lastName: capitalizeFirstLetter(resp.results[0].name.last),
          profileImageURL: capitalizeFirstLetter(resp.results[0].picture.medium)
        }
        this.setState({
          user: randomUser
        })

      })
  }

  render() {
    const user = this.state.user
    const viewEdit = this.state.viewEdit
    const toggleButtonTitle = viewEdit ? 'Click to view profile' : 'Click to edit profile'

    return (
      <div className="App">
        <h1>LinkedIn Profile Editor</h1>
        <Button
          buttonTitle = { toggleButtonTitle }
          buttonAction={
            () => {
              this.toggleView()
            }
          }
        />
        { !viewEdit &&
          <ShowProfile 
            user={ user } 
          />
        }
        { viewEdit && 
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
          }
          <Button 
            buttonTitle = 'Random!'
            buttonAction={
              () => {
              this.onRandomise()
              }
            }
          />
      </div>
    ); 
  }
}

export default App;
