import { Component, PropTypes } from 'react';
import './index.less';

export default class HexCell extends Component {
  static propTypes = {
    active: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    coordinates: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    setActiveTile: PropTypes.func.isRequired,
  };

  setAsActiveTile = () => this.props.setActiveTile(this.props.coordinates.x, this.props.coordinates.y, this.props.coordinates.z);

  render() {
    const isActive = this.props.active.x === this.props.coordinates.x ||
      this.props.active.y === this.props.coordinates.y ||
      this.props.active.z === this.props.coordinates.z;

    return (
      <div className={`hex-cell ${isActive ? ' hex-cell--active' : ''}`} onMouseOver={this.setAsActiveTile}>
        <div className="hex-cell__coordinate hex-cell__coordinate--x">{this.props.coordinates.x}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--y">{this.props.coordinates.y}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--z">{this.props.coordinates.z}</div>
      </div>
    );
  }
}
