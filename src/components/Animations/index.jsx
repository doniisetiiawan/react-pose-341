import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const index = () => (
  <StyleRoot>
    <div className="Animations" style={styles.fadeIn}>
      <h1>This text will be animated</h1>
    </div>
  </StyleRoot>
);

export default index;
