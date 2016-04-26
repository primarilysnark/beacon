import { Component, PropTypes } from 'react';
import './index.less';

export default class HexCell extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className="hex-cell">
        <div className="hex-cell__coordinate hex-cell__coordinate--x">{this.props.x}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--y">{this.props.y}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--z">{this.props.z}</div>
      </div>
    );
  }
}
