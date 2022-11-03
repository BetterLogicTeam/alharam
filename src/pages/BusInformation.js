import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import './bus_info.css'
import sunset from './assets/Sunset.png'
import sun from './assets/Sun.png'
import evening from './assets/Moon and Stars.png'
import afternoon from './assets/afternoon.png'
import elipse from './assets/Ellipse 81.png'
import Ellipse_large from './assets/Ellipse_large.png'
import travel_safe from './assets/travel_safe.png'


import bus from './assets/Vector.png'
import wifi from './assets/wifi.png'
import camera from './assets/camera.png'
import group from './assets/Group.png'
import Tracking_delivery from './assets/Tracking delivery.png'
import unplug from './assets/unplug.png'
import seat from './assets/seat.png'
import ReactCountryFlag from "react-country-flag"

const BusInformation = () => {
    const [selected, setSelected] = useState("");
    return <div>
        <div className="text-center text-white fw-bold py-lg-4 py-3 fs-3  text-capitalize" style={{ background: '#02A3C1' }}> booking summary</div>
        <div className="container py-3 py-lg-5">

            <h1 className="text-center text-capitalize" >
                Bus information
            </h1>
        </div>
        <div className="py-5" style={{ backgroundColor: "#EFEFEF" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h6 className="text-center text-lg-start"> jeedah-----mecca</h6>
                        <div className="row mt-lg-5 g-0 text-lg-start text-center mb-3 mb-lg-0">
                            <p></p>
                            <div className="col-lg-4 my-auto">
                                <p className="mt-3">14 sep 2022 (tue) </p>

                            </div>
                            <div className="col-lg-6 my-auto">
                                <h1 className="mt-3 mb-0">21:40 </h1>
                                <p className="mb-0">jeddah</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <h6 className="text-capitalize text-center" style={{ fontWeight: "500", fontSize: "24px" }}>m r tour & travels</h6>
                        <p className="text-muted text-center mb-0">VOLVO AC Multi Axle Seater/Sleeper (2 + 1) </p>

                        <div className="row g-0 text-center mt-3 ">
                            <div className="col-lg-8 my-auto">

                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="" src={elipse}></img>
                                <img className="mx-2" src={bus}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>
                                <img className="mx-1" src={elipse}></img>



                            </div>
                            <div className="col-lg-4 my-auto">
                                <h1 className="mt-3 mb-0">21:40 </h1>
                                <p className="mb-0">mecca</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 mt-lg-0">
                        <h6 className="text-capitalize text-center" style={{ fontWeight: "500", fontSize: "24px" }}>1 seat selected </h6>
                        <p className="text-muted text-center mb-0">seat no : 06 </p>

                        <p className="mt-lg-5 text-center text-lg-start">15 sep 2022 (wed)</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="container my-5 py-3 " >
            <h1 className="text-center text-capitalize">Guest detail</h1>
        </div>
        <div className="py-lg-5 " style={{ boxShadow: ' 0px 0px 10px rgba(0, 0, 0, 0.19)' }}>
            <div className="container mt-3 py-3 py-lg-0">
                <div className="text-center text-lg-start">
                    <h1 className="text-capitalize">
                        adult
                    </h1>
                    <p className="text-muted">Name should be same as in Passport</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 mt-3 mt-lg-0">
                        <div class="">
                            <form>
                                <input type="text" class="form-control rounded-0" id="firstname" placeholder="First name" />

                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 mt-lg-0">
                        <div class="">
                            <form>
                                <input type="text" class="form-control rounded-0" id="lastname" placeholder="Last name" />

                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 mt-lg-0">
                        <div class="">
                            <form>
                                <input type="email" class="form-control rounded-0" id="email" placeholder="Email Id" />

                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className=" text-capitalize text-center">contact detail</h1>
                    <p className="text-muted text-center"> Your Mobile number will be used only for sending flight related communication</p>
                    <div className="">
                        <form className="col-lg-6 mx-auto ">
                            <div className=" d-flex mb-3 ">

                                <ReactFlagsSelect

                                    countries={["PK", "GB", "FR", "IN", 'BD', 'AF']}
                                    customLabels={{
                                        "PK": { secondary: "+92" },
                                        "GB": { secondary: "+44" },
                                        "FR": { secondary: "+44" },
                                        "IN": { secondary: "+91" },
                                        "BD": { secondary: "+93" },
                                        "AF": { secondary: "+91" },

                                    }}
                                    placeholder="Select country"
                                    // className="form-control rounded-0 "
                                    showSecondarySelectedLabel={true}
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}

                                />


                                <input type="number" id="lastname" placeholder="Enter number" className="form-control rounded-0 " style={{ height: "2.8rem" }} />


                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

        <div className="py-lg-3 my-5" style={{ boxShadow: ' 0px 0px 10px rgba(0, 0, 0, 0.19)' }}>
            <div className="container py-3 py-lg-0 mt-3 px-lg-5">
                <div class="d-flex">
                    <div class="flex-shrink-0">
                        <img src={Ellipse_large} alt="..." />
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <h6 className="text-capitalize" style={{ fontSize: "28px", fontWeight: "500" }}>use gst for this booking</h6>
                        <p className="text-capitalize">to claim credit of gst charged by airline/al haram  please enter your company gst number</p>
                    </div>
                </div>



            </div>

        </div>
        <div className="py-lg-3 my-5" style={{ boxShadow: ' 0px 0px 10px rgba(0, 0, 0, 0.19)' }}>
            <div className="container mt-3">
                <div class="d-flex">
                    <div class="flex-shrink-0">
                        <img src={travel_safe} alt="..." />

                        <img className="ms-3" src={Ellipse_large} alt="..." />
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <h6 className="text-capitalize" style={{ fontSize: "28px", fontWeight: "500" }}>TRAVEL SAFE WITH TRIP INSURANCE Worry-Free Hotel Stay</h6>
                        <p className="text-capitalize">(Upon Selecting Travel Insurance ,You accept the Terms and Conditions of the travel insurance policy)</p>
                    </div>
                </div>



            </div>
            <div className="border-bottom"></div>
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-9">
                        <ul class="lh-lg">
                            <li class="">Upto ₹ 15K for hotel booking cancellation charges if cancelled due to illness</li>
                            <li class=""> Upto ₹ 25K for bounced booking</li>
                            <li class="">Upto ₹ 25K for loss of tablets and laptops</li>
                            <li class=""> Upto ₹ 25K for loss of baggage</li>
                            <li class="">Upto ₹ 20K for emergency travel of family members</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mt-auto text-center text-lg-start">
                        <h1>₹ 74<br></br>
                            per person</h1>
                    </div>

                </div>

            </div>

        </div>
        <div className="py-5" style={{ backgroundColor: '#F5FFF3' }}>
            <div className="container">
                <h6 className="text-capitalize text-center text-lg-start" style={{ fontSize: "32px", fontWeight: "500" }}>important information</h6>
                <ul class="lh-lg">
                    <li class="">Upto ₹ 15K for hotel booking cancellation charges if cancelled due to illness</li>
                    <li class=""> Upto ₹ 25K for bounced booking</li>
                    <li class="">Upto ₹ 25K for loss of tablets and laptops</li>
                    <li class=""> Upto ₹ 25K for loss of baggage</li>
                    <li class="">Upto ₹ 20K for emergency travel of family members</li>
                </ul>
            </div>
        </div>
        <div className="container py-5">
            <h3 className="text-center text-capitalize">price summary</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center">

                </li>
                <li class="list-group-item text-muted d-flex justify-content-between align-items-center">
                    adult  :  1
                    <span class="">1,995.00</span>
                </li>
                <li class="list-group-item  text-muted d-flex justify-content-between align-items-center">
                    all taxes
                    <span class="">50.00</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    grand total
                    <span class="">2,045.00</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">

                </li>

            </ul>
            <div className="text-center mt-3 mt-lg-5" ><button className="text-white border-0 col-8 col-lg-4 py-3 h4" style={{ backgroundColor: "#02A3C1" }}>Pay Now</button></div>
        </div>
    </div>
};

export default BusInformation;
