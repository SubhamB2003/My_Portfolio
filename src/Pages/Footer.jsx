import React from 'react'
import arrow from '../Images/arrow-up.svg'


import fb_Icon from '../Technical_Icon/facebook-new.png'
import insta_Icon from '../Technical_Icon/instagram-new.png'
import twitter_Icon from '../Technical_Icon/twitter.png'
import linkedin_Icon from '../Technical_Icon/linkedin.png'



function Footer() {
    return (
        <div>
            <section id="footer">
                <div className="footer container">
                    <h2 className='text-center text-xl'>Thanks for coming up here.</h2>
                    <div className="social-icon justify-center">
                        <div className="social-item">
                            <a href="https://www.facebook.com/subham.bhattachariya.9" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook"><img src={fb_Icon} alt='' /></a>
                        </div>
                        <div className="social-item">
                            <a href="https://www.instagram.com/itz_subham07/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram"><img src={insta_Icon} alt='' /></a>
                        </div>
                        <div className="social-item">
                            <a href="https://twitter.com/SubhamB82338312" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter"><img src={twitter_Icon} alt='' /></a>
                        </div>
                        <div className="social-item">
                            <a href="https://www.linkedin.com/in/subham-bhattacharjee-b39a9a1ba/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Linkedin"><img src={linkedin_Icon} alt='' /></a>
                        </div>
                    </div>
                    <p className='text-center'>Copyright © 2021 ßûbhãm. All rights reserved</p>
                    <div className='content-end mb-10'>
                        <a href="#home" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to home" className='rounded-full bg-white animate-bounce mr-0 md:mr-10' style={{ float: 'right' }}>
                            <img src={arrow} alt='' className='justify-items-end w-10' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer