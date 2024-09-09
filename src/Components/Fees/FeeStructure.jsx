import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const FeeStructure = () => {
  const feeData = [
    { class: 'Class 1', monthlyFee: 500, yearlyFee: 6000 },
    { class: 'Class 2', monthlyFee: 600, yearlyFee: 7200 },
    { class: 'Class 3', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 4', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 5', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 6', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 7', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 8', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 9', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 10', monthlyFee: 700, yearlyFee: 8400 },
    // Add more classes as needed
  ];

  return (
    <div style={{ marginLeft: '240px', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Fee Structure
      </Typography>
      <Grid container spacing={3}>
        {feeData.map((fee, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card style={{
              borderRadius: '15px', 
              backgroundColor: '#f8bbd0', // Light pink background
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)', 
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: '#f48fb1', // Slightly darker pink on hover
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="#6a1b9a" align="right"> {/* Purple color for class */}
                  {fee.class}
                </Typography>
                <Typography variant="body1" color="#8e24aa"> {/* Purple color for text */}
                  Monthly Fee: <span style={{ float: 'right' }}>Rs: {fee.monthlyFee}</span>
                </Typography>
                <Typography variant="body1" color="#8e24aa"> {/* Purple color for text */}
                  Yearly Fee: <span style={{ float: 'right' }}>Rs: {fee.yearlyFee}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeeStructure;

