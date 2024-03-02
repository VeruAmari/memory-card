import sadImage from '../assets/sad-love.gif';
function Sad() {
  console.log(sadImage);
  return (
    <div>
      <h1>This stash was empty.</h1>
      <img src={sadImage} alt="" />
    </div>
  );
}

export { Sad };
