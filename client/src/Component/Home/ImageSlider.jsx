import React, { useState, useEffect } from 'react';
import '../../Styles/Home/ImageSlider.css';  // Make sure to create this CSS file for styling

const ImageSlider = ({ images }) => {
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
        const next = (current + 1) % images.length; // Move to the next image, wrap around to the first image
        const id = setTimeout(() => setCurrent(next), 3000); // Change image every 3 seconds
        return () => clearTimeout(id); // Clean up the timeout
    }, [current, images.length]);

    return (
        <div className="image-slider">
            {images.map((image, index) => (
                <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
                    {index === current && (<img src={image} alt={`Slide ${index}`} />)}
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;
