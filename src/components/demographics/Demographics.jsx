import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function Demographics() {
  return (
    <div style={{ marginTop: '20px' }}> 
      <div style={{ marginBottom: '20px' }}></div>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="First name"
            variant="outlined"
            fullWidth
            InputProps={{
              style: { fontSize: '1.2rem' }
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Last name"
            variant="outlined"
            fullWidth
            InputProps={{
              style: { fontSize: '1.2rem' }
            }}
          />
      
        </Grid>
      </Grid>
    </div>
  );
}
