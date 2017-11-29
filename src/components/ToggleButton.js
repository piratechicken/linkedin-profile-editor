import React from 'react'

const ToggleButton = ({
  buttonTitle,
  onToggleView
}) => {
  return (
    <button type='button'
      onClick={
        (event) => {
          onToggleView()
        }
      }
    >
      { buttonTitle }
    </button>
  )
}

export default ToggleButton