import React from 'react'

const ShowProfile = ({
  user
}) => {
  return (
    <div>
      <img src={ user.profileImageURL } alt = { `Profile pic for ${ user.firstName } ${ user.lastName }` }/>
      <p>Name: { user.firstName } { user.lastName }</p>
    </div>
  )
}

export default ShowProfile