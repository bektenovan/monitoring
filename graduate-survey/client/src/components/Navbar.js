// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// function Navbar() {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           Graduate Survey
//         </Typography>
//         <Button color="inherit" component={Link} to="/">Главная страница</Button>
//         <Button color="inherit" component={Link} to="/survey">Пройти опрос</Button>
//         <Button color="inherit" component={Link} to="/survey-data">Данные опроса</Button>
//         <Button color="inherit" component={Link} to="/submit-resume">Заполнить резюме</Button>
//         <Button color="inherit" component={Link} to="/resumes">Резюме студента</Button>
//         <Button color="inherit" component={Link} to="/vacancies">Вакансии</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavDropdown } from "react-bootstrap"
import { authContext } from '../context/authContext';






const Navbar = () => {
    const { currentUser, logOut } = useContext(authContext);
    // console.log(currentUser);

   



    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= -1) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header header-grey'}>

            <Link to='/'><img src="https://kstu.kg/fileadmin/main_menu/enrollee/logo_kgtu_.png" alt="" width={90} />  </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>На главную</Link>
                </li>
                <li>
                    <Link to='/submit-resume'>Заполнить резюме</Link>
                </li>
                <li>
                    <Link to="/resumes">Резюме студента</Link>
                </li>
                <li>
                    <Link to='/survey'>Пройти опрос</Link>
                </li>
                <li>
                    <Link to='/survey-data'>
                        Данные опроса

                    </Link>
                </li>


                <li>   <Link to="/vacancies">
                    Вакансии
                </Link></li>
<li>

                <Nav>
                   
                        {currentUser ? (
                            <NavDropdown.Item>{currentUser.email}</NavDropdown.Item>) : null}
                        {currentUser ? (
                            <NavDropdown.Item onClick={() => { logOut() }} style={{ color: "white" }}> <br/>LogOut</NavDropdown.Item>) : (<NavDropdown.Item > <Link to='/login' style={{ color: "white" }}>LogIn</Link></NavDropdown.Item>)}
                 
                </Nav>

                </li>
            </ul>


            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)}

            </div>
        </div>
    )
}
export default Navbar;


