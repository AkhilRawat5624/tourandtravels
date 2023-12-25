import Carousel from "../components/Carousel";
import HeaderPage from "./HeaderPage";
import Trips from "./Trips";

export default function WelcomePage() {


    return (<>
        <HeaderPage />
        <Carousel />
        <h1 className="text-center mt-5">Places to Visit</h1>
        <Trips />
        <Trips/>
        <section >
            <h1 className="text-center mt-5">HOW IT WORKS</h1>
            <div className="container">
                <div className="row ">
                    <div className="col-md-4  text-center">
                    <i class="fa-solid fa-location-dot my-3"></i>
                        <h5 className="text-center">Handpicked Adventures</h5>
                        <p className="text-center ">We search more than 700 websites</p>
                    </div>
                    <div className="col-md-4 text-center">
                    <i className="fa-solid fa-tags my-3"></i>
                        <h5 className="text-center">Exclusive Deals</h5>
                        <p className="text-center ">From local gems to highlights</p>
                    </div>
                    <div className="col-md-4 text-center">
                    <i class="fa-solid fa-truck-monster my-3"></i>
                        <h5 className="text-center">Trips that match your interests</h5>
                        <p className="text-center ">From local gems to highlights</p>
                    </div>
                </div>
            </div>
        </section>

    </>)
}