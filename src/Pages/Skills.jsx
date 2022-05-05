import React from 'react'
import Navbar from '../Components/Navbar'


import Talk_Icon from '../Images/talk_Icon.jpg'
import Camera_Icon from '../Images/camera_Icon.jpg'
import Pencil_Icon from '../Images/pencil_Icon2.jpg'

import arrow from '../Images/arrow.svg'
import '../CSS_File/Skill.css'


import Java_Icon from '../Technical_Icon/Java_Icon.png'
import C_Plus_Icon from '../Technical_Icon/C_Plus_Icon.png'
import C_Icon from '../Technical_Icon/C_Icon.png'
import Python_Icon from '../Technical_Icon/Python_Icon.png'
import Html_Icon from '../Technical_Icon/Html_Icon.png'
import Css_Icon from '../Technical_Icon/Css_Icon.png'
import JavaScript_Icon from '../Technical_Icon/JavaScript_Icon.jpg'
import Node_Icon from '../Technical_Icon/Node_JS_Icon.png'
import React_Icon from '../Technical_Icon/React_Icon.png'
import Bootstrap_Icon from '../Technical_Icon/Bootstrap_Icon.png'
import Tailwind_Icon from '../Technical_Icon/Tailwind_Icon.png'
import Git_Icon from '../Technical_Icon/Git_Icon.png'
import Github_Icon from '../Technical_Icon/Github_Icon.png'


