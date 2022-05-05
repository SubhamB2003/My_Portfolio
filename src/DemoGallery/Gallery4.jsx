import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import pic_1 from '../ImageGallery/Gallery2/pic_1.jpg'
import pic_2 from '../ImageGallery/Gallery2/pic_2.jpg'
import pic_3 from '../ImageGallery/Gallery2/pic_9.jpg'
import pic_4 from '../ImageGallery/Gallery2/pic_4.jpg'
import pic_5 from '../ImageGallery/Gallery2/pic_10.jpg'
import pic_6 from '../ImageGallery/Gallery2/pic_6.jpg'
import pic_7 from '../ImageGallery/Gallery2/pic_7.jpg'
import pic_8 from '../ImageGallery/Gallery2/pic_3.jpg'
import pic_9 from '../ImageGallery/Gallery2/pic_22.jpeg'
import pic_10 from '../ImageGallery/Gallery2/pic_21.jpeg'
import pic_11 from '../ImageGallery/Gallery2/pic_20.jpeg'
import pic_12 from '../ImageGallery/Gallery2/pic_8.jpg'


import arrow from '../Images/arrow.svg'

import { Link } from 'react-router-dom'


function Gallery4() {
    return (
        <div>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className=''>
                        <div className="container-fluid mt-32 mb-4">
                            <h1 className='uppercase text-6xl font-bold text-amber-500 text-center mb-10' style={{ fontFamily: 'Lobster' }}>Friends Photos</h1>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_1} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_2} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_3} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_4} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_5} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_6} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_7} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_8} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_9} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_10} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_11} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-4">
                                    <div className="carousel-item active shadow-none">
                                        <img src={pic_12} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-20 mb-20'>
                                <Link to='/gallery'>
                                    <button className="mx-auto mt-3 mb-3 flex font-serif py-2 px-6 rounded-full text-lg font-bold bg-transparent border-2 text-black hover:shadow-md hover:shadow-blue-700">Back Gallery</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox >

            <div className='content-end'>
                <a href="#top" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to home" className='animate-bounce mr-8 mb-4' style={{ float: 'right' }}>
                    <img src={arrow} alt='' className='justify-items-end w-10' />
                </a>
            </div>
        </div>
    )
}

export default Gallery4