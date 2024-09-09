import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase'; // Adjust the import path
import styles from './StdRegis.module.css'; // Import the CSS module

const StdRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    class: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleGenderChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, 'Students'), formData);
      alert('Student registered successfully!');
      navigate('/StdList'); // Navigate to the student list or another page
    } catch (error) {
      console.error('Error adding document: ', error);
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
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="class">Class</label>
        <input
          type="text"
          id="class"
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
            onChange={handleGenderChange}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleGenderChange}
          />
          <label htmlFor="female">Female</label>

          <input
            type="radio"
            id="other"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleGenderChange}
          />
          <label htmlFor="other">Other</label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StdRegistration;
