import { Component, PropTypes } from 'react';
import './index.less';

const EMPTY_TILE = {
  label: null,
  hash: null,
};

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
    tiles: PropTypes.objectOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
    })).isRequired,
    setActiveTile: PropTypes.func.isRequired,
  };

  setAsActiveTile = () => this.props.setActiveTile(this.props.coordinates);

  render() {
    const tile = this.props.tiles[`${this.props.coordinates.x},${this.props.coordinates.y},${this.props.coordinates.z}`] || EMPTY_TILE;
    const hexStyle = tile.hash == null ? null : {
      backgroundImage: `url(images/planets/${tile.hash}.png)`,
    };

    return (
      <div className="hex-cell" style={hexStyle} onMouseOver={this.setAsActiveTile}>
        <div className="hex-cell__coordinate hex-cell__coordinate--x">{this.props.coordinates.x}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--y">{this.props.coordinates.y}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--z">{this.props.coordinates.z}</div>
        {tile.label == null ? null : (
          <div className="hex-cell__label">{tile.label}</div>
        )}
      </div>
    );
  }
}
