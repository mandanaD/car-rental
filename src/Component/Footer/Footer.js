import "./Footer.css"
import {FaGooglePlusG,FaXTwitter,FaYoutube,FaWhatsapp} from "react-icons/fa6"
const Footer = () => {
    return (
        <div className="footer">
            <div className={"footer-top"}>
                <div className={"footer-title"}>
                    <div className="bold">
                        Our Products

                    </div>
                    <div className=" footer-item light-color">
                        <p>Career</p>
                        <p>Hotels</p>
                        <p>Cars</p>
                        <p>Packages</p>
                        <p>Features</p>
                        <p>Priceline</p>
                    </div>
                </div>
                <div className={"footer-title"}>
                    <div className="bold">
                        About RentalX.
                    </div>
                    <div className=" footer-item light-color">
                        <p>Why RentalX.</p>
                        <p>Our Story</p>
                        <p>Investor Relations</p>
                        <p>Press Center</p>
                        <p>Advertise</p>
                    </div>
                </div>
                <div className={"footer-title"}>
                    <div className="bold">
                        Resources
                    </div>
                    <div className=" footer-item light-color">
                        <p>Download</p>
                        <p>Help Center</p>
                        <p>Guides</p>
                        <p>Partner Network</p>
                        <p>Developers</p>
                        <p>Mechanics</p>
                    </div>
                </div>
                <div className={"footer-title"}>
                    <div className="bold">
                        Extras
                    </div>
                    <div className=" footer-item light-color">
                        <p>Rental Deal</p>
                        <p>Repair Shop</p>
                        <p>View Booking</p>
                        <p>Hire Companies</p>
                        <p>New Offers</p>
                    </div>
                </div>
                <div className={"footer-title"}>
                    <div className="bold">
                        Newsletter
                    </div>
                    <div className=" footer-item light-color">
                        <input type="text" placeholder={"Enter Address"} />
                        <button>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className={"footer-bottom"}>
                <h2>RentalX.</h2>
                <div className={"footer-text light-color"}>
                    <p>Reviews</p>
                    <p>Services</p>
                    <p>Partners</p>
                    <p>Feedbacks</p>
                    <p>Booking</p>
                </div>
                <div className="footer-icon">
                    <div>
                        <FaWhatsapp/>
                    </div>
                    <div>
                        <FaXTwitter/>
                    </div>
                    <div>
                        <FaGooglePlusG/>
                    </div>
                    <div>
                        <FaYoutube/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;