import React from 'react'
import Navbar from '../Components/Navbar'

import img1 from '../Images/School_1.png'
import img2 from '../Images/School_2.jpg'
import img3 from '../Images/School_3.jpg'

import arrow from '../Images/arrow.svg'


function Education() {
    return (
        <div>
            <Navbar />

            <div className=''>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-6 ml-0 md:ml-20">
                            <img className="object-cover object-center rounded mx-auto bg-transparent" alt="hero" src={img1} style={{ height: 'auto', width: '100%' }} />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
                            <h1 className="title-font sm:text-7xl mb-4 font-bold text-3xl text-green-600">Primary School</h1>
                            <span className='text-green-600 text-2xl'>(STD 1 to STD 4) [2008 - 2011]</span>
                            <h2 className='text-slate-500 sm:text-3xl text-xl mr-2 mb-2 mt-2'>Kolora Horimohon Primary School</h2>
                            <p className='text-gray-500 text-lg' style={{ fontFamily: 'Sofia' }}>I was only five years old when my parents admitted me in my school. From here I was starting my school journey. Still now I can remember the first day, it was totally amazing. I made many friends at first, they were so cute and preety at all. I studied from STD 1 to STD 4. I had about 50 classmates in our class. I still miss those days which I spend around the play ground to classrooms.</p>
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
                            <h1 className="title-font sm:text-7xl mb-4 font-bold text-3xl justify-center text-yellow-500">High School</h1>
                            <span className='text-yellow-500 text-2xl'> (Class 5 to H.S) [2012 - 2020]</span>
                            <h2 className='text-slate-500 sm:text-3xl text-xl mr-2 mb-2 mt-2'>Somra Durga Charan High School</h2>
                            <p className='text-gray-500 text-lg items-center' style={{ fontFamily: 'Sofia' }}>After passing the primary school i was going to the high school. I studied there from class 5 to Higher secondary examination. I wanna talk about it but I can't, cause I can't describe it's beautiful memories through some words. Those days are golden days to me. I was just like a floating leaf which floated through the school memories. I had much more friends, there was an emotion around them. In the end, I will say that the moments we spent in those days are the happiness of heaven.</p>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-4">
                            <img className="object-cover object-center rounded sm:ml-15 md:ml-5 ml-0 bg-transparent" alt="hero" src={img2} style={{ height: 'auto', width: '100%' }} />
                        </div>
                    </div>
                </section>
            </div>

            <hr className='h-4 mr-28 ml-28' />


            <div className=''>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-0 md:ml-20 ">
                            <img className="object-cover object-center rounded mx-auto bg-transparent" alt="hero" src={img3} style={{ height: 'auto', width: '100%' }} />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
                            <h1 className="title-font sm:text-7xl mb-4 font-bold text-3xl text-orange-600">College</h1>
                            <span className='text-orange-600 text-2xl'> (B-Tech CSE) [2021 - 2024]</span>
                            <h2 className='text-slate-500 sm:text-3xl text-xl mr-2 mb-2 mt-2'>Supreme Knowledge Foundation Group of Institutions</h2>
                            <p className='text-gray-500 text-lg' style={{ fontFamily: 'Sofia' }}>“College life” is the best part of our life. I think it was my best decision which I took in my life forever. It is like a platform to know a new me, to discover me, to make up me in my life. After admission i was totally alone and unknown to this place. Here I found new friends, new teachers and mentors, new culture and that would help me growing more. Here I learn lot of things about life and society also which I can't describe in my words. At the end it is true that I found myself in this institution.</p>
                        </div>
                    </div>
                </section>
            </div>


            <hr className='h-4 mr-28 ml-28' />

            <div>

            </div>


            <div className='content-end'>
                <a href="#Top" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to home" className='animate-bounce mr-8 mb-4' style={{ float: 'right' }}>
                    <img src={arrow} alt='' className='justify-items-end w-10' />
                </a>
            </div>

        </div>
    )
}

export default Education