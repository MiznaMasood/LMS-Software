import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';
import styles from './SubAdd.module.css';

const SubAdd = () => {
  const [subjectData, setSubjectData] = useState({
    subjectName: '',
    class: '',
    group: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSubjectData({
      ...subjectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, 'Subjects'), subjectData);
      
      // Navigate to the SubList page before showing the alert
      navigate('/dashboard/subList');  // Adjust path as per your setup
      
      // Show success alert after navigation
      alert('Subject added successfully!');
    } catch (error) {
      console.error('Error adding subject: ', error);
      alert('Failed to add subject');
    }
  };
  

  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label htmlFor="subjectName">Subject Name</label>
        <input
          type="text"
          id="subjectName"
          name="subjectName"
          placeholder="Subject Name"
          onChange={handleChange}
        />

        <label htmlFor="class">Class</label>
        <input
          type="text"
          id="class"
          name="class"
          placeholder="Class"
          onChange={handleChange}
        />

        <label>Select Group</label>
        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="generalScience"
            name="group"
            value="GeneralScience"
            onChange={handleChange}
          />
          <label htmlFor="generalScience">General Science</label>

          <input
            type="radio"
            id="preEngineering"
            name="group"
            value="Pre-Engineering"
            onChange={handleChange}
          />
          <label htmlFor="preEngineering">Pre-Engineering</label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SubAdd;


