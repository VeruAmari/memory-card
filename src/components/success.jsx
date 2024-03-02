import happyImage from '../assets/happy-image.png';

function Success() {
  return (
    <div>
      <h2>We found them all! Thank you!</h2>
      <img src={happyImage} alt="" />
    </div>
  );
}

export { Success };
