import React from 'react'
import ImageSlider from './ImageSlider';
import image1 from '../../Styles/Images/background2.jpg';
import image2 from '../../Styles/Images/background3.jpg';
import image3 from '../../Styles/Images/background4.jpg';
import image4 from '../../Styles/Images/background5.jpg';
import image5 from '../../Styles/Images/background6.jpg';
import StaticOverlay from './StaticOverlay';
// import GroupComponent from './GroupComponent';

const images = [image1, image2, image3, image4, image5];

export default function HomeScreen() {
    
  return (
    <div >
        <ImageSlider images={images} />
        <StaticOverlay/>
        {/* <GroupComponent/> */}
    </div>
  )
}