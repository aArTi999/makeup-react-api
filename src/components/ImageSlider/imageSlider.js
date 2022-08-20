import React from 'react';

const ImageSlider =() => {
  return (
    <div style={{'width': '100%','height': '80vh'}}>
      <img style={{'objectFit': 'cover','width': '100%','height': '80vh'}} src='https://source.unsplash.com/random/?cosmetics' alt='random image' />
    </div>
  );
}

export default ImageSlider;
