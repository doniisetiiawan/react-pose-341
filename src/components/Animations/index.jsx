import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import './Animations.css';

const Circle = posed.div({
  normal: {
    scale: 1,
  },
  hover: {
    scale: 3,
  },
});

const StyledCircle = styled(Circle)`
  color: white;
  cursor: pointer;
  background: blue;
  line-height: 80px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

class index extends Component {
  state = {
    bg: 'blue',
    hover: false,
  };

  handleMouseEnter = () => {
    this.setState({
      hover: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hover: false,
    });
  };

  handleClick = () => {
    const colors = ['red', 'green', 'gray', 'orange', 'black', 'pink'];

    this.setState({
      bg: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  render() {
    return (
      <div className="Animations">
        <StyledCircle
          pose={this.state.hover ? 'hover' : 'normal'}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
          style={{ background: this.state.bg }}
        >
          Click me!
        </StyledCircle>
      </div>
    );
  }
}

export default index;
