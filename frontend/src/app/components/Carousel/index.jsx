import React, { Component } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

// Импортируем изображения
import one from '../../../assets/images/one.png';
import two from '../../../assets/images/two.png';
import three from '../../../assets/images/three.png';

class Carousel extends Component {
    render() {
        return (
            <ReactCarousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                stopOnHover={false}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={true}
                transitionTime={500}
                centerMode={true}
                centerSlidePercentage={80}
                showIndicators={true}
                selectedItem={0}
            >
                <div className="carousel-slide">
                    <img
                        src={one.src}
                        alt="One"
                        className="carousel-image"
                    />
                </div>
                <div className="carousel-slide">
                    <img
                        src={two.src}
                        alt="Two"
                        className="carousel-image"
                    />
                </div>
                <div className="carousel-slide">
                    <img
                        src={three.src}
                        alt="Three"
                        className="carousel-image"
                    />
                </div>
            </ReactCarousel>
        );
    }
}

export default Carousel;    
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
{/* <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/> */}