import { TypeAnimation } from 'react-type-animation';
 
const Animation = () => {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed once, initially
      'Movies',
      3000,
      'Series',
      3000,
      'Animes',
      3000,
    ]}
    speed={50}
    style={{ fontSize: '4rem' , color:'greenyellow', fontFamily:'sans-serif'}}
    repeat={Infinity}
  />
  );
};

export default Animation;