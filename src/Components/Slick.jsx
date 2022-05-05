import React, { Component } from "react";
import Slider from "react-slick";
import '../CSS_File/slick.css'



export default class Slick extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="ml-10 mr-10 mt-14">
                <h2 className="text-bold mb-10 font-serif title-font text-6xl uppercase text-center">Fav<span className="text-amber-400">ourite Mu</span>sics</h2>
                <Slider {...settings}>
                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/A66TYFdz8YA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/tA8h_exda3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/pHUysSiOPSk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/NND2hD3DlTM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/SBWYGGDYmhg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/qi6fOkfdkgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/LLF3GMfNEYU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/Stkx7UrtiBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                    <div className="p-2">
                        <iframe src="https://www.youtube.com/embed/P-DhwN87JDY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ height: '300px', width: '100%' }} />
                    </div>

                </Slider>
            </div>
        );
    }
}