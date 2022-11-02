import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./bus.css";

import "swiper/css/pagination";
import { Pagination } from "swiper";
import orangeTravels from "./assets/orange_travels.png";
import RangeSlider from 'react-bootstrap-range-slider';
import sunset from './assets/Sunset.png'
import sun from './assets/Sun.png'
import evening from './assets/Moon and Stars.png'
import afternoon from './assets/afternoon.png'
import elipse from './assets/Ellipse 81.png'
import bus from './assets/Vector.png'
import wifi from './assets/wifi.png'
import camera from './assets/camera.png'
import group from './assets/Group.png'
import Tracking_delivery from './assets/Tracking delivery.png'
import unplug from './assets/unplug.png'
import seat from './assets/seat.png'












const FlightsScd = () => {
    const [value, setValue] = useState(0);
    const [shows, setShows] = useState(false);

    const show = () => {
        //  setShows(!shows)
    }
    return <div className="container">
        {/* browse by operator */}
        <section className="py-5" style={{ backfgroundColor: "#F5F5F5" }}>
            <h6 style={{ fontSize: "36px", fontWeight: "400" }}> Bangalore - Ahmedabad | Thursday, 01 September 2022</h6>

            <div className="row g-0">
                <div className="col-lg-3 py-5" style={{ backgroundColor: '#E9E9E9' }}>
                    <div className="px-3">
                        <h3 className="text-center text-uppercase">filter by</h3>
                        <form action="" className="mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="ontimeguarantee" />
                                <label className="form-check-label" for="ontimeguarantee">
                                    on time guarantee
                                </label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="gpsenabledbuses" />
                                <label className="form-check-label" for="gpsenabledbuses">
                                    gps enabled buses
                                </label>
                            </div>
                            <h6 className="mt-3">PRICE</h6>
                            <div className="d-flex justify-content-between">
                                <p className="mb-0"> RS 1200</p>
                                <p className="mb-0"> RS 2500</p>

                            </div>
                            <RangeSlider
                                value={value}
                                onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                            {/* <input className="w-100" type="range" id="vol" name="vol" min="0" max="50"></input> */}

                        </form>
                    </div>
                    <hr />
                    <div className="px-3">
                        <h6 className="text-uppercase">BUS TYPE</h6>
                        <form action="" className="mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="AC" />
                                <label className="form-check-label" for="AC">
                                    AC
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="NOnAC" />
                                <label className="form-check-label" for="NOnAC">
                                    NOn AC
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="SLEEPER" />
                                <label className="form-check-label" for="SLEEPER">
                                    SLEEPER
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="SEATER" />
                                <label className="form-check-label" for="SEATER">
                                    SEATER
                                </label>
                            </div>
                        </form>

                    </div>
                    <hr />

                    <div className="px-3">
                        <h6 className="text-uppercase">fee cancellation</h6>
                        <form action="" className="mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="12HOURS" />
                                <label className="form-check-label" for="12HOURS">
                                    12 HOURS
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="24HOURS" />
                                <label className="form-check-label" for="24HOURS">
                                    24 HOURS

                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="48HOURS" />
                                <label className="form-check-label" for="48HOURS">
                                    48 HOURS
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="72HOURS" />
                                <label className="form-check-label" for="72HOURS">
                                    72 HOURS

                                </label>
                            </div>
                        </form>

                    </div>
                    <hr />
                    <div className="row p-2">
                        <div className="col-6">
                            <div class="card py-1">
                                <img className='mx-auto' style={{ width: "70px", height: "70px" }} src={sunset}></img>


                                <div class="card-body pt-2">

                                    <p class="card-text text-center mb-0  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>early morning..</strong></p>
                                    <p class="card-text text-center  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>00:00 - 04:59</strong></p>


                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <div class="card py-1">
                                <img className='mx-auto' style={{ width: "70px", height: "70px" }} src={sun}></img>

                                <div class="card-body pt-2">

                                    <p class="card-text text-center mb-0  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}> morning</strong></p>
                                    <p class="card-text text-center  text-capitalize" style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>00:00 - 04:59</strong></p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-6">
                            <div class="card py-1">
                                <img className='mx-auto' style={{ width: "70px", height: "70px" }} src={afternoon}></img>


                                <div class="card-body pt-2 text">

                                    <p class="card-text text-center mb-0  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>afternoon</strong></p>
                                    <p class="card-text text-center  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>00:00 - 04:59</strong></p>


                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <div class="card py-1">
                                <img className='mx-auto' style={{ width: "70px", height: "70px" }} src={evening}></img>

                                <div class="card-body pt-2">

                                    <p class="card-text text-center mb-0  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>evening</strong></p>
                                    <p class="card-text text-center  text-capitalize " style={{ fontSize: "12px" }}><strong style={{ fontWeight: "500" }}>00:00 - 04:59</strong></p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionFlushExample" >
                        <div class="accordion-item border-0" >
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    BORDING POINTS
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <form action="" className="mt-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="anand rao circle" />
                                        <label className="form-check-label text-capitalize" for="anand rao circle">
                                            anand rao circle
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="8th mile bus stop" />
                                        <label className="form-check-label text-capitalize" for="8th mile bus stop">
                                            8th mile bus stop
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="anand rao circle" />
                                        <label className="form-check-label text-capitalize" for="anand rao circle">
                                            anand rao circle
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="new delhi gate no 5" />
                                        <label className="form-check-label text-capitalize" for="new delhi gate no 5">
                                            new delhi gate no 5
                                        </label>
                                    </div>
                                </form></div>
                            </div>
                        </div>
                        <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    dropping points
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><form action="" className="mt-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="anand rao circle" />
                                        <label className="form-check-label text-capitalize" for="anand rao circle">
                                            anand rao circle
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="8th mile bus stop" />
                                        <label className="form-check-label text-capitalize" for="8th mile bus stop">
                                            8th mile bus stop
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="anand rao circle" />
                                        <label className="form-check-label text-capitalize" for="anand rao circle">
                                            anand rao circle
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="new delhi gate no 5" />
                                        <label className="form-check-label text-capitalize" for="new delhi gate no 5">
                                            new delhi gate no 5
                                        </label>
                                    </div>
                                </form></div>
                            </div>
                        </div>
                        <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    amenities
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><form action="" className="mt-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="cctv" />
                                            <label className="form-check-label text-capitalize" for="cctv">
                                                cctv
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="gps" />
                                            <label className="form-check-label text-capitalize" for="gps">
                                                gps
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>

                                    </div>
                                    <div className="d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="snacks" />
                                            <label className="form-check-label text-capitalize" for="snacks">
                                                snacks
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>
                                    </div>
                                    <div className="d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="SEATER" />
                                            <label className="form-check-label text-capitalize" for="SEATER">
                                                wifi
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>
                                    </div>
                                    <div className="d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="fan" />
                                            <label className="form-check-label text-capitalize" for="fan">
                                                fan
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>
                                    </div>
                                    <div className="d-flex justify-content-between">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="blanketss" />
                                            <label className="form-check-label text-capitalize" for="blankets">
                                                blankets
                                            </label>
                                        </div>
                                        <p className="mb-0">(4)</p>

                                    </div>
                                </form></div>
                            </div>
                        </div>
                        <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="busoperator">
                                <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#bus" aria-expanded="false" aria-controls="bus">
                                    Bus Operator
                                </button>
                            </h2>
                            <div id="bus" class="accordion-collapse collapse" aria-labelledby="busoperator" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><form action="" className="mt-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="m r travels" />
                                        <label className="form-check-label text-capitalize" for="m r travels">
                                            m r travels
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="NOnAC" />
                                        <label className="form-check-label" for="NOnAC">
                                            NOn AC
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="baalaji travels" />
                                        <label className="form-check-label text-capitalize" for="baalaji travels">
                                            baalaji travels
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="john travels" />
                                        <label className="form-check-label text-capitalize" for="john travels">
                                            john travels
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="8th mile bus stop" />
                                        <label className="form-check-label text-capitalize" for="8th mile bus stop">
                                            8th mile bus stop
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="smith travles" />
                                        <label className="form-check-label text-capitalize" for="smith travles">
                                            smith travles
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="new delhi travels" />
                                        <label className="form-check-label text-capitalize" for="new delhi travels">
                                            new delhi travels
                                        </label>
                                    </div>

                                </form></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 ps-lg-3">

                    <div className="table-responsive">
                        <table class="table ">
                            <thead style={{ backgroundColor: '#02A3C1' }}>
                                <tr className="text-white   ">
                                    <th scope="col">Bus Operator</th>
                                    <th scope="col">Departure</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Arrival</th>
                                    <th scope="col">Price</th>

                                </tr>

                            </thead>
                            <div className="mt-3"></div>

                            <tbody >
                                {[0, 0, 0, 0, 0, 0].map(() => {
                                    return (<>
                                        <tr className="border">

                                            <td scope="row">
                                                <td><div><h6 className="text-uppercase">
                                                    m r travels

                                                </h6>
                                                    <p className="" style={{ fontSize: '15px', fontWeight: "300", color: "#2D2D2D" }}>VOLVO AC Multi Axle Seater/Sleeper (2 + 1) </p>
                                                </div></td>
                                            </td>
                                            <td><div><h6 style={{ fontSize: "32px", fontWeight: "500" }}>
                                                21:40

                                            </h6>
                                                <p className="text-uppercase" style={{ fontSize: "24px", fontWeight: "400" }}>delhi</p>
                                            </div></td>
                                            <td className=""><div><p className="mb-0" style={{ fontSize: '10px', fontWeight: '400' }}>
                                                21H:40M

                                            </p>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={bus}></img>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={elipse}></img>
                                                <img className="" src={elipse}></img>
                                                <p style={{ fontSize: '10px', fontWeight: '400' }}>NON STOP</p>
                                            </div></td>
                                            <td><div>
                                                <h6 className="" style={{ fontSize: "32px", fontWeight: "500" }}>
                                                    23:55</h6>
                                                <h6 className="text-uppercase" style={{ fontSize: "24px", fontWeight: "400" }}>
                                                    mecca
                                                </h6>
                                            </div></td>
                                            <td><div>
                                                <p className="" style={{ fontSize: '13px', fontWeight: '300' }}>
                                                    Starting From</p>
                                                <h6 className="text-uppercase" style={{ fontSize: "32px", fontWeight: "500" }}>
                                                    rs 1,995/-
                                                </h6>
                                            </div></td>


                                        </tr>
                                        <tr className="border"><td colSpan={3}>
                                            <img className="px-2" src={group}></img>
                                            <img className="px-2" src={wifi}></img>
                                            <img className="px-2" src={camera}></img>
                                            <img className="px-2" src={Tracking_delivery}></img>

                                            <img className="px-2" src={unplug}></img>

                                        </td>
                                            <td>
                                                <img className="px-2" src={seat}></img>
                                                <span className="" style={{ fontWeight: "400", fontSize: "16px" }}>21 seats left</span>

                                            </td>
                                            <td><button onClick={show} className=" px-3 border-0" style={{ backgroundColor: "#02A3C1", color: "white" }}>Select Seat</button></td>
                                        </tr>
                                        <div className="mb-3">
                                            {/* {shows && <> <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                                                </li>
                                            </ul>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                                </div></>} */}
                                        </div>
                                    </>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </section>

    </div>;
};

export default FlightsScd;
