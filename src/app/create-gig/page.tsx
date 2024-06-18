'use client';
import React, { useState } from 'react';
import { 
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

function CreateGigForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ defaultValues: {
    title: "",
    price: "",
    description: "",
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  }});
  const router = useRouter();
  const theme = useTheme();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState('');

  const handleRegistration = async (data: any) => {
    // Create a FormData object to handle file uploads
    console.log(data)
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('price', data.price);
    formData.append('description', data.description);
    if (data.image1) formData.append('images', data.image1[0]);
    if (data.image2) formData.append('images', data.image2[0]);
    if (data.image3) formData.append('images', data.image3[0]);
    if (data.image4) formData.append('images', data.image4[0]);
   const res = await fetch(`http://localhost:1323/user/create-gig`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    if (!res.ok) {
      setUploadError('Failed to upload data');
      console.log(res);
      throw new Error('Failed to fetch data');
    }
console.log(res)
    router.push('/');
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
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
      
            <Typography component="h1" variant="h5">
              Create Gig
            </Typography>
            <Box component="form" onSubmit={handleSubmit(handleRegistration)} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    {...register('title', { required: true })}
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoComplete="title"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('price', { required: true })}
                    required
                    fullWidth
                    id="price"
                    label="Price"
                    name="price"
                    type="number"
                    autoComplete="price"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('description')}
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                Image 1
                  <input
                    {...register('image1', { required: true })}
                    accept="image/*"
                    type="file"
                    id="image1"
                    name="image1"
                  />
                </Grid>
                <Grid item xs={12}>
                Image 2
                  <input
                    {...register('image2')}
                    accept="image/*"
                    type="file"
                    id="image2"
                    name="image2"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                Image 3
                  <input
                    {...register('image3')}
                    accept="image/*"
                    type="file"
                    id="image3"
                    name="image3"
                  />
                </Grid>
                <Grid item xs={12}>
                    Image 4
                  <input
                    {...register('image4')}
                    accept="image/*"
                    type="file"
                    id="image4"
                    name="image4"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className='bg-blue-500'
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                Create
              </Button>
              {uploadError && (
                <Typography color="error" variant="body2" align="center">
                  {uploadError}
                </Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default CreateGigForm;
