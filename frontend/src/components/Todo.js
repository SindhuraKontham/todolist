import React from 'react'

export default function Todo({text}) {
  return (
    <div>
        <input type='text' value={text} />
        <button>Delete</button>
    </div>
  )
}
