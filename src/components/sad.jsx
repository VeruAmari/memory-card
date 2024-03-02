import sadImage from '../assets/sad-love.gif';
function Sad() {
  console.log(sadImage);
  return (
    <div>
      <h2>This stash was empty.</h2>
      <img src={sadImage} alt="" />
    </div>
  );
}

export { Sad };
