import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    '/src/components/Images/image1.jpg',
    '/src/components/Images/image2.jpg',
    '/src/components/Images/image3.jpg',
    '/src/components/Images/image4.jpg'
];

const ImageSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,    // This ensures only one image shows at a time
        slidesToScroll: 1,
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide-container">
                        <img 
                            src={image} 
                            alt={`Slide ${index}`} 
                            className="w-full h-auto rounded-lg" 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
