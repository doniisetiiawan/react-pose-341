import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

class index extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <StyleRoot>
        <div className="Animations" style={styles.fadeIn}>
          <h1>This text will be animated</h1>
        </div>
      </StyleRoot>
    );
  }
}

export default index;
