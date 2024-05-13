// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateBudget() {
    const [product, setProduct] = useState({
        title: '',
        transport: '',
        accommodations: '',
        tickets: '',
        foods: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/budgetpost', product);
            console.log('Response:', response.data);
            // Optionally clear the form or give user feedback
            alert('Product added successfully!');
            navigate('/budgetpost');
            setProduct({ title: '', tickets:'', transport: '', accommodations: '', foods: '' });
        } catch (error) {
            console.error('Error posting product:', error);
            alert('Failed to add product!');
        }
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: '20px auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: '#fff'
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px'
    };

    return (
        <div>
            <div style={{marginLeft:'500px', marginBottom:'70px'}}>
                <h1>Create a BudgetPlan</h1>
            </div>
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                type="text"
                name="title"
                value={product.title}
                onChange={handleChange}
                placeholder="Trip Title"
                style={inputStyle}
                required
            />
            <input
                type="number"
                name="transport"
                value={product.transport}
                onChange={handleChange}
                placeholder="Transport Cost"
                style={inputStyle}
                required
            />
            <input
                type="number"
                name="accommodations"
                value={product.accommodations}
                onChange={handleChange}
                placeholder="Accommodations"
                style={inputStyle}
                required
            />
            <input
                type="number"
                name="tickets"
                value={product.tickets}
                onChange={handleChange}
                placeholder="Ticket Cost"
                style={inputStyle}
                required
            />

            <input
                type="number"
                name="foods"
                value={product.foods}
                onChange={handleChange}
                placeholder="Foods Cost"
                style={inputStyle}
                required
            />
            <button type="submit" style={buttonStyle}>Add Product</button>
        </form>
        </div>
    );
}

export default CreateBudget;
