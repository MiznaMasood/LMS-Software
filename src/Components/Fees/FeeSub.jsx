import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import style from './FeeSubmissionForm.module.css';

const FeeSubmissionForm = () => {
  const [paymentFor, setPaymentFor] = useState('');
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ paymentFor, name, className, amount, paymentMethod });
  };

  return (
    <div className={style.formContainer} style={{ backgroundColor: '#FCE4EC', padding: '20px', borderRadius: '8px' }}> {/* Light pink background */}
      <h2 style={{ color: '#D500F9' }}>Fee Submission Form</h2> {/* Purple text */}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Payment for"
          fullWidth
          margin="normal"
          placeholder="Enter purpose of payment"
          value={paymentFor}
          onChange={(e) => setPaymentFor(e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
        
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
        
        <TextField
          label="Class"
          fullWidth
          margin="normal"
          placeholder="Enter class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
        
        <TextField
          label="Amount"
          type="number"
          fullWidth
          margin="normal"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
        
        <TextField
          label="Payment Method"
          select
          fullWidth
          margin="normal"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          sx={{ marginBottom: '16px' }}
        >
          <MenuItem value="creditCard">Credit Card</MenuItem>
          <MenuItem value="debitCard">Debit Card</MenuItem>
          <MenuItem value="paypal">PayPal</MenuItem>
          <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
        </TextField>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{
            backgroundColor: '#D500F9', // Purple
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#530761', // Pink
            },
            marginTop: '20px'
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FeeSubmissionForm;
