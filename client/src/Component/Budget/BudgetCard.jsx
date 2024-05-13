// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
    // Card Container Style
    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '240px',
        margin: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        transition: 'transform 0.2s',
        cursor: 'pointer'
    };


    // Content Container Style
    const contentStyle = {
        padding: '15px',
        textAlign: 'center'
    };

    // Product Name Style
    const nameStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '5px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };

    // Review Style
    const reviewStyle = {
        fontSize: '14px',
        color: '#666',
        margin: '5px 0'
    };

    // Price Style
    const priceStyle = {
        fontSize: '16px',
        fontWeight: '500',
        color: '#0056b3',
        marginBottom: '5px'
    };

    // Hover effect
    const handleMouseEnter = e => {
        e.currentTarget.style.transform = 'scale(1.05)';
    };

    const handleMouseLeave = e => {
        e.currentTarget.style.transform = 'none';
    };

    return (
        <div style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <div style={{marginLeft:'500px', marginBottom:'70px'}}>
                <h1>Ongoing Budget Planes</h1>
            </div>
            <div style={contentStyle}>
                <h3 style={nameStyle}>{product.title}</h3>
                <p style={reviewStyle}> Accommodations: {product.accommodations}</p>
                <p style={priceStyle}> transport: {product.transport}</p>
                <p style={priceStyle}> tickets: {product.tickets}</p>
                <p style={priceStyle}> foods: {product.foods}</p>
            </div>
        </div>
    );
}

export default ProductCard;
