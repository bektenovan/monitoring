import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, Box, Container } from '@mui/material';
import grad from '../files/wp.jpg'

const Resumes = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/resumes');
      setResumes(response.data);
    } catch (error) {
      console.error('Error fetching resumes', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/resumes/${id}`);
      setResumes(resumes.filter(resume => resume._id !== id));
    } catch (error) {
      console.error('Error deleting resume', error);
    }
  };

  return (
    <Box> <img width="100%" className='img' src={grad} alt='' />
    <Container>
        
    <Box sx={{ padding: '20px'  }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: 'black' }}>
        Резюме студента
      </Typography>
      <Grid container spacing={4}>
        {resumes.map((resume) => (
          <Grid item key={resume._id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={resume.photoUrl}
                alt={resume.fullName}
              />
              <CardContent>
                <Typography variant="h5">{resume.fullName}</Typography>
                <Typography variant="body2" color="textSecondary">Возраст: {resume.age}</Typography>
                <Typography variant="body2" color="textSecondary">Образование: {resume.education}</Typography>
                <Typography variant="body2" color="textSecondary">Год окончания: {resume.graduationYear}</Typography>
                <Typography variant="body2" color="textSecondary">Опыт работы: {resume.experience}</Typography>
                <Typography variant="body2" color="textSecondary">Навыки: {resume.skills}</Typography>
                <Typography variant="body2" color="textSecondary">Хобби: {resume.hobbies}</Typography>
                <Typography variant="body2" color="textSecondary">Контакты: {resume.contacts}</Typography>
                <Typography variant="body2" color="textSecondary">Почта: {resume.email}</Typography>
              </CardContent>
              <CardActions>
s              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    </Box>
  );
};

export default Resumes;
