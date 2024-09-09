import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase'; // Adjust the import path
import styles from './Form.module.css'; // Import the CSS module

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dob: '',
    qualification: '',
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
    const confirmed = window.confirm('Are you sure you want to register this student?');

    if (confirmed) {
      try {
        await addDoc(collection(database, 'Class'), formData);
        alert('Class registered successfully!');
        navigate('classList'); // Navigate to the class list or another page
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('Failed to register class. Please try again.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Class Registration</h1>
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
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <label htmlFor="qualification">Qualification</label>
        <input
          type="text"
          id="qualification"
          placeholder="Qualification"
          value={formData.qualification}
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

export default Form;


