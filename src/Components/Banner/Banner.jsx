import { useEffect, useState } from "react";

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(1); // Keep track of the current slide
    const totalSlides = 6; // Total number of slides

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev % totalSlides) + 1); // Cycle through slides
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [totalSlides]);

    return (
        <div className="flex justify-center items-center p-5 bg-gray-100 w-full mx-auto rounded-2xl">
            <div className="carousel w-full sm:w-[500px] md:w-[700px] lg:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] relative">
                {/* Slide 1 */}
                <div
                    id="slide1"
                    className={`carousel-item relative w-full ${activeSlide === 1 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co/cc2FhkH/winter-blanket-and-cash.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 1"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(6)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(2)}>❯</button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div
                    id="slide2"
                    className={`carousel-item relative w-full ${activeSlide === 2 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co/WD427FP/images.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 2"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(1)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(3)}>❯</button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div
                    id="slide3"
                    className={`carousel-item relative w-full ${activeSlide === 3 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co/DDRNfNL/sylhet-aid1.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(2)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(4)}>❯</button>
                    </div>
                </div>

                {/* Slide 4 */}
                <div
                    id="slide4"
                    className={`carousel-item relative w-full ${activeSlide === 4 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co/myBd7nr/MA-Khulna-Bangladesh-1-1024x511.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 4"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(3)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(5)}>❯</button>
                    </div>
                </div>

                {/* Slide 5 */}
                <div
                    id="slide5"
                    className={`carousel-item relative w-full ${activeSlide === 5 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co/FqJyJyQ/Winter-Cloths5-at-Rajshahi-2023-scaled.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 5"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(4)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(6)}>❯</button>
                    </div>
                </div>

                {/* Slide 6 */}
                <div
                    id="slide6"
                    className={`carousel-item relative w-full ${activeSlide === 6 ? "block" : "hidden"}`}
                >
                    <img
                        src="https://i.ibb.co/jJFT1hQ/pict-large.jpg"
                        className="w-full h-full object-cover rounded-2xl"
                        alt="Slide 6"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={() => setActiveSlide(5)}>❮</button>
                        <button className="btn btn-circle" onClick={() => setActiveSlide(1)}>❯</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
