'use client'

import React, { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='formControl'>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Title of your todo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default Create
