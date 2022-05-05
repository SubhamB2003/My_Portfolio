import React from 'react'
import Navbar from '../Components/Navbar'
// import hello from '../Images/welcome.svg'
import person2 from '../Images/person2.png'
import educationImg from '../Images/educationImg.jpg'
// import photoGraphy from '../Images/Photo (2).jpg'
import liveProject from '../Images/Live Project.png'
import galleryImg from '../Images/Gallery.jpg'
import connectUs from '../Images/connect4.webp'
import header from '../Images/Header.jpg'
import '../CSS_File/Home.css'


import { Link } from 'react-router-dom'
import Footer from './Footer'



function Home() {
    return (
        <div className='font-serif'>

            {/* Navbar */}
            <Navbar />

            {/* Header */}

            <div className='mt-14' id='home'>
                <div className="row w-100 m-0 p-0 top-bg shadow">
                    <div className="mt-3 col-lg-6 col-md-6 col-sm-12 m-0 p-0 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="display-1 mt-3 mb-0">Hello Folks</h1>
                        <p className="w-75 text-center fs-5 mt-3" style={{ fontFamily: 'Sofia' }}>Hello everyone. A very warm welcome to all of you! It is lovely to have you here!</p>
                        {/* <Link to="/about" className="mt-2 btn flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</Link> */}
                    </div>
                    <div className="mt-3 col-lg-6 col-md-6 col-sm-12 m-0 p-0 d-flex justify-content-around align-items-center">
                        <img src={header} className="top-img" style={{ width: '600px' }} alt='' />
                    </div>
                </div>
            </div>


            {/* Short About */}
            <div className=''>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-20">
                            <img className="object-cover object-center rounded sm:ml-15 md:ml-5 ml-0 bg-transparent" alt="hero" src={person2} style={{ height: 'auto', width: '60%' }} />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
                            <h1 className="title-font sm:text-5xl mb-4 font-bold text-3xl">Hey What's up,</h1>
                            <p className='text-gray-500 text-lg' style={{ fontFamily: 'Sofia' }}>This was my first portfolio website.<br />Know more about me then click the below 'READ MORE' button.</p>
                            <div className="flex">
                                <Link to='/about'>
                                    <button className="mt-3 flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <hr className='h-4 mr-28 ml-28' />

            {/* Short Education */}
            <div>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center justify-center">
                            <h1 className="title-font sm:text-5xl mb-4 font-bold text-3xl justify-center">Hello, Backbenchers,</h1>
                            <p className='text-gray-500 text-lg items-center' style={{ fontFamily: 'Sofia' }}>Sometimes backbenchers also become a more creative. If you went to see my education journey then click the 'READ MORE' button.</p>
                            <div className="flex">
                                <Link to='/education'>
                                    <button className="mt-3 flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff] mb-2">Read more</button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-4">
                            <img className="object-cover object-center rounded sm:ml-15 md:ml-5 ml-0 bg-transparent" alt="hero" src={educationImg} style={{ height: 'auto', width: '80%' }} />
                        </div>
                    </div>
                </section>
            </div>

            <hr className='h-4 mr-28 ml-28' />

            {/* Short Skills */}
            <div className=''>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        {/* <Link to="/skills" className="relative">
                            <div className="flex flex-wrap content-center new">
                                <img src={photoGraphy} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="" />
                                <div className='overlay'>
                                    <div className='text-center content'>
                                        <h4 className='text-white md:text-2xl' style={{ fontFamily: 'Sofia' }}>Photography</h4>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-start ml-6 md:ml-20">
                            <h1 className="title-font sm:text-5xl mb-4 font-bold text-3xl mt-6">Hey Programmer,</h1>
                            <p className='text-gray-500 text-lg' style={{ fontFamily: 'Sofia' }}>Now time to see my Skills.<br />Know more about my 'Skills' then click the below button.</p>
                            <div className="flex">
                                <Link to='/skills'>
                                    <button className="mx-auto mt-3 mb-3 flex font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mr-2 md:mr-32">
                            <Link to="/skills" className="relative">
                                <div className="flex flex-wrap content-center new">
                                    <img src={liveProject} className="mx-auto" style={{ height: 'auto', width: '100%' }} alt="" />
                                    <div className='overlay'>
                                        <div className='text-center content'>
                                            <h4 className='text-white md:text-2xl' style={{ fontFamily: 'Sofia' }}>First Live Project</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <hr className='h-4 mr-28 ml-28' />

            {/* Short Gallery */}
            <div>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <Link to="/Gallery" className="relative mx-auto">
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-4 ml-5 md:ml-20 sm:ml-5 new">
                                <img className="object-cover object-center rounded" alt="hero" src={galleryImg} style={{ height: 'auto', width: '100%' }} />
                                <div className='overlay'>
                                    <div className='text-center content'>
                                        <h4 className='text-white md:text-2xl' style={{ fontFamily: 'Sofia' }}>Wow vi kya din tha🥺🥺</h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center justify-center mt-18">
                            <h1 className="title-font sm:text-5xl mb-4 font-bold text-3xl justify-center my-10">MEMORIES😌❤️</h1>
                            <p className='text-gray-500 text-lg items-center' style={{ fontFamily: 'Sofia' }}>Bring back memories. Click button and lets go.</p>
                            <div className="flex">
                                <Link to='/gallery'>
                                    <button className="mt-3 flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff] mb-2">Read more</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <hr className='h-4 mr-28 ml-28' />

            {/* Contact */}
            <div className=''>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-5xl mb-4 font-bold text-3xl">Wow your coming here,</h1>
                            <p className='text-gray-500 text-lg' style={{ fontFamily: 'Sofia' }}>Well greate let's connect, Click the below button and connect us.</p>
                            <div className="flex">
                                <Link to='/contact'>
                                    <button className="mt-3 flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 mr-10 md:mr-32">
                            <img className="mt-4 object-cover object-center rounded bg-transparent" alt="hero" src={connectUs} style={{ height: 'auto', width: '100%' }} />
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div >
    )
}

export default Home