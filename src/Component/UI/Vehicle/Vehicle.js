import "./Vehicle.css"
import {BsFuelPump} from "react-icons/bs"
import {TbManualGearbox} from "react-icons/tb"
import {BiTachometer} from "react-icons/bi"
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from "swiper/modules";

const Vehicle = () => {
    let cars = [
        {
            name: "2020 honda pilot",
            Mark: "Honda",
            Year: "2020",
            travelled: "20k",
            transmission: "Auto",
            Fuel: "Gasoline",
            price: 31650,
            rent: 322,
            img: require("../../../assets/car/2020-Honda-Pilot.png")
        },
        {
            name: "Honda Civic Sedan Si",
            Mark: "Honda",
            Year: "2020",
            travelled: "35k",
            transmission: "Auto",
            Fuel: "Gasoline",
            price: 28315,
            rent: 252,
            img: require("../../../assets/car/civic sedan.png")
        },
        {
            name: "BMW 3 Series",
            Mark: "BMW",
            Year: "2020",
            travelled: "10k",
            transmission: "Auto",
            Fuel: "Gasoline",
            price: 41745,
            rent: 360,
            img: require("../../../assets/car/bmw sedan.png")
        },
        {
            name: "Audi A1 S-Line",
            Mark: "Audi",
            travelled: "45k",
            Year: "2012",
            transmission: "Manual",
            Fuel: "Gasoline",
            price: 9700,
            rent: 100,
            img: require("../../../assets/car/audi as1.png")
        },
        {
            name: "Toyota Camry",
            Mark: "Toyota",
            travelled: "39k",
            Year: "2006",
            transmission: "Manual",
            Fuel: "Hybrid",
            price: 7200,
            rent: 130,
            img: require("../../../assets/car/camry.png")
        },
        {
            name: "Mercedes-Benz GLK",
            Mark: "Mercedes",
            travelled: "30k",
            Year: "2006",
            transmission: "Manual",
            Fuel: "Diesel",
            price: 6800,
            rent: 190,
            img: require("../../../assets/car/White_Mercedes_Benz.png")
        },
        {
            name: "VW Passat CC",
            Mark: "VW",
            travelled: "20k",
            Year: "2008",
            transmission: "Automatic",
            Fuel: "Gasoline",
            price: 7800,
            rent: 100,
            img: require("../../../assets/car/vw.png")
        },
    ]
    let items = cars.map((item, index) => {
        return (
            <SwiperSlide>
                <div key={index} className="slider-container">
                    <div className="slider-content">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-img">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className="card-content">
                                    <div className="car-year light-color">
                                        {item.Year}
                                    </div>
                                    <h3 className="name">{item.name}</h3>
                                    <div className="car-price">
                                        <h3 className={"orange-color price"}>
                                            ${item.price}
                                        </h3>
                                        <h3 className={"light-color"}>
                                            ${item.rent}
                                            <span className="rent">/ month</span>
                                        </h3>
                                    </div>
                                    <div className="car-description light-color">
                                        <div>
                                            <BiTachometer/>
                                            {item.travelled}
                                        </div>
                                        <div>
                                            <TbManualGearbox/>
                                            {item.transmission}
                                        </div>
                                        <div>
                                            <BsFuelPump/>
                                            {item.Fuel}
                                        </div>
                                    </div>
                                    <button className={"card-btn"}>
                                        Rent Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })
    return (
        <div className="vehicle">
            <h3>Vehicle Models</h3>
            <h1 className={"bold"}>Our rental fleet</h1>
            <h5 className={"light-color"}>Choose from a variety of our amazing vehicle to rent for next adventure or
                business trip</h5>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1055: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                navigation={true}
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >
                {items}
            </Swiper>
        </div>
    );
}

export default Vehicle;