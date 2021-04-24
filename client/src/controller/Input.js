import React, { useRef } from 'react'
import { usePeopleStore } from '../api/store'

export default function Input() {
  const inputRef = useRef()
  const addPerson = usePeopleStore(state => state.addPerson)

  const add = () => {
    addPerson(inputRef.current.value)
  }

  return (
    <div>
      <input type="text" name="text" id="text" ref={inputRef} />
      <button onClick={add} >Add Person</button>
    </div>
  )
}
