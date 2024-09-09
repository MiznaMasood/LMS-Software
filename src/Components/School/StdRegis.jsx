import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';
import styles from './stdRegis.module.css';

const StdRegis = ({ setRefresh }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    class: '',
    gender: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, 'Students'), formData);
      if (setRefresh) {
        setRefresh(prev => !prev);
      }
      if (window.confirm("Student registered successfully! Do you want to view the student list?")) {
        navigate('stdList');
      }
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="class">Class</label>
        <input
          type="text"
          id="class"
          name="class"
          placeholder="Class"
          value={formData.class}
          onChange={handleChange}
        />
        <label>Gender</label>
        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StdRegis;





