import Plant from '../../assets/plant.png';
import Navigator from "../Navigator/index.js";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function OverviewPage() {
    const percentage = 66;
    const swiper = document.querySelector('.swiper');
    if(swiper){
        console.log(swiper.swiper.activeIndex)
    }
    return (
        <div className="overview-container">
            <Navigator />
            <div className="overview-page">
                <div className="overview-dashboard">

                    <Swiper
                        effect={"coverflow"}
                        grabCursor={false}
                        centeredSlides={true}
                        slidesPerView={"2"}
                        loop={true}
                        spaceBetween={200}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <CircularProgressbarWithChildren value={percentage} >
                                    <ion-icon name="water-outline" />
                                </CircularProgressbarWithChildren >
                                <CircularProgressbarWithChildren
                                    value={25}
                                    styles={buildStyles({
                                        pathColor: `rgba(255, 140, 100, ${percentage / 100})`,
                                    })}
                                >
                                    <ion-icon name="sunny-outline" />
                                </CircularProgressbarWithChildren>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card"></div>
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className="overview-page">
                <div className="box">
                <div className="ground">
                <img className="plant1" src={Plant} />
                <img className="plant2" src={Plant} />
                <img className="plant3" src={Plant} />
                <img className="plant4" src={Plant} />
                </div>
                </div>
                <div className="box">
                <div className="ground">
                <img className="plant1" src={Plant} />
                <img className="plant2" src={Plant} />
                <img className="plant3" src={Plant} />
                <img className="plant4" src={Plant} />
                </div>
                </div>
            </div> */}
                </div>
            </div>
        </div>
    )
}