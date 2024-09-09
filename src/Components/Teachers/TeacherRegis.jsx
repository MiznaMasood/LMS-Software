import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';
import styles from './TeacherRegis.module.css'

const TeacherRegis = () => {
  const [teacherData, setTeacherData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    class: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(database, 'Teachers'), teacherData);
      alert('Teacher registered successfully!');
      navigate('/teachList'); // Go back to the teacher list after registration
    } catch (error) {
      console.error('Error registering teacher: ', error);
      alert('Failed to register teacher');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Teacher Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} />

        <label htmlFor="class">Class</label>
        <input type="text" id="class" name="class" placeholder="Class" onChange={handleChange} />

        <label>Gender</label>
        <div className={styles.radioGroup}>
          <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />
          <label htmlFor="male">Male</label>

          <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
          <label htmlFor="female">Female</label>

          <input type="radio" id="other" name="gender" value="Other" onChange={handleChange} />
          <label htmlFor="other">Other</label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TeacherRegis;






