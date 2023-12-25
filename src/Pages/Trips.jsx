import React from 'react';
import { Link } from 'react-router-dom';
function Trips() {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="container ">
                    <div className="row">
                   
                    <div className="col-md-4 ">
                        <div >
                            <div >
                                <img src="https://tourmyindia.com/socialimg/kerala-tourism.jpg" style={{ width: '100%', borderRadius: '8px', height: '300px' }} />
                            </div>
                            <h5 className='text-center mt-3'>Kerala</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus porro odit suscipit </p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div >
                            <div >
                                <img src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/Varanasi-GettyImages-610625330.jpg?w=1900&h=1259" style={{ width: '100%', borderRadius: '8px', height: '300px' }} />
                            </div>
                            <h5 className='text-center mt-3'>Varanasi</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus porro odit suscipit </p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div >
                            <div >
                                <img src="https://etimg.etb2bimg.com/photo/91507283.cms" style={{ width: '100%', borderRadius: '8px', height: '300px' }} />
                            </div>
                            <h5 className='text-center mt-3'>Uttrakhand</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus porro odit suscipit </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Trips;