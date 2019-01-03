import React from 'react';
import { fadeIn, bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce'),
  },
};

const index = () => (
  <StyleRoot>
    <div className="Animations" style={styles.bounce}>
      <h1>This text will be animated</h1>
    </div>
  </StyleRoot>
);

export default index;
