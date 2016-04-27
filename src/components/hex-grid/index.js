import React, { Component, PropTypes } from 'react';
import HexRow from '../hex-row';
import './index.less';

export default class HexGrid extends Component {
  static propTypes = {
    center: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  };

  render() {
    const hexRows = [];
    const rowOffset = Math.ceil(this.props.height / 2) - 1;

    for (let index = 0; index < this.props.height; index++) {
      const isEven = index % 2 === 1;

      hexRows.push(<HexRow
        center={this.props.center}
        height={this.props.height}
        isEven={isEven}
        key={index}
        width={this.props.width - isEven}
        zAbsolute={index - rowOffset}
      />);
    }

    return (
      <div className="hex-grid">
        {hexRows}
      </div>
    );
  }
}
