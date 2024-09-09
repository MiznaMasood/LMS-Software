import React, { useState } from 'react';
import { TextField, Button, MenuItem, InputAdornment, IconButton } from '@mui/material';
import style from './Form.module.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const AdmissionForm = () => {
  const [dob, setDob] = useState('');

  return (
    <div className={style.formContainer}>
      <h2>Admission Form</h2>
      
      <TextField
        label="First Name"
        fullWidth
        margin="normal"
        placeholder="Enter your first name"
      />
      
      <TextField
        label="Last Name"
        fullWidth
        margin="normal"
        placeholder="Enter your last name"
      />
      
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        placeholder="Enter your email"
      />
      
      <TextField
        label="Phone Number"
        type="tel"
        fullWidth
        margin="normal"
        placeholder="Enter your phone number"
      />
      
      <TextField
        label="Date of Birth"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <CalendarTodayIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      
      <TextField
        label="Qualification"
        fullWidth
        margin="normal"
        placeholder="Enter your qualification"
      />
      
      <TextField
        label="Gender"
        select
        fullWidth
        margin="normal"
      >
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="male">Male</MenuItem>
      </TextField>

      <Button variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </div>
  );
};

export default AdmissionForm;