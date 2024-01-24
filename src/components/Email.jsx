import React from 'react';
export default function Email() {
    return(
    <div className="container-fluid bg-dark p-5 mt-0">
        <div className="row">
            <div className="col-md-6  text-center text-white">
                <h3>SignUp to get the latest News & Updates</h3>
            </div>
            <div className="col-md-5 ">
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                        placeholder="Enter your E-mail Addess here" />
                </div>
            </div>
            <div className="col-md-1   text-center mt-3">
                <button className="btn btn-outline-warning ">
                    Subscribe!!
                </button>
            </div>
        </div>

    </div>
    )
} 