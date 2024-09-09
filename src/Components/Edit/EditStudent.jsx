import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase';

const EditStudent = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    class: '',
  });
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch the student data from Firebase
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const studentDoc = doc(database, 'Students', id);
        const studentSnapshot = await getDoc(studentDoc);

        if (studentSnapshot.exists()) {
          setStudentData(studentSnapshot.data());
        } else {
          setError('Student not found!');
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError('Failed to fetch student data.');
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchStudentData();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission and update student data
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const studentDoc = doc(database, 'Students', id);
      await updateDoc(studentDoc, studentData);
      alert('Student updated successfully!');
      navigate('/dashboard/stdList'); // Correct navigation path
    } catch (error) {
      console.error('Error updating student:', error);
      setError('Failed to update student data.');
    }
  };

  if (loading) {
    return <p>Loading student data...</p>;
  }

  if (error) {
    return <p>{error}</p>; // Display error message
  }

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleUpdate}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={studentData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={studentData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            name="class"
            value={studentData.class}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
