import React from 'react';
function Contact() {
    return (
        <>
            <section className='p-5' style={{ background: '#1a374d' }}>
                <div className="container-fluid text-center text-white my-5 ">

                    <h1>CONTACT US</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                </div>
            </section>
            <section>
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row">
                            <div class="col-md-5 ">

                                <div class="card my-5 ">
                                    <div class="card-body  text-white ">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" placeholder="Firstname"
                                                    aria-label="Firstname" aria-describedby="basic-addon1" />
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" placeholder="Lastname"
                                                    aria-label="Lastname" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div class="input-group mt-4 ">
                                            <span class="input-group-text" id="basic-addon1">@</span>
                                            <input type="text" class="form-control" placeholder="Email" aria-label="email"
                                                aria-describedby="basic-addon1" />
                                        </div>

                                        <div class="form-group mt-4">
                                            <textarea class="form-control" placeholder="Please Introduce Yourself"
                                                id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div class="d-grid gap-2 col-6 mx-auto">
                                            <button class="btn btn-outline-secondary mt-4" type="button">Send Message</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        <div className="col-md-4  text-center  px-5">
                            <div className="row mt-5">
                                <div className="col-sm-3">
                                <i class="fa-solid fa-house"></i>
                                </div>
                                <div className="col-sm-8">
                                155 Market St #101, Paterson, NJ 07505, United States
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-sm-3">
                                <i class="fa-solid fa-phone-volume"></i>
                                </div>
                                <div className="col-sm-8">
                                155 Market St #101, Paterson, NJ 07505, United States
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-sm-3">
                                <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className="col-sm-8">
                                155 Market St #101, Paterson, NJ 07505, United States
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;