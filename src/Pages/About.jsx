import React from 'react'
import Navbar from '../Components/Navbar'
import Slick from '../Components/Slick'
import pic_1 from '../Images/pic_1.jpg'
import '../CSS_File/About.css'

import travel1 from '../Images/Travel2.jpg'
import travel2 from '../Images/Travel3.jpg'
import travel3 from '../Images/Travel4.jpg'

import arrow from '../Images/arrow.svg'
import Education from './Education'


function About() {
    return (
        <div className='font-serif'>
            <Navbar />

            <div className='mt-6' id='about'>
                <section className="text-black body-font font-serif">
                    <div className="container flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-4 ml-0 md:ml-20 new">
                            <img className="object-cover object-center rounded-2xl" alt="hero" src={pic_1} style={{ height: 'auto', width: '100%' }} />
                            <div className='overlay'>
                                <div className='text-center content'>
                                    <h4 className='text-white md:text-2xl' style={{ fontFamily: 'Sofia' }}>Yes, it's me😎😎</h4>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-7xl mb-2 text-3xl uppercase text-black mx-auto">About <span className='text-red-600'>me</span></h1>
                            <h2 className='text-black text-2xl mb-2 mx-auto'>Front End Developer</h2>
                            <p className='text-lg mx-auto' style={{ fontFamily: 'Sofia' }}>Hey check the below box,<br />Know more about me then click the 'check below' button.</p>
                            <div className="flex mx-auto">
                                <a href='#goals'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-white border-2 text-black border-rose-600 rounded-full text-lg hover:shadow-md hover:shadow-red-700">Check below</button>
                                </a>
                            </div>

                            <div className="mx-auto mt-4 rounded-lg">
                                <table className="w-100 table table-striped table-hover rounded-xl overflow-hidden shadow-2xl border-4 m-0">
                                    <tbody className='justify-start'>
                                        <tr className=''>
                                            <th scope="row" className="ps-3">First name</th>
                                            <td>Subham</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row" className="ps-3">Last name</th>
                                            <td>Bhattacharjee</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row" className="ps-3">DOB</th>
                                            <td>03 April, 2003</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row" className="ps-3">Occupation</th>
                                            <td colSpan="2">Student</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row" className="ps-3">Languages</th>
                                            <td>Bengali, Hindi, English</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row" className="ps-3">Nationality</th>
                                            <td colSpan="2">Indian</td>
                                        </tr>
                                        <tr className=''>
                                            <th scope="row" className="ps-3">Hobbies</th>
                                            <td colSpan="2">Exploring, Coding, Drawing, Listening Music</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <hr className='h-4 mr-28 ml-28' />

            <Education/>

            <hr className='h-4 mr-28 ml-28' />

            <div className='mt-8' id='goals'>
                <h1 className='title-font text-7xl uppercase text-center'>My<span className='text-purple-600'> Goa</span>ls</h1>
                <div className=''>
                    <p className='text-2xl text-center mt-6' style={{ fontFamily: 'Sofia' }}>Explore the World😌</p>
                    <section className="text-gray-600 body-font font-serif">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                                <a href="/skills" className="relative">
                                    <div className="flex flex-wrap content-center new">
                                        <img src={travel1} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="" />
                                        <div className='overlay'>
                                            <div className='text-center content'>
                                                <h4 className='text-white md:text-2xl' style={{ fontFamily: 'Sofia' }}>Goals</h4>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                                <a href="/skills" className="relative">
                                    <div className="flex flex-wrap content-center new">
                                        <img src={travel2} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="" />
                                        <div className='overlay'>
                                            <div className='text-center content'>
                                                <h4 className='text-white md:text-2xl' style={{ fontFamily: 'Sofia' }}>Goals</h4>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                                <a href="/skills" className="relative">
                                    <div className="flex flex-wrap content-center new">
                                        <img src={travel3} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="" />
                                        <div className='overlay'>
                                            <div className='text-center content'>
                                                <h4 className='text-white md:text-2xl' style={{ fontFamily: 'Sofia' }}>Goals</h4>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <hr className='h-4 mr-28 ml-28' />

            <Slick />

            <hr className='h-4 mr-28 ml-28 mt-8' />


            <div className='mt-10 mb-10'>
                <h1 className='title-font text-6xl uppercase text-center'>Fav<span className="text-orange-500">ourite Mo</span>vies</h1>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                            <a href="/skills" className="relative">
                                <div className="flex flex-wrap content-center">
                                    <iframe src="https://www.youtube.com/embed/tsxemFX0a7k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ height: '300px', width: '100%' }} />
                                </div>
                            </a>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                            <a href="/skills" className="relative">
                                <div className="flex flex-wrap content-center">
                                    <iframe src="https://www.youtube.com/embed/TrxUsaLWFVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ height: '300px', width: '100%' }} />
                                </div>
                            </a>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                            <a href="/skills" className="relative">
                                <div className="flex flex-wrap content-center">
                                    <iframe src="https://www.youtube.com/embed/x60tMH7Pz9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ height: '300px', width: '100%' }}></iframe>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>



            <hr className='h-4 mr-28 ml-28' />



            <div className='mt-10 mb-10'>
                <h1 className='title-font text-6xl uppercase text-center'>Fav<span className='text-orange-500'>ourit</span>e Webseries</h1>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                            <a href="/skills" className="relative">
                                <div className="flex flex-wrap content-center">
                                    <iframe src="https://www.youtube.com/embed/ouyrvRJ6-3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ height: '300px', width: '100%' }} />
                                </div>
                            </a>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                            <a href="/skills" className="relative">
                                <div className="flex flex-wrap content-center">
                                    <iframe src="https://www.youtube.com/embed/wwdJSvRl1ro" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ height: '300px', width: '100%' }} />
                                </div>
                            </a>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 m-2">
                            <a href="/skills" className="relative">
                                <div className="flex flex-wrap content-center">
                                    <iframe src="https://www.youtube.com/embed/2J2yXSLgKko" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ height: '300px', width: '100%' }} />
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>


            <hr className='h-4 mr-28 ml-28' />


            <div className='content-end'>
                <a href="#about" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to home" className='animate-bounce mr-8 mb-4' style={{ float: 'right' }}>
                    <img src={arrow} alt='' className='justify-items-end w-10' />
                </a>
            </div>

        </div>
    )
}

export default About