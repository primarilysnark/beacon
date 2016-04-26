import React, { Component, PropTypes } from 'react';
import HexCell from '../hex-cell';
import './index.less';

export default class HexRow extends Component {
  static propTypes = {
    center: PropTypes.shape({
      x: PropTypes.number.isRequired,
    }).isRequired,
    isEven: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  };

  render() {
    const hexCells = [];
    const xOffset = Math.ceil(this.props.z / 2) + Math.ceil(this.props.width / 2) - this.props.center.x - 1;

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
