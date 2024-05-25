'use client'
import React from 'react';
import { useState } from 'react';
import { 
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({defaultValues:{
    email:"",
    password:"",
    confirmPassword:"",
    firstName:"",
    lastName:"",
    country:""
  }});
  const router = useRouter();
  const theme = useTheme();
  const [passwordError, setPasswordError] = useState('');

  const handleRegistration = async (data:any) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    const res = await fetch(`http://localhost:1323/user/signup`, {
      method: 'POST',
    
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }) 
    console.log(res)
    if(!res.ok) {
      console.log(res)
      throw new Error('Failed to fetch data')
    }
    // toast.success("success")


    router.push('/');
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} sx={{ backgroundImage: 'url(https://source.unsplash.com/random)', backgroundRepeat: 'no-repeat', backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900], backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Supplier Registration
            </Typography>
            <Box component="form" onSubmit={handleSubmit(handleRegistration)} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('firstName', { required: true })}
                    autoComplete="fname"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register('lastName', { required: true })}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
               
                <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
       
          labelId="demo-simple-select-label"
          id="demo-simple-select"
       
          {...register('country', { required: true })}
          label="country"
      sx={{width:'100%'}}
        >
          <MenuItem value={"ethiopia"}>Ethiopia</MenuItem>
         
        </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('email', { required: true })}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('password', { required: true })}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('confirmPassword', { required: true })}
                    error={!!passwordError}
                    helperText={passwordError}
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className='bg-blue-500'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default RegistrationForm;
