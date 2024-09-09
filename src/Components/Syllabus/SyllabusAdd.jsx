import { TextField } from '@mui/material'
import React from 'react'
import styles from './SyllabusAdd.module.css'

const SyllabusAdd = () => {
  return (
    <div>

<form className={styles.container}>
        <label htmlFor="firstName">Subject Name</label>
        <input type="text" id="firstName" placeholder='First Name' />

        <label htmlFor="class">Class</label>
        <input type="text" id="class" placeholder='Class' />

        <TextField type='file' 
          style={{ width: '100%', backgroundColor: '#4B0082', color: 'white' ,border:'none',borderRadius:7} } />

        <button type="submit">Register</button>
        </form>
      
    </div>
  )
}

export default SyllabusAdd
