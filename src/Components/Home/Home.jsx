import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../About/About";
import Banner from "../Banner/Banner";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import HowItWorks from "../HowItWorks/HowItWorks";
import Navbar from "../Navbar/Navbar";
import VolunteerStories from "../VolunteerStories/VolunteerStories";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
    }, []);

    return (
        <div>
            {/* Banner Section */}
            <section data-aos="zoom-in" className="mb-8">
                <Banner></Banner>
            </section>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4 mt-4 w-11/12 mx-auto">
                {/* Left Column */}
                <section
                    className="w-full md:w-1/2"
                    data-aos="fade-right"
                >
                    <About></About>
                    <HowItWorks></HowItWorks>
                </section>

                {/* Right Column */}
                <section
                    className="w-full md:w-1/2"
                    data-aos="fade-left"
                >
                    <VolunteerStories></VolunteerStories>
                    <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
                </section>
            </div>
        </div>
    );
};

export default Home;
