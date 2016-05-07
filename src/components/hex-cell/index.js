import { Component, PropTypes } from 'react';
import './index.less';

export default class HexCell extends Component {
  static propTypes = {
    center: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    coordinates: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    edges: PropTypes.shape({
      bottomLeft: PropTypes.bool,
      bottomRight: PropTypes.bool,
      centerLeft: PropTypes.bool,
      centerRight: PropTypes.bool,
      topLeft: PropTypes.bool,
      topRight: PropTypes.bool,
    }).isRequired,
    tile: PropTypes.shape({
      hash: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
    setActiveTile: PropTypes.func.isRequired,
  };

  setAsActiveTile = () => this.props.setActiveTile(this.props.coordinates);

  render() {
    const hexStyle = this.props.tile == null || this.props.tile.hash == null ? null : {
      backgroundImage: `url(images/planets/${this.props.tile.hash}.png)`,
    };

    const isCenter = this.props.center.x === this.props.coordinates.x &&
      this.props.center.y === this.props.coordinates.y &&
      this.props.center.z === this.props.coordinates.z;

    const edgeSet = [];

    if (this.props.edges.bottomLeft) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--bottom-left" key="bottom-left" />);
    }

    if (this.props.edges.bottomRight) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--bottom-right" key="bottom-right" />);
    }

    if (this.props.edges.centerLeft) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--center-left" key="center-left" />);
    }

    if (this.props.edges.centerRight) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--center-right" key="center-right" />);
    }

    if (this.props.edges.topLeft) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--top-left" key="top-left" />);
    }

    if (this.props.edges.topRight) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--top-right" key="top-right" />);
    }

    return (
      <div className="hex-cell" style={hexStyle} onMouseOver={this.setAsActiveTile}>
        <div className="hex-cell__coordinate hex-cell__coordinate--x">{this.props.coordinates.x}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--y">{this.props.coordinates.y}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--z">{this.props.coordinates.z}</div>
        {this.props.tile == null || this.props.tile.label == null ? null : (
          <div className="hex-cell__label">{this.props.tile.label}</div>
        )}
        {!isCenter ? null : (
          <div className="hex-cell__outline" />
        )}
        {edgeSet}
      </div>
    );
  }
}
