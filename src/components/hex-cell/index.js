import { Component, PropTypes } from 'react';
import './index.less';

const EMPTY_TILE = {
  label: null,
  hash: null,
};

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
    tiles: PropTypes.objectOf(PropTypes.shape({
      label: PropTypes.string,
      edges: PropTypes.shape({
        bottomLeft: PropTypes.bool,
        bottomRight: PropTypes.bool,
        centerLeft: PropTypes.bool,
        centerRight: PropTypes.bool,
        topLeft: PropTypes.bool,
        topRight: PropTypes.bool,
      }),
    })).isRequired,
    setActiveTile: PropTypes.func.isRequired,
  };

  setAsActiveTile = () => this.props.setActiveTile(this.props.coordinates);

  renderEdges(edges) {
    const edgeSet = [];

    if (edges.bottomLeft) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--bottom-left" key="bottom-left" />);
    }

    if (edges.bottomRight) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--bottom-right" key="bottom-right" />);
    }

    if (edges.centerLeft) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--center-left" key="center-left" />);
    }

    if (edges.centerRight) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--center-right" key="center-right" />);
    }

    if (edges.topLeft) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--top-left" key="top-left" />);
    }

    if (edges.topRight) {
      edgeSet.push(<div className="hex-cell__edge hex-cell__edge--top-right" key="top-right" />);
    }

    return edgeSet;
  }

  render() {
    const tile = this.props.tiles[`${this.props.coordinates.x},${this.props.coordinates.y},${this.props.coordinates.z}`] || EMPTY_TILE;
    const hexStyle = tile.hash == null ? null : {
      backgroundImage: `url(images/planets/${tile.hash}.png)`,
    };

    const isCenter = this.props.center.x === this.props.coordinates.x &&
      this.props.center.y === this.props.coordinates.y &&
      this.props.center.z === this.props.coordinates.z;

    return (
      <div className="hex-cell" style={hexStyle} onMouseOver={this.setAsActiveTile}>
        <div className="hex-cell__coordinate hex-cell__coordinate--x">{this.props.coordinates.x}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--y">{this.props.coordinates.y}</div>
        <div className="hex-cell__coordinate hex-cell__coordinate--z">{this.props.coordinates.z}</div>
        {tile.label == null ? null : (
          <div className="hex-cell__label">{tile.label}</div>
        )}
        {!isCenter ? null : (
          <div className="hex-cell__outline" />
        )}
        {tile.edges == null ? null : this.renderEdges(tile.edges)}
      </div>
    );
  }
}
