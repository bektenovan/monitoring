// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Typography, Button, Box } from '@mui/material';
// import { saveAs } from 'file-saver';
// import * as XLSX from 'xlsx';
// import { Bar, Pie } from 'react-chartjs-2';
// import 'chart.js/auto'; // You need to import 'chart.js' to work with 'react-chartjs-2'

// function SurveyData() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/surveys')
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDownload = () => {
//         const worksheet = XLSX.utils.json_to_sheet(data);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Data");
//         const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//         const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
//         saveAs(dataBlob, 'survey_data.xlsx');
//     };

//     const employedCount = data.filter(s => s.isEmployed === 'yes').length;
//     const employedBySpecialityCount = data.filter(s => s.isEmployedBySpeciality === 'yes').length;
//     const notEmployedBySpecialityCount = data.filter(s => s.isEmployed === 'yes' && s.isEmployedBySpeciality === 'no').length;

//     const barData = {
//         labels: ['Total', 'Employed', 'Employed by Speciality', 'Employed not by Speciality'],
//         datasets: [
//             {
//                 label: 'Survey Results',
//                 data: [data.length, employedCount, employedBySpecialityCount, notEmployedBySpecialityCount],
//                 backgroundColor: [
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(255, 99, 132, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(255, 99, 132, 1)'
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const pieData = {
//         labels: ['Employed', 'Employed by Speciality', 'Employed not by Speciality'],
//         datasets: [
//             {
//                 data: [employedCount, employedBySpecialityCount, notEmployedBySpecialityCount],
//                 backgroundColor: [
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(255, 99, 132, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(255, 99, 132, 1)'
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <Box>
//             <Typography variant="h4">Результаты опроса</Typography>
//             <Typography variant="body1">Количество пройденных: {data.length}</Typography>
//             <Typography variant="body1">Трудоустроены: {employedCount}</Typography>
//             <Typography variant="body1">Трудоустроены по профессии: {employedBySpecialityCount}</Typography>
//             <Typography variant="body1">Трудоустроены не по профессии: {notEmployedBySpecialityCount}</Typography>
//             <Box sx={{ width: '600px', marginTop: '20px' }}>
//                 <Bar data={barData} options={{ maintainAspectRatio: false }} />
//             </Box>
//             <Box sx={{ width: '400px', marginTop: '20px' }}>
//                 <Pie data={pieData} options={{ maintainAspectRatio: false }} />
//             </Box>
//             <Button variant="contained" color="primary" onClick={handleDownload} style={{ marginTop: '20px' }}>Скачать в Excel</Button>
//         </Box>
//     );
// }

// export default SurveyData;
import React, { useState, useEffect , useContext} from 'react';
import axios from 'axios';
import { Typography, Button, Box, Paper, Grid } from '@mui/material';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import grad from '../files/wp.jpg'
import { authContext } from '../context/authContext';

function SurveyData() {
    const [data, setData] = useState([]);

    const { isAdmin } = useContext(authContext);


    useEffect(() => {
        axios.get('http://localhost:5000/api/surveys')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Data");
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(dataBlob, 'survey_data.xlsx');
    };

    const employedCount = data.filter(s => s.isEmployed === 'yes').length;
    const employedBySpecialityCount = data.filter(s => s.isEmployedBySpeciality === 'yes').length;
    const notEmployedBySpecialityCount = data.filter(s => s.isEmployed === 'yes' && s.isEmployedBySpeciality === 'no').length;

    const barData = {
        labels: ['Количество', 'Трудоустроены', 'Трудоустроены по професии', 'Трудоустроены не по професии'],
        datasets: [
            {
                label: 'Survey Results',
                data: [data.length, employedCount, employedBySpecialityCount, notEmployedBySpecialityCount],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: ['Трудоустроены', 'Трудоустроены по професии', 'Трудоустроены не по професии'],
        datasets: [
            {
                data: [employedCount, employedBySpecialityCount, notEmployedBySpecialityCount],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Box >

<img width="100%" className='img' src={grad} alt='' />
           <Box display="flex" justifyContent="space-around" mb={3}> 
            <Box><Typography variant="h4" gutterBottom  sx={{ color: 'black' }}>
                Результаты опроса
            </Typography>
            <Typography variant="h6" >
                Общее количество: {data.length}
            </Typography>
            <Typography variant="h6" >
                Трудоустроены: {employedCount}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Трудоустроены по профессии: {employedBySpecialityCount}
            </Typography>
            </Box>
            

            <Box textAlign="center" mt={3}>
              {isAdmin ?( <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white' , height:"90px" }} onClick={handleDownload}>
                    Скачать в Excel
                </Button>) : null}
                
            </Box>
            </Box>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ padding: '20px', height: '700px' }}>
                        <Typography variant="h6" gutterBottom align="center">
                            Bar Chart
                        </Typography>
                        <Box sx={{ height: '600px' }}>
                            <Bar data={barData} options={{ maintainAspectRatio: false }} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ padding: '20px', height: '700px' }}>
                        <Typography variant="h6" gutterBottom align="center">
                            Pie Chart
                        </Typography>
                        <Box sx={{ height: '600px' }}>
                            <Pie data={pieData} options={{ maintainAspectRatio: false }} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            
        </Box>
    );
}

export default SurveyData;

