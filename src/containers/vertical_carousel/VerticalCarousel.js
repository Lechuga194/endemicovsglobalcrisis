import React, {useState, useEffect} from 'react';

function VerticalCarousel(props){

    let dummySlides = [
        {
            id: 0,
            header: "HOLA"
        },
        {
            id: 1,
            header: "COMO"
        },
        {
            id: 2,
            header: "ESTAS?"
        }
    ]

    const [slides, setSlides] = useState(dummySlides);
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = () => {
        setCurrentSlide(1);
        console.log("slide cambio");
    }

    return(
        <div class="verticalcarousel" onScroll={changeSlide}>
            <h1>{slides[currentSlide].header}</h1>
            <h2>{slides[currentSlide].id}</h2>
        </div>
    );
}

export default VerticalCarousel;