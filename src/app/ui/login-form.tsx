'use client'
import React from 'react';


import { Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Paper, Box, Grid, Typography, makeStyles, useTheme, Theme, Container } from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = (theme: Theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

interface LoginFormProps {
  loginEndpoint: string;
}

export default function LoginForm(props: LoginFormProps) {
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const router = useRouter()
  const theme = useTheme()
  const classes = useStyles(theme);

  return (
    <Grid container component="main" sx={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} sx={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Container sx={classes.paper}>
          <Avatar sx={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <form onSubmit={handleSubmit(async (data, ) => {
      console.log(data)
      
      const formData = new FormData(); 

      formData.append('email', data.email);
      formData.append('password', data.password);
      const res = await fetch(props.loginEndpoint , {
        method: 'POST',
        credentials:'include',
        body: formData
      }) 
      if(!res.ok) {
        console.log(res)
        throw new Error('Failed to fetch data')
      }
      if(props.loginEndpoint.includes('admin')){
    
      router.replace('/admin-dashboard')
      }
      if(props.loginEndpoint.includes('user')){
  
      router.replace('/bids')
      }
      if(props.loginEndpoint.includes('department')){
        console.log('hey dept')
      router.replace('/department-dashboard')
      }
    })}  className="w-full mt-1" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              {...register('email', {required: true})}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
           
              {...register('password', {required: true})}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
          className='bg-blue-500'
              sx={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </Container>
      </Grid>
    </Grid>
  );
}
