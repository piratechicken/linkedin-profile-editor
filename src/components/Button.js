import React from 'react'

const ToggleButton = ({
  buttonTitle,
  buttonAction
}) => {
  return (
    <button type='button'
      onClick={
        (event) => {
          buttonAction()
        }
      }
    >
      { buttonTitle }
    </button>
  )
}

export default ToggleButton