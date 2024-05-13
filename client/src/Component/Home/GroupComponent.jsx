import React from 'react'
import '../../Styles/HomePage/GroupStyles.css'
import backgroundImage from '../../Styles/Images/background1.jpg';

export default function GroupComponent() {
  return (
    <div className='container'>
       <button className="image-button" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <span className="button-text">Table Plant</span>
        </button>

        <button className="image-button" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <span className="button-text">Table Plant</span>
        </button>

        <button className="image-button" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <span className="button-text">Table Plant</span>
        </button>
    </div>
  )
}
