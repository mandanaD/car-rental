import {FaPlus, FaMinus} from "react-icons/fa6"
import {useState} from "react";
import "./FAQ.css"

const FAQ = () => {
    const[open,setOpen]=useState(-1)
    let AQ = [
        {
            Q: "What types of rental cars can I find on RentalX.?",
            A: "RentalX. includes major car rental companies such as Hertz, Thrifty, Dollar, Enterprise, Payless and more, so you get a selection of car rental deals for any destination. On momondo, you can find deals and discounts on all types of rental cars, whether it’s small, medium, large, SUV van, luxury, pickup truck, convertible and commercial vehicles, we’ve got you covered."
        },
        {
            Q: "How do I find the best car rental deal?",
            A: "Using our simple car rental comparison tool, we’ll help you find the cheapest rental cars. Simply search for a rental car in your destination of choice, and remember you can filter your results to compare prices for the types of rental cars you’re interested in.."
        },
        {
            Q: "Can I drop my rental car off at a different location?",
            A: "On RentalX. you do have the option to search for car rentals with drop-off at a different location. All you need to do is tick the ‘Return to a different location’ box in the search field and fill in your preferred drop-off location."
        },
        {
            Q: "How old do I need to be to rent a car?",
            A: "With many rental companies, you must be at least 21 years of age to rent a car, and any driver under 25 may have to pay a Young Driver Fee. Similarly, people aged 70+ may find some companies will charge a Senior Driver Fee, or may not rent to them at all.\n" +
                "So car rental for the under-25s or over-70s can be more expensive – which is one more reason to book with Rentalcars.com, as we work with all the big brands. Just check each car’s terms and conditions to see if your age would make any difference."
        }
    ]
    const showAnswers=(index)=>{
        if(open===index){
            setOpen(-1)
        }else {
            setOpen(index)
        }
    }
    let items = AQ.map((item, index) => {
        return (
            <div className={"item"} key={index}>
                <div className="question">
                    <div>
                        <span className={"num"}>{index + 1}.</span>
                        {item.Q}
                    </div>
                    <div className={"question-icon"} onClick={()=>{showAnswers(index)}}>
                        {open===index?<FaMinus/>:<FaPlus/>}
                    </div>
                </div>
                <div className={`answer ${open===index && "show"}`}>
                    {item.A}
                </div>
            </div>
        )
    })
    return (
        <div className="FAQ">
            <div id="text-clip">
                Frequently Asked Questions
            </div>
            {items}
        </div>
    );
}

export default FAQ;