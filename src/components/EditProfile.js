import React from 'react'

const EditProfile = ({
  user,
  updateFirstName,
  updateLastName,
  updateURL
}) => {
  return (
    <div>
      <div>
        <img src={ user.profileImageURL } alt = { `Profile pic for ${ user.firstName } ${ user.lastName }` }/>
      </div>
      <label>
        Name: {' '}
        <input 
          value={ user.firstName }
          onChange={
            (event) => {
              updateFirstName(event.target.value)
            }
          }
        />
        <input
          value={ user.lastName }
          onChange={
            (event) => {
            updateLastName(event.target.value)
            }
          }
        />
      </label>
      <br/>
      <label>
        Image URL: {' '}
        <input 
          value={ user.profileImageURL }
          onChange={
            (event) => {
              updateURL(event.target.value)
            }
          } 
        />
      </label>
    </div>
  )
}

export default EditProfile