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
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'; 
import { database } from '../../Config/firebase';
// Uncomment if you are using Swal for alerts
// import Swal from 'sweetalert2'; 

// Custom TableCell with updated styling
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#D500F9', // Purple for header background
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '16px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.black,
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

const TableWrapper = styled('div')(({ theme }) => ({
  marginLeft: '250px', // Add left margin for sidebar
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0', // Adjust for smaller screens
  },
}));

const SyllabusList = () => {
  const [syllabusList, setSyllabusList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const getSyllabusList = async () => {
    try {
      const arr = [];
      const subjects = await getDocs(collection(database, 'Subjects'));
      subjects.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setSyllabusList(arr);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, 'Subjects', id));
      // Uncomment if using Swal
      // Swal.fire({
      //   title: "Success",
      //   text: "Subject Deleted Successfully",
      //   icon: "success",
      // });
      alert('Subject deleted successfully!');
      setRefresh(!refresh);
    } catch (err) {
      // Uncomment if using Swal
      // Swal.fire({
      //   title: "Error",
      //   text: err.message,
      //   icon: "error",
      // });
      alert('Failed to delete subject');
    }
  };

  const handleDownload = (pdfUrl) => {
    // Logic to download PDF
    window.open(pdfUrl, '_blank');
  };

  useEffect(() => {
    getSyllabusList();
  }, [refresh]);

  return (
    <TableWrapper>
      <Button
        variant="contained"
        sx={{
          float: 'right',
          marginBottom: '20px',
          marginRight: '20px',
          backgroundColor: '#D500F9', // Purple button
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#C51162', // Darker purple on hover
          },
        }}
        onClick={() => navigate('/SyllabusAdd')}
      >
        Add Subject
      </Button>
      <TableContainer component={Paper} mt={5} sx={{ boxShadow: 4 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Subject Name</StyledTableCell>
              <StyledTableCell align="center">Class</StyledTableCell>
              <StyledTableCell align="center">Download</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {syllabusList.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.subjectName}</StyledTableCell>
                <StyledTableCell align="center">{row.class}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDownload(row.pdfUrl)} // Assuming `pdfUrl` is the field with the PDF URL
                  >
                    Download
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ModeEditOutlineIcon 
                    sx={{ cursor: 'pointer', marginRight: '10px', color: '#1976d2' }}
                    onClick={() => navigate(`/editSubject/${row.id}`)} 
                  />
                  <DeleteIcon 
                    sx={{ cursor: 'pointer', color: '#d32f2f' }} 
                    onClick={() => handleDelete(row.id)} 
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default SyllabusList;
