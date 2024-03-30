
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Grid, Typography, Paper } from '@mui/material';
import AppBarSample from './AppBarSample';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

 const initialValues={
    name:'',
    emai:'',
    password:''

 }

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:3008/register', values)
      .then((result) => {
        console.log(result);
        if (result.status === 200) { 
          navigate('/'); 
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setSubmitting(false));
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <AppBarSample />
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, isSubmitting, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={errors.name}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={errors.password}
                />
                <Button variant="contained" type="submit" color="primary" fullWidth style={{ marginTop: 20 }} disabled={isSubmitting}>
                  Register
                </Button>
              </form>
            )}
          </Formik>
          <Typography variant="body2" gutterBottom style={{ marginTop: 10 }}>
            Already have an account? <Link to="/">Login</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signup;
