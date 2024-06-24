import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: 'white', marginRight: '2rem' }} />
                        <div>
                            <p> Кыргызстан, г.Бишкек, пр.Ч.Айтматова, 66</p>
                            <h4>720044</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />  +996-312-54-51-25</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} /> rector@kstu.kg</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>О нас</h4>
                    <p>"Кыргызский государственный технический университет имени И. Раззакова (КГТУ) — государственное высшее учебное заведение 4-й степени аккредитации. Расположен в г. Бишкек (Киргизия)"</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} ></FaFacebook>
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer