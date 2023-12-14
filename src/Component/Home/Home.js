import "./Home.css"
import about from "../../assets/about.png"
import {IoPricetags, IoWallet} from "react-icons/io5"
import {FaHeadset} from "react-icons/fa6"
import FAQ from "../UI/FAQ/FAQ";
import Vehicle from "../UI/Vehicle/Vehicle";

const Home = () => {
    const submitHandler = (event) => {
        event.preventDefault()
    }
    return (
        <div className="container">
            <div className="home">
                <div className="home-top">
                    <div>
                        <h1>
                            Looking to save more on your <span id="title">rental car</span>?
                        </h1>
                        <div>
                            Discover RentalX car rental options in USA with Rent a Car Select from a range of options
                            and
                            local specials.
                        </div>
                        <div className={"get-app"}>
                            <div className={"ios"}/>
                            <div className={"google"}/>
                        </div>
                    </div>
                </div>
                <img src={about} alt=""/>
            </div>
            <div className="info">
                <form action="" onSubmit={submitHandler}>
                    <div className="inputBox">
                        <div>Location</div>
                        <input placeholder={"Enter location"} type="text" id="loc"/>
                    </div>
                    <div className="inputBox">
                        <div>Pick-up Date</div>
                        <input type="date"/>
                    </div>
                    <div className="inputBox">
                        <div>Return Date</div>
                        <input type="date"/>
                    </div>
                    <button id={"form-btn"}>Search</button>
                </form>
            </div>
            <div className="best-service">
                <div className={"uppercase light-color"}>best services</div>
                <div id={"service-txt"}>Feel the best experience with our rental deals</div>
                <div className="box">
                    <div className="services">
                        <IoPricetags className={"service-icon"}/>
                        <div>
                            <div className={"bold"}>Deal for every budget</div>
                            <div className={"light-color"}>
                                Incredible prices on hotels, fights, cars, and packages worldwinde.
                            </div>
                        </div>
                    </div>
                    <div className="services">
                        <IoWallet className={"service-icon"}/>
                        <div>
                            <div className={"bold"}>Best price guaranteed</div>
                            <div className={"light-color"}>
                                Find a lower price? we will refund you 100% of the difference.
                            </div>
                        </div>
                    </div>
                    <div className="services">
                        <FaHeadset className={"service-icon"}/>
                        <div>
                            <div className={"bold"}>Support 24/7</div>
                            <div className={"light-color"}>
                                Find a lower price? we will refund you 100% of the difference.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Vehicle/>
            <FAQ/>
        </div>
    );
}

export default Home;