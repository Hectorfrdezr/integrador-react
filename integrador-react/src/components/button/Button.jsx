import React from 'react'
import styled from 'styled-components'

function Button(title) {
  return (
    <Btn>
      <div className="bnn-container">
        <button>{title}</button>
      </div>
    </Btn>
  )
}

const Btn= styled.button`

`
export default Button