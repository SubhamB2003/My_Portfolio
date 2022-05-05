import React from 'react'
import Navbar from '../Components/Navbar'
import connectUs from '../Images/connect1.png'
import '../CSS_File/About.css'

import mobile from '../Images/phone.svg'
import mail from '../Images/mail.svg'
import facebook from '../Images/facebook.svg'
import instagram from '../Images/instagram.svg'
import github from '../Images/github.svg'
import home from '../Images/house-door.svg'
import city from '../Images/geo-alt.svg'
import state from '../Images/map.svg'
import pincode from '../Images/pin-map.svg'

import arrow from '../Images/arrow.svg'


function Contact() {
    return (
        <div>
            <Navbar />

            {/* Header */}
            <div className='mt-14' id='contact'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57034.05151454024!2d88.37130473851713!3d23.130761952268422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8e8fd0486ea6d%3A0xc105048f6731fe5c!2sSomrabazar!5e0!3m2!1sen!2sin!4v1646455858379!5m2!1sen!2sin" width="100%" height="560" style={{ border: "0" }} allowFullScreen="" loading="lazy" title='..' />
            </div>

            {/*  */}
            <div className='ml-2 mr-2'>
                <section className="text-gray-600 body-font font-serif">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-4 ml-0 md:ml-20 new">
                            <img className="object-cover object-center rounded" alt="hero" src={connectUs} style={{ height: 'auto', width: '100%' }} />
                            <div className='overlay'>
                                <div className='text-center content'>
                                    <h4 className='text-white md:text-2xl' style={{ fontFamily: 'Sofia' }}>Hey Lets Connect</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 p-0 ml-0 md:ml-20">
                            <h2 className="display-3 w-100 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Sofia' }}>Contact</h2>
                            <table className="w-100 table table-striped table-hover overflow-hidden shadow-2xl border-4 m-0 rounded-2xl">
                                <tbody>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex"><img src={mobile} alt='' /><span className='ml-2'>Phone</span></th>
                                        <td><a href="tel:8768646447">8768646447</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex "><img src={mail} alt='' /><span className='ml-2'>Email</span></th>
                                        <td><a href="mailto:subhambhttachariya03@gmail.com">subhambhttachariya03@gmail.com</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex"><img src={facebook} alt='' /><span className='ml-2'>Facebook</span></th>
                                        <td><a href="https://www.facebook.com/subham.bhattachariya.9/" target="_blank" rel="noopener noreferrer">Subham Bhattacharjee</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex"><img src={instagram} alt='' /><span className='ml-2'>Instagram</span></th>
                                        <td><a href="https://www.instagram.com/itz_subham07/" target="_blank" rel="noopener noreferrer">itz_subham007</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex"><img src={github} alt='' /><span className='ml-2'>Github</span></th>
                                        <td><a href="https://github.com/SubhamB2003" target="_blank" rel="noopener noreferrer">SubhamB2003</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex"><img src={home} alt='' /><span className='ml-2'>Address</span></th>
                                        <td>Kolora, Somra Bazar, Hooghly</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex"><img src={city} alt='' /><span className='ml-2'>City</span></th>
                                        <td colspan="2">Hooghly</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex"><img src={state} alt='' /><span className='ml-2'>State</span></th>
                                        <td colspan="2">West Bengal</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="ps-2 text-nowrap flex"><img src={pincode} alt='' /><span className='ml-2'>Pincode</span></th>
                                        <td colspan="2">712123</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>


            <div className='content-end'>
                <a href="#contact" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to home" className='animate-bounce mr-8 mb-4' style={{ float: 'right' }}>
                    <img src={arrow} alt='' className='justify-items-end w-10' />
                </a>
            </div>


        </div>
    )
}

export default Contact