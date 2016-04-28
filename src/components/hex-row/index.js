import React, { Component, PropTypes } from 'react';
import HexCell from '../../containers/hex-cell.jsx';
import './index.less';

export default class HexRow extends Component {
  static propTypes = {
    center: PropTypes.shape({
      x: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    height: PropTypes.number.isRequired,
    isEven: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    zAbsolute: PropTypes.number.isRequired,
  };

  render() {
    let xOffset = Math.floor(this.props.zAbsolute / 2) + Math.floor(this.props.width / 2) - this.props.center.x;

    if (!this.props.isEven && Math.floor((this.props.height - 1) / 2) % 2 === 1) {
      xOffset += 1;
    }

    if (this.props.isEven && this.props.width % 2 === 1) {
      xOffset += 1;
    }

    return (
      <div className={`hex-row ${this.props.isEven ? ' hex-row--even' : ''}`}>
        {Array.apply(null, {
          length: this.props.width,
        }).map((cell, index) => (
          <HexCell
            coordinates={{
              x: index - xOffset,
              y: xOffset - this.props.zAbsolute - this.props.center.z - index,
              z: this.props.zAbsolute + this.props.center.z,
            }}
            key={index}
          />
        ))}
      </div>
    );
  }
}
