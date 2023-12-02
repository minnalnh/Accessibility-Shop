import React, { useState, useEffect, useRef } from 'react';

const SlideShow = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const slideRef = useRef(null);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    const plusSlides = (n) => {
        setSlideIndex(slideIndex + n);
    }

    const showSlides = (n) => {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if(n > slides.length) {
            setSlideIndex(1);
        } else if(n < 1) {
            setSlideIndex(slides.length);
        }

        for(let i = 0; i < slides.length; i++) {
            if(slideIndex !== 0) {
                slides[i].style.display = "none";
            }
        }

        for(let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }

        if(slideIndex >= 1 && slideIndex <= slides.length) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        if(slideIndex === 1) {
            slideRef.current.classList.remove("slide-3")
            slideRef.current.classList.add("slide-1");
            console.log(slideRef);

        } else if(slideIndex === 2) {
            slideRef.current.classList.remove("slide-1");
            slideRef.current.classList.add("slide-2");
            console.log(slideRef);

        } else if(slideIndex === 3) {
            slideRef.current.classList.remove("slide-2");
            slideRef.current.classList.add("slide-3");
            console.log(slideRef);
        }
    }

    return (
        <div ref={slideRef} className="slideshow-container slide-1">
            <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <section className="slideshow-text">
                    <h1 className="slideshow-caption">Paint With Class</h1>
                    <p className="slideshow-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia maxime deleniti repellat, nisi, delectus, quod libero quidem accusantium excepturi assumenda unde aperiam totam harum porro aliquam itaque tempore dolore ad id exercitationem consequuntur corrupti minus nesciunt corporis. Praesentium rem, quis natus modi minus a atque eos ducimus. Quos, autem aliquam.</p>
                </section>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">2 / 3</div>
                <section className="slideshow-text">
                    <h1 className="slideshow-caption">Paint With CS</h1>
                    <p className="slideshow-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia maxime deleniti repellat, nisi, delectus, quod libero quidem accusantium excepturi assumenda unde aperiam totam harum porro aliquam itaque tempore dolore ad id exercitationem consequuntur corrupti minus nesciunt corporis. Praesentium rem, quis natus modi minus a atque eos ducimus. Quos, autem aliquam.</p>
                </section>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <section className="slideshow-text">
                    <h1 className="slideshow-caption">Paint With Class</h1>
                    <p className="slideshow-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia maxime deleniti repellat, nisi, delectus, quod libero quidem accusantium excepturi assumenda unde aperiam totam harum porro aliquam itaque tempore dolore ad id exercitationem consequuntur corrupti minus nesciunt corporis. Praesentium rem, quis natus modi minus a atque eos ducimus. Quos, autem aliquam.</p>
                </section>
            </div>

            <button className="prev" onClick={() => plusSlides(-1)}>&#10094; Previous Slide</button>
            <button className="next" onClick={() => plusSlides(1)}>Next Slide &#10095;</button>
      
            <div style={{textAlign: "center"}} className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}

export default SlideShow;