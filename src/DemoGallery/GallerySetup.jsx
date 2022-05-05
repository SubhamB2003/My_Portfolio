import React from 'react'
import pic_1 from '../ImageGallery/Gallery1/pic_0.jpg'
import pic_2 from '../ImageGallery/Gallery2/pic_18.jpeg'
import pic_3 from '../ImageGallery/Gallery3/pic_3.jpg'
import pic_4 from '../ImageGallery/Gallery4/pic_0.jpg'
import pic_5 from '../ImageGallery/Tour/pic_0.jpg'

import '../CSS_File/Gallery.css'

import arrow from '../Images/arrow.svg'

import { Link } from 'react-router-dom'


function GallerySetup() {

    return (
        <div className=''>
            <div className="container-fluid mt-32 mb-4">
                <h1 className='uppercase text-6xl font-bold text-amber-500 text-center mb-10' style={{ fontFamily: 'Lobster' }}>Welcome to my Gallery</h1>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_1} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif font-bold uppercase'>My Photos</h5>
                                <Link to='/gallery1'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_4} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif text-bold'>Photography Album</h5>
                                <Link to='/gallery3'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_3} className="d-block w-100" style={{ width: "100%", height: '320px' }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif text-bold'>Family Album</h5>
                                <Link to='/gallery2'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_2} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif text-bold'>Friends Album</h5>
                                <Link to='/gallery4'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_5} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif text-bold'>Tour Album</h5>
                                <h5 className='mb-2 text-2xl font-serif text-bold'>Coming soon..</h5>
                                {/* <Link to='/gallery5'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_1} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon..</h5>
                                <Link to='/gallery6'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_2} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif text-bold'>First slide label</h5>
                                <Link to='/gallery4'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_3} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif text-bold'>First slide label</h5>
                                <Link to='/gallery4'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="carousel-item active shadow-none">
                            <img src={pic_4} className="d-block w-100" style={{ width: "100%" }} alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-2 text-2xl font-serif text-bold'>First slide label</h5>
                                <Link to='/gallery4'>
                                    <button className="mt-3 flex mx-auto font-serif py-2 px-8 bg-transparent border-2 text-white border-blue-600 rounded-full text-lg hover:shadow-md hover:shadow-blue-700">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='content-end'>
                    <a href="#top" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to home" className='animate-bounce mr-8 mb-4' style={{ float: 'right' }}>
                        <img src={arrow} alt='' className='justify-items-end w-10' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GallerySetup