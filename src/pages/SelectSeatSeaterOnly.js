import React from "react";
import select_seat from './assets/select_seat.png'
import vertical_bar from './assets/vertical_bar.png'
import lower_berth_seat from './assets/lower_berth_seat.png'


import './bus.css'

const SelectSeatSeaterOnly = () => {
    return <div className="container pt-3">
        <div className="row mt-5">
            <div className="col-lg-9 mb-3 my-lg-0">
                <div className="pb-5 " >
                    <h6 className="text-uppercase" style={{ fontWeight: "500", fontSize: "32px" }}>banglore-----ahmedabad</h6>
                    <div className="row">
                        <div className="col-lg-6">
                            <p style={{ fontWeight: "400", fontSize: "24px" }}>M R Travels2 X 1 (38) A/C SEATSLEEPER(+)</p>

                        </div>
                        <div className="col-lg-6">
                            <p className="text-lg-end" style={{ fontWeight: "400", fontSize: "24px" }}>Friday, 02 September 2022 (16:00-22:15)  </p>


                        </div>
                        <hr />



                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="img-fluid" src={select_seat}></img>

                            <span className="ps-2" style={{ fontWeight: "500", fontSize: "24px" }}>Booked</span>
                        </div>
                        <div className="col-lg-3">
                            <img className="img-fluid" src={select_seat}></img>

                            <span className="ps-2" style={{ fontWeight: "500", fontSize: "24px" }}>available</span>
                        </div>
                        <div className="col-lg-3">
                            <img className="img-fluid" src={select_seat}></img>

                            <span className="ps-2" style={{ fontWeight: "500", fontSize: "24px" }}>selected</span>
                        </div>
                        <div className="col-lg-3">
                            <img className="img-fluid" src={select_seat}></img>

                            <span className="ps-2" style={{ fontWeight: "500", fontSize: "24px" }}>reserved for ladies</span>
                        </div>
                    </div>
                </div>
                <div className="py-3" style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="px-3">
                        <span style={{ fontWeight: "500", fontSize: "24px" }}>Seat Price</span>

                        <button className=" mx-2 bg-white text-dark border-0">All</button>
                        <button className=" mx-2 bg-white text-dark border-0">1950</button>

                        <button className=" mx-2 bg-white text-dark border-0">1500</button>
                        <button className=" mx-2 bg-white text-dark border-0">1465</button>





                    </div>
                </div>



                <div className="py-3 mt-3 " style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="row">
                        <div className="col-lg-2 " >
                            {/* <h6 className="text_rotate text-uppercase " style={{ tranform: 'rotate(270deg)' }}>lower     berth</h6> */}
                        </div>
                        <div className="col-lg-8" >
                            <div className="row">


                                <div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div>
                                <div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div>

                            </div>
                            <div className="row mt-lg-2 mt-3">


                                <div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div>
                                <div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div><div className="col-3 col-lg-1">
                                    <img className="img-fluid" src={lower_berth_seat}></img>

                                </div>

                            </div>
                            <div className="mt-5">
                                <div className="row">


                                    <div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div>
                                    <div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div>

                                </div>
                                <div className="row mt-lg-2 mt-3">


                                    <div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div>
                                    <div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div><div className="col-3 col-lg-1">
                                        <img className="img-fluid" src={lower_berth_seat}></img>

                                    </div>

                                </div>
                            </div>




                        </div>
                        <div className="col-lg-2 my-auto ">
                            <div className="row d-flex flex-lg-column mt-3 mt-lg-0">

                                <div className="col">
                                    <img className="img-fluid" src={lower_berth_seat}></img>



                                </div>

                                <div className="col">
                                    <img className="img-fluid" src={lower_berth_seat}></img>



                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={lower_berth_seat}></img>



                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={lower_berth_seat}></img>



                                </div>

                            </div>



                        </div>

                    </div>
                </div>
            </div>
            <div className="col-lg-3 px-3 mb-2 mb-lg-0" style={{ backgroundColor: "#F5F5F5" }}>
                <div>
                    <h6 className=" pt-3 text-capitalize" style={{ fontSize: "24px", fontWeight: "500" }}> select boarding pont</h6>
                    <select class="form-select rounded-0 border-0" aria-label="Default select example">
                        <option selected className="text-muted text-capitalize" > select </option>
                        <option value="anand rao circle" className="text-capitalize">anand rao circle</option>
                        <option value="8th mile bus stop" className="text-capitalize">8th mile bus stop</option>
                        <option value="new delhi gate no 5" className="text-capitalize">new delhi gate no 5</option>
                    </select>
                </div>

                <div>
                    <h6 className=" mt-5 text-capitalize" style={{ fontSize: "24px", fontWeight: "500" }}> select dropping pont</h6>
                    <select class="form-select rounded-0 border-0" aria-label="Default select example">
                        <option selected className="text-muted text-capitalize" > select </option>
                        <option value="anand rao circle" className="text-capitalize">anand rao circle</option>
                        <option value="8th mile bus stop" className="text-capitalize">8th mile bus stop</option>
                        <option value="anand rao circle" className="text-capitalize">anand rao circle</option>
                        <option value="8th mile bus stop" className="text-capitalize">8th mile bus stop</option>


                        <option value="new delhi gate no 5" className="text-capitalize">new delhi gate no 5</option>
                    </select>
                </div>
                <div className="mt-5 ">
                    <h6 className="text-uppercase" style={{ fontSize: "24px", fontWeight: "500" }}>Select seats</h6>
                    <button className="px-2 py-2 mt-2">Seat No(1)</button>

                </div>
                <div className="mt-3 my-3">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex border-0 text-capitalize text-muted justify-content-between align-items-center">
                            base fare
                            <span class="text-capitalize">rs 1450.00</span>
                        </li>
                        <li class="list-group-item d-flex  text-capitalize text-muted justify-content-between align-items-center">
                            gst + operator fees
                            <span class="text-capitalize"> 95.00</span>
                        </li>
                        <li class="list-group-item d-flex  text-capitalize justify-content-between align-items-center">
                            total amount
                            <span class="text-capitalize"> 1540.00</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>











    </div>
};

export default SelectSeatSeaterOnly;