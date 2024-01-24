import React from 'react';
export default function Testimonials() {
    return (
        <section style={{backgroundColor:'#f1f1f1'}}  >
        <div className="container px-4 mt-5 pt-5">
            <div className="container mx-5 ">
                <div className="container  px-3  " style={{borderLeft:'8px solid black'}}>
                    <h2 className="display-3 m-0">HAPPY</h2>
                    <h1 className="display-1 ">CUSTOMERS</h1>
                </div>
                <div className="col-md-7 text-secondary my-3">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque unde eos provident illum eum
                        architecto. Ab adipisci nihil perferendis nisi? Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Sed, dolor?</p>
                </div>
            </div>

            <div className="container  mx-5 mt-5  ">
                <div className="row mx-2  justify-content-center">
                    <div className="col-md-2"><img src="https://www.shutterstock.com/image-photo/portrait-mature-man-smiling-happy-260nw-1629683494.jpg" alt="" className="img-fluid " style={{height:'100%',borderRadius:'50%'}}/></div>
                    <div className="col-md-2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4Y9HzK5LkVzjZc5Yv4o8oS7Dei6GMug4pw&usqp=CAU" alt="" className="img-fluid " style={{height:'100%',borderRadius:'50%'}}/></div>
                    <div className="col-md-2"><img src="https://www.shutterstock.com/image-photo/portrait-mature-man-smiling-happy-260nw-1629683494.jpg" alt="" className="img-fluid" style={{height:'100%',borderRadius:'50%'}}/></div>
                    <div className="col-md-2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4Y9HzK5LkVzjZc5Yv4o8oS7Dei6GMug4pw&usqp=CAU" alt="" className="img-fluid" style={{height:'100%',borderRadius:'50%'}}/></div>
                   
                </div>
                <div className="review mt-3 py-5 text-center mx-5  px-5">
                    <i className="fa-solid fa-quote-left" ></i>
                    <p className="text-secondary my-3">Exceptional tour experience with seamless planning and breathtaking destinations. Unforgettable journeys with personalized service – making every moment an adventure to cherish</p>
                    <h5>JONATHAN, LEXODIA</h5>
                </div>
            </div>

        </div>

    </section>
    )
}