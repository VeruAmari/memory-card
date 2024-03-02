import { useEffect, useState } from 'react';
/* eslint-disable react/prop-types */

function Credit({ imageData }) {
  const [images, setImages] = useState('');
  const [toggleFooter, setToggleFooter] = useState(false);
  useEffect(() => {
    let ignore = false;
    let imgs = [];
    if (imageData) {
      for (let i = 0; i < imageData.photos.length; i++) {
        const img = imageData.photos[i];
        const newImage = (
          <div key={'credit-' + i} className="photo">
            <legend>Photo by {img.photographer} at Pexels</legend>
            <a href={img.url}>
              <img src={img.src.small} alt={img.alt} />
            </a>
          </div>
        );
        imgs.push(newImage);
      }
      if (!ignore) {
        setImages(imgs);
      }
      return () => {
        ignore = true;
      };
    }
  }, [imageData]);

  useEffect(() => {}, [toggleFooter]);

  function openCloseFooter() {
    setToggleFooter((current) => !current);
  }
  const footerHeight = toggleFooter ? 'auto' : '0px';
  const footerDisplay = toggleFooter ? 'visible' : 'hidden';
  const viewHide = toggleFooter ? 'Hide' : 'View';
  const styles = {
    height: footerHeight,
    overflow: 'hidden',
    visibility: footerDisplay,
  };
  return (
    <div onClick={openCloseFooter} className="footer">
      <div className="footer-description">{viewHide} Photos Credit</div>
      <div className="footer credit" style={styles}>
        {images}
      </div>
    </div>
  );
}
export { Credit };
