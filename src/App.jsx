import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div>
      <FontAwesomeIcon icon={faAngleDown} />
      <FontAwesomeIcon icon={faXmark} />
    </div>
  )
}
