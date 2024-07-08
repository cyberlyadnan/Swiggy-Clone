import React from "react";

const MyCarousel = (props) => {
  const { imageId } = props;

  return (
    <>
      <div className="w-[100px] mx-3 cursor-pointer">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
        />
      </div>
    </>
  );
};

export default MyCarousel;
