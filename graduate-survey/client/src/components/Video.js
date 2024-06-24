import React from 'react'
import { Link } from 'react-router-dom'

import natureVideo from "../files/kgtu.mp4"



const Video = () => {
    return (

        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={natureVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Кыргызский государственный университет</h1>
                <p>им. И. Раззаков</p>
                <div>
                    <Link to='/register' className='btn'>Зарегистрироваться</Link>
                    <Link to='/login' className='btn btn-light'>Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default Video