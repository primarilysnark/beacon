import { Component, PropTypes } from 'react';
import './index.less';

export default class HexCell extends Component {
  static propTypes = {
    active: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    setActiveTile: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  };

  setAsActiveTile = () => this.props.setActiveTile(this.props.x, this.props.y, this.props.z);

  render() {
    const isActive = this.props.active.x === this.props.x || this.props.active.y === this.props.y || this.props.active.z === this.props.z;

    return (
      <div className={`hex-cell ${isActive ? ' hex-cell--active' : ''}`} onMouseOver={this.setAsActiveTile}>
        <div className="hex-cell__coordinate hex-cell__coordinate--x">{this.props.x}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--y">{this.props.y}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--z">{this.props.z}</div>
      </div>
    );
  }
}