function Skills() {
    return (
        <div>
            <Navbar />
            <div className=''>
                <div class="services" id="services">
                    <h1 className='text-7xl text-center' style={{ fontFamily: 'Lobster' }}>Interpersonal Skills</h1>
                    <div class="services__wrapper">
                        <div class="services__card shadow">
                            <img src={Camera_Icon} className='h-28 w-28 ml-24' alt='' />
                            <h2 className='text-2xl text text-gray-600'>Photography</h2>
                            <p className='font-serif text-gray-600 pl-2 pr-2'>I also like to take beautiful photos. You can check my Photography in gallery section.</p>
                        </div>
                        <div class="services__card shadow">
                            <img src={Talk_Icon} className='h-28 w-32 ml-24' alt='' />
                            <h2 className='text-2xl text text-gray-600'>Communication</h2>
                            <p className='font-serif text-gray-600 pl-2 pr-2'>I also like to talk new people and make new friends.</p>
                        </div>
                        <div class="services__card shadow">
                            <img src={Pencil_Icon} className='h-24 w-24 ml-24 mb-2' alt='' />
                            <h2 className='text-2xl text text-gray-600'>Drawing</h2>
                            <p className='font-serif text-gray-600 pl-2 pr-2'>Drawing is my hobbie. You can check my drawing in gallery section.</p>
                        </div>
                        <div class="services__card shadow">
                            {/* <img src={Node_Icon} className='h-24 w-32 ml-20' alt='' /> */}
                            <h2 className='text-2xl text text-gray-600'>Coming Soon..</h2>
                            <p className='font-serif text-gray-600'>AI Powered technology</p>
                        </div>
                    </div>
                </div>
            </div>


            <hr className='h-4 mr-28 ml-28' />


            <div class="services" id="services">
                <h1 className='text-7xl text-center' style={{ fontFamily: 'Lobster' }}>Technical Skills</h1>
                <div class="services__wrapper">
                    <div class="services__card shadow">
                        <img src={Java_Icon} className='h-28 w-28 ml-24' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Java</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>
                            Java is my first technical language that can I know in the Youtubu. I cover up to oops concept and the util package.
                        </p>
                    </div>
                    <div class="services__card shadow">
                        <img src={C_Plus_Icon} className='h-28 w-24 ml-24 mt-2' alt='' />
                        <h2 className='text-2xl text text-gray-600'>C++</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>C++ is the third technical language that can I know in the Youtubu. I cover up to oops concept and a little bit of std library.</p>
                    </div>
                    <div class="services__card shadow">
                        <img src={C_Icon} className='h-24 w-24 ml-24 mb-2' alt='' />
                        <h2 className='text-2xl text text-gray-600'>C</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>C is the second technical language that can I know in the college semester. I will cover up to the structure.</p>
                    </div>
                    <div class="services__card shadow">
                        <img src={Python_Icon} className='h-24 w-24 ml-24 mt-4' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Python</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>Python is the fourth technical language that can I know in the college semester. I will cover up to the normal basic things.</p>
                    </div>
                </div>
            </div>


            <hr className='h-4 mr-28 ml-28' />


            <div class="services" id="services">
                <h1 className='text-7xl text-center' style={{ fontFamily: 'Lobster' }}>Web Fields</h1>
                <div class="services__wrapper">
                    <div class="services__card shadow">
                        <img src={Html_Icon} className='h-28 w-28 ml-24' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Html</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I have 1 year of experience in Html. I can make many demo projects to learn this.</p>
                    </div>
                    <div class="services__card shadow">
                        <img src={Css_Icon} className='h-28 w-24 ml-28' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Css</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I have 1 year of experience in CSS. I can use this in every demo project to learn this.</p>
                    </div>
                    <div class="services__card shadow">
                        <img src={JavaScript_Icon} className='h-32 w-28 ml-24' alt='' />
                        <h2 className='text-2xl text text-gray-600'>JavaScript</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I have 1 year of experience in JavaScript. I can use this in every demo project to learn this.</p>
                    </div>
                    <div class="services__card shadow">
                        {/* <img src={Node_Icon} className='h-24 w-32 ml-20' alt='' /> */}
                        <h2 className='text-2xl text text-gray-600'>Coming Soon..</h2>
                        <p className='font-serif text-gray-600'>AI Powered technology</p>
                    </div>
                </div>
            </div>

            <hr className='h-4 mr-28 ml-28' />


            <div class="services" id="services">
                <h1 className='text-7xl text-center' style={{ fontFamily: 'Lobster' }}>Frameworks</h1>
                <div class="services__wrapper">
                    <div class="services__card shadow">
                        <img src={React_Icon} className='h-28 w-28 ml-24' alt='' />
                        <h2 className='text-2xl text text-gray-600'>React Js</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I have half a year of experience in React. Using this I make my first live project.</p>
                    </div>
                    <div class="services__card shadow">
                        <img src={Bootstrap_Icon} className='h-24 w-28 ml-24' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Bootstrap</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I have 1 year of experience in Bootstrap. I also use this in my first live project.</p>
                    </div>
                    <div class="services__card shadow">
                        <img src={Tailwind_Icon} className='h-24 w-24 ml-24 mt-4 rounded-full' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Tailwind Css</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I half a year of experience in Tailwind Css. I also use this in my first live project.</p>
                    </div>
                    <div class="services__card shadow">
                        <img src={Node_Icon} className='h-24 w-36 ml-20' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Node Js</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I half a year of experience in Node Js.</p>
                    </div>
                </div>
            </div>


            <hr className='h-4 mr-28 ml-28' />


            <div class="services" id="services">
                <h1 className='text-7xl text-center' style={{ fontFamily: 'Lobster' }}>Tools</h1>
                <div class="services__wrapper">
                    <div class="services__card shadow">
                        <img src={Git_Icon} className='h-28 w-28 ml-24' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Git</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I knew some basic things and how it was used.</p>
                    </div>
                    <div class="services__card shadow">
                        <img src={Github_Icon} className='h-24 w-24 ml-24 mb-3' alt='' />
                        <h2 className='text-2xl text text-gray-600'>Github</h2>
                        <p className='font-serif text-gray-600 pl-2 pr-2'>I know some basic things and how it was used for open source and development purposes.</p>
                    </div>
                    <div class="services__card shadow">
                        {/* <img src={Node_Icon} className='h-24 w-32 ml-20' alt='' /> */}
                        <h2 className='text-2xl text text-gray-600'>Coming Soon..</h2>
                        <p className='font-serif text-gray-600'>AI Powered technology</p>
                    </div>
                    <div class="services__card shadow">
                        {/* <img src={Node_Icon} className='h-24 w-32 ml-20' alt='' /> */}
                        <h2 className='text-2xl text text-gray-600'>Coming Soon..</h2>
                        <p className='font-serif text-gray-600'>AI Powered technology</p>
                    </div>
                </div>
            </div>


            <div className='content-end'>
                <a href="#Top" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to home" className='animate-bounce mr-8 mb-4' style={{ float: 'right' }}>
                    <img src={arrow} alt='' className='justify-items-end w-10' />
                </a>
            </div>

        </div>
    )
}

export default Skills