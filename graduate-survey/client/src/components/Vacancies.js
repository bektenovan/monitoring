import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import grad from '../files/wp.jpg'
import { authContext } from '../context/authContext';
const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);

  const { isAdmin } = useContext(authContext);


  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/vacancies');
      setVacancies(response.data);
    } catch (error) {
      console.error('Error fetching vacancies', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/vacancies/${id}`);
      setVacancies(vacancies.filter(vacancy => vacancy._id !== id));
    } catch (error) {
      console.error('Error deleting vacancy', error);
    }
  };

  return (
    <Box><img width="100%" className='img' src={grad} alt='' />

    <Container>
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: 'black' }}>
        Вакансии
      </Typography>
      <Box textAlign="right" mb={2}>
        <Button variant="contained" color="primary"  sx={{ height: '56px', fontSize: '16px' }} component={Link} to="/submit-vacancy">
          Опубликовать вакансию
        </Button>
      </Box>
      <Grid container spacing={4}>
        {vacancies.map((vacancy) => (
          <Grid item key={vacancy._id} xs={12} sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
         
                image={vacancy.companyLogoUrl}
                alt={vacancy.companyName}
              />
              <CardContent>
                <Typography variant="h5">{vacancy.companyName}</Typography>
                <Typography variant="body2" color="textSecondary">Вакансия: {vacancy.position}</Typography>
                <Typography variant="body2" color="textSecondary">Требуемые условия: {vacancy.requirements}</Typography>
                <Typography variant="body2" color="textSecondary">Задачи: {vacancy.responsibilities}</Typography>
                <Typography variant="body2" color="textSecondary">Зарплата: {vacancy.salary}</Typography>
                <Typography variant="body2" color="textSecondary">Контакты: {vacancy.contacts}</Typography>
                <Typography variant="body2" color="textSecondary">Почта: {vacancy.email}</Typography>
              </CardContent>
              <CardActions>
               {isAdmin ? ( <Button size="small" color="secondary" onClick={() => handleDelete(vacancy._id)}>Удалить</Button>): null}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
    </Box>
  );
};

export default Vacancies;
