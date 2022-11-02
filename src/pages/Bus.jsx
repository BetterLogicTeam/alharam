import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./bus.css";

import "swiper/css/pagination";
import { Pagination } from "swiper";
import orangeTravels from "./assets/orange_travels.png";

const Bus = () => {
    return <div className="container">
        {/* browse by operator */}
        <section className="py-5" style={{ backfgroundColor: "#F5F5F5" }}>
            <h1> browse by operator</h1>
            <p>Discover best things to do restaurants, shopping, hotels, cafes and places
            </p>
            <div className="row">
                <div className="col-4">
                    <div class="card border-0" >
                        <img src={orangeTravels} class="card-img-top img-fluid border_hover" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: "#585858" }}>Orange Travels</h5>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card border-0" >
                        <img src={orangeTravels} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: "#585858" }}>Orange Travels</h5>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card border-0" >
                        <img src={orangeTravels} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: "#585858" }}>Orange Travels</h5>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="swipppr">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 70,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='silde ms-4'><img src={one} alt="" /></SwiperSlide>
                    <SwiperSlide className='silde'><img src={two} alt="" /></SwiperSlide>
                    <SwiperSlide className='silde'><img src={three} alt="" /></SwiperSlide>
                    <SwiperSlide className='silde'><img src={one} alt="" /></SwiperSlide>
                    <SwiperSlide className='silde'><img src={two} alt="" /></SwiperSlide>
                    <SwiperSlide className='silde'><img src={three} alt="" /></SwiperSlide>
                </Swiper>
            </div> */}
        </section>

    </div>;
};

export default Bus;
