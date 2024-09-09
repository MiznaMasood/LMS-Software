import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'; 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'; 
import { database } from '../../Config/firebase';

// Custom TableCell with updated styling
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#D500F9', // Purple for header background
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#333', // Dark gray for text
  },
}));

// Custom TableRow styling
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FCE4EC', // Light pink for odd rows
  },
  '&:hover': {
    backgroundColor: '#F8BBD0', // Pink hover effect for rows
  },
}));

const SubList = () => {
  const [subList, setSubList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const getSubList = async () => {
    try {
      const arr = [];
      const subjects = await getDocs(collection(database, 'Subjects'));
      subjects.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setSubList(arr);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, 'Subjects', id));
      alert('Subject deleted successfully!');
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
      alert('Failed to delete subject');
    }
  };

  useEffect(() => {
    getSubList();
  }, [refresh]);

  return (
    <div style={{ marginLeft: '250px', padding: '20px' }}>
      <Button
        variant="contained"
        sx={{
          float: 'right',
          marginBottom: '20px',
          backgroundColor: '#D500F9', // Purple button
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#C51162', // Darker purple on hover
          },
        }}
        onClick={() => navigate('/dashboard/subAdd')}
      >
        Add Subject
      </Button>
      <TableContainer component={Paper} sx={{ boxShadow: 4 }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Subject Name</StyledTableCell>
              <StyledTableCell align="center">Class</StyledTableCell>
              <StyledTableCell align="center">Group</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subList.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.subjectName}</StyledTableCell>
                <StyledTableCell align="center">{row.class}</StyledTableCell>
                <StyledTableCell align="center">{row.group}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(row.id)}
                    sx={{ color: '#D32F2F', borderColor: '#D32F2F' }} // Red color for delete button
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SubList;

