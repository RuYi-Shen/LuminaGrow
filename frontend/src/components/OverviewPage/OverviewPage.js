import Plant from '../../assets/plant.png';
import Sun from '../../assets/sunflower.png';
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
    const humidity = [34, 42.5, 32.6];
    const luminosity = [170, 130, 220];
    const temperature = [21, 18.8, 19.2];
    const swiper = document.querySelector('.swiper');
    if (swiper) {
        console.log(swiper.swiper.activeIndex)
    }
    return (
        <div className="overview-container">
            <Navigator />
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
                            <div className='preview'>
                                CACTUS
                                <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/succulent-02-cactus-a86EEr0-600.jpg" alt="plant" />
                            </div>
                            <div className="data-container">
                                <div className='sensor-data'>
                                    HUMIDITY
                                    <CircularProgressbarWithChildren
                                        value={humidity[0]}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(0, 110, 255, ${0.5 + humidity[0] / 200})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="water-outline" />
                                    </CircularProgressbarWithChildren >
                                    <p>
                                        {humidity[0].toFixed(1)}%
                                    </p>
                                </div>
                                <div className='sensor-data'>
                                    LUMINOSITY
                                    <CircularProgressbarWithChildren
                                        value={luminosity[0]}
                                        maxValue={1000}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(255, 255, 0, ${0.5 + luminosity[0] / 2000})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="sunny-outline" />
                                    </CircularProgressbarWithChildren>
                                    <p>
                                        {luminosity[0]} lux
                                    </p>
                                </div>
                                <div className='sensor-data'>
                                    TEMPERATURE
                                    <CircularProgressbarWithChildren
                                        value={temperature[0]}
                                        maxValue={50}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(250, 120, 20, ${0.5 + temperature[0] / 100})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="thermometer-outline"></ion-icon>
                                    </CircularProgressbarWithChildren>
                                    <p>
                                        {temperature[0].toFixed(1)}°C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className='preview'>
                                SUNFLOWER BUD
                                <img src={Sun} alt="plant" />
                            </div>
                            <div className="data-container">
                                <div className='sensor-data'>
                                    HUMIDITY
                                    <CircularProgressbarWithChildren
                                        value={humidity[1]}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(0, 110, 255, ${0.5 + humidity[1] / 200})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="water-outline" />
                                    </CircularProgressbarWithChildren >
                                    <p>
                                        {humidity[1].toFixed(1)}%
                                    </p>
                                </div>
                                <div className='sensor-data'>
                                    LUMINOSITY
                                    <CircularProgressbarWithChildren
                                        value={luminosity[1]}
                                        maxValue={1000}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(255, 255, 0, ${0.5 + luminosity[1] / 2000})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="sunny-outline" />
                                    </CircularProgressbarWithChildren>
                                    <p>
                                        {luminosity[1]} lux
                                    </p>
                                </div>
                                <div className='sensor-data'>
                                    TEMPERATURE
                                    <CircularProgressbarWithChildren
                                        value={temperature[1]}
                                        maxValue={50}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(250, 120, 20, ${0.5 + temperature[1] / 100})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="thermometer-outline"></ion-icon>
                                    </CircularProgressbarWithChildren>
                                    <p>
                                        {temperature[1].toFixed(1)}°C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className='preview'>
                                AILANTHUS
                                <img src={Plant} alt="plant" />
                            </div>
                            <div className="data-container">
                                <div className='sensor-data'>
                                    HUMIDITY
                                    <CircularProgressbarWithChildren
                                        value={humidity[2]}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(0, 110, 255, ${0.5 + humidity[2] / 200})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="water-outline" />
                                    </CircularProgressbarWithChildren >
                                    <p>
                                        {humidity[2].toFixed(1)}%
                                    </p>
                                </div>
                                <div className='sensor-data'>
                                    LUMINOSITY
                                    <CircularProgressbarWithChildren
                                        value={luminosity[2]}
                                        maxValue={1000}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(255, 255, 0, ${0.5 + luminosity[2] / 2000})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="sunny-outline" />
                                    </CircularProgressbarWithChildren>
                                    <p>
                                        {luminosity[2]} lux
                                    </p>
                                </div>
                                <div className='sensor-data'>
                                    TEMPERATURE
                                    <CircularProgressbarWithChildren
                                        value={temperature[2]}
                                        maxValue={50}
                                        strokeWidth={7}
                                        styles={buildStyles({
                                            pathColor: `rgba(250, 120, 20, ${0.5 + temperature[2] / 100})`,
                                            trailColor: `rgba(0, 0, 0, 0.05)`,
                                        })}
                                    >
                                        <ion-icon name="thermometer-outline"></ion-icon>
                                    </CircularProgressbarWithChildren>
                                    <p>
                                        {temperature[2].toFixed(1)}°C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}