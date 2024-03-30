import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Grid, Typography, Paper } from '@mui/material';
import AppBarSample from './AppBarSample';
import Header from '../components/Header';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:3008/login', values)
      .then((result) => {
        console.log(result);
        if (result.data === 'success') {
          navigate('/home');
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
            Login
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="email"
                  name="email"
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={errors.password}
                />
                <Button variant="contained" type="submit" color="primary" fullWidth style={{ marginTop: 20 }} disabled={isSubmitting}>
                  Login
                </Button>
              </form>
            )}
          </Formik>
          <Typography variant="body2" gutterBottom style={{ marginTop: 10 }}>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
