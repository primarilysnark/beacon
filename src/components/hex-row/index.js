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
    z: PropTypes.number.isRequired,
  };

  render() {
    const hexCells = [];
    let xOffset = Math.floor((this.props.z - this.props.center.z) / 2) + Math.floor(this.props.width / 2) - this.props.center.x;

    if (!this.props.isEven && Math.floor((this.props.height - 1) / 2) % 2 === 1) {
      xOffset += 1;
    }

    for (let index = 0; index < this.props.width; index++) {
      hexCells.push(<HexCell key={index} x={index - xOffset} y={xOffset - this.props.z - index} z={this.props.z} />);
    }

    return (
      <div className={`hex-row ${this.props.isEven ? ' hex-row--even' : ''}`}>
        {hexCells}
      </div>
    );
  }
}
