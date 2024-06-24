import React from 'react';
import AboutImage from "./AboutImage"
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div >
      <section className="page-section" id="services">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h2 style={{ color: "deepskyblue" }} className="section-heading">КГТУ</h2>
                            <h3 className="section-subheading">Государственное высшее учебное заведение 4-й степени аккредитации.</h3>
                        </div>
                    </div>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <img width="100px" className='round' src='https://e7.pngegg.com/pngimages/909/524/png-clipart-hierarchical-organization-organizational-structure-computer-icons-organizational-chart-business-people-business.png' alt='Структура' />
                            <h4 className="service-heading">Структура</h4>
                            <p className="text">В составе КГТУ 14 <br/> структурных <br/> подразделений</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <img width="100px" className='round' src='https://cdn-icons-png.flaticon.com/512/6020/6020338.png' alt='Профессора' />
                            <h4 className="service-heading">Профессора</h4>
                            <p className="text">Около 1000 человек <br/> профессорско-преподавательского  <br/> состава</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <img width="100px" className='round' src='https://cdn-icons-png.flaticon.com/512/12251/12251590.png' alt='Корпусы' />
                            <h4 className="service-heading">Корпусы</h4>
                            <p className="text">КГТУ это 14 учебных корпусов</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----- */}

            <div className='signup'>
                <div className='container'>

                    <div className='right'>
                        <img className='sec' width="500px" src="https://ecostan.kg/uploads/posts/2022-09/1663402186_p9160170.jpg" alt='' />
                    </div>


                    <div className='left' >
                        <h2 className='text-dark'>Международное сотрудничество</h2>
                        <p className='text-dark'>Кыргызский государственный технический университет имени И. Раззакова большое внимание уделяет установлению всесторонних связей с различными образовательными, научными и культурными учреждениями стран ближнего и дальнего зарубежья. По соглашению с Московским научно-исследовательским ядерным университетом (НИЯУ) «МИФИ» каф. ПОКС с 2016 г. </p>
                        <div className='input-container'>
                            <Link to="/register">   <button className='btn-dark'>Подробнее</button></Link>

                        </div>
                    </div>

                </div>
            </div>

            <div className='signup'  >
                <div className='container' >
                    

                    <div className='right' >
                        <img  width="500px" src="https://kstu.kg/fileadmin/user_upload/whatsapp_image_2023-01-18_at_15.13.37.jpeg" alt='' />
                    </div>


                    <div className='left'>
                        <h2 className='text-dark'> Инфраструктура университета</h2>
                        <p className='text-dark'> КГТУ это 14 учебных корпусов, 50 компьютерных классов, библиотечно-информационный центр, социальные зоны и помещения, cпортивные и кампусные удобства, кафетерии и столовые , общежития, медицинские обслуживания и оборудования кампуса, студенческие клубы и общества .</p>
                        <div className='input-container'>
                            <Link to="/register">   <button className='btn-dark'>Подробнее</button></Link>

                        </div>
                    </div>

                </div>
            </div>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                <AboutImage />
            </Box>

        </div >

    );
};

export default HomePage;