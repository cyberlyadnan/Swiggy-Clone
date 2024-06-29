import React from 'react';


const MyCarousel = (props) => {
  const {imageId} = props
  console.log(props.action.link)

  // 83631
  return (
    <>
    <div className='w-1/12 mx-3 cursor-pointer'>
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}/>
    </div>
    </>
  );
};

export default MyCarousel;
