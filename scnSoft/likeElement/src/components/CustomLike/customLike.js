import React from 'react';
import backgroundImage from './like.png';
import backgroundImageHover from './like-hover.png';
import { useState } from 'react';


const CustomLike = () => {

    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const customBtnStyle = {
    width: "40px",
    height: "40px",
    margin: "0 auto",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: "256ms",
    backgroundImage: isHover ? `url(${backgroundImageHover})` : `url(${backgroundImage})`,
    };

    const activateLike = () => {
        console.log("You just press 'Like!'");
    };

    return (
       <button 
            style={customBtnStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='custom-like-btn' 
            name="customLikeBtn"
            onClick={activateLike}>
        </button>
    )
}

export default CustomLike;