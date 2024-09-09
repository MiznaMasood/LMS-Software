import React, { useState } from 'react';
import styles from './TeacherRegis.module.css'; // Import the CSS module
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';

const TeachRegis = ({ setRefresh }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    class: '',
    gender: '',
    subject: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, 'Teachers'), formData);
      setRefresh(prev => !prev); // Trigger refresh in the parent component

      // Show confirmation alert
      if (window.confirm("Teacher registered successfully! Do you want to view the teacher list?")) {
        navigate('/teacherList'); // Navigate to the Teacher List page
      }
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Teacher Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder='First Name' onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder='Last Name' onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder='Email' onChange={handleChange} />

        <label htmlFor="class">Class</label>
        <input type="text" id="class" name="class" placeholder='Class' onChange={handleChange} />

        <label>Gender</label>
        <div className={styles.radioGroup}>
          <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />
          <label htmlFor="male">Male</label>

          <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
          <label htmlFor="female">Female</label>

          <input type="radio" id="other" name="gender" value="Other" onChange={handleChange} />
          <label htmlFor="other">Other</label>
        </div>

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder='Subject' onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default TeachRegis;



