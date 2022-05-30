import React from 'react'
import Navbar from '../Components/Navbar'
import project_1 from '../Images/IMG-20211004-WA0044.jpg'
import github from '../Technical_Icon/Github_Icon.png'
import netlify from '../Technical_Icon/netlify.jfif'
import Qr from '../Technical_Icon/pic_1.jpg'

function Project() {
    return (
        <div>
            <Navbar />

            <div class="services" id="services">
                <h1 className='text-7xl text-center' style={{ fontFamily: 'Lobster' }}>My Projects</h1>
                <div class="services__wrapper">
                    <div class="services__card shadow">
                        <img src={project_1} className='h-32 w-32 ml-20 rounded-full mt-6' alt='' />
                        <h2 className='text-2xl text text-gray-600'>My Porfolio</h2>
                        <p className='font-serif text-gray-600'>It was a porfolio website</p>
                        <div className='container flex space-x-5 justify-center'>
                            <a href='https://my-portfolio-site07.netlify.app' rel="noopener noreferrer" target="_blank">
                                <img src={netlify} className='h-12 w-12 rounded-full mt-2' alt='' />
                            </a>
                            <a href='https://github.com/SubhamB2003/My_Portfolio' rel="noopener noreferrer" target="_blank">
                                <img src={github} className='h-10 w-10 rounded-full mt-2' alt='' />
                            </a>
                        </div>
                    </div>

                    <div class="services__card shadow container">
                        <img src={Qr} className='h-32 w-32 ml-20 mt-6' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Chrome Extension</h2>
                        <p className='font-serif text-gray-600'>It was generate your current tab url to QR Code</p>
                        <div className='container flex space-x-5 justify-center'>
                            <a href='https://sb-qrcode-genarator.netlify.app' rel="noopener noreferrer" target="_blank">
                                <img src={netlify} className='h-12 w-12 rounded-full mt-2' alt='' />
                            </a>
                            <a href='https://github.com/SubhamB2003/Tab_Url_QR_Code_Generator' rel="noopener noreferrer" target="_blank">
                                <img src={github} className='h-10 w-10 rounded-full mt-2' alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project