import happyImage from '../assets/happy-image.png';

function Success() {
  return (
    <div>
      <h1>We found them all! Thank you!</h1>
      <img src={happyImage} alt="" />
    </div>
  );
}

export { Success };
