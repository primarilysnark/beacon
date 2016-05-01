/* eslint react/no-did-mount-set-state: 0 */
import { Component, PropTypes } from 'react';
import HexGrid from '../hex-grid';
import './index.less';

const HEX_WIDTH = 57;
const HEX_INCREMENTAL_HEIGHT = 45;

export default class App extends Component {
  static propTypes = {
    map: PropTypes.shape({
      center: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        z: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    setCenterTile: PropTypes.func.isRequired,
  };

  state = {
    height: 1,
    width: 1,
  }

  componentDidMount() {
    this.resizeHexGrid();

    window.addEventListener('resize', this.resizeHexGrid, false);
    window.addEventListener('keypress', this.shiftMap, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHexGrid);
    window.removeEventListener('keypress', this.resizeHexGrid);
  }

  resizeHexGrid = () => {
    this.setState({
      height: Math.floor(window.innerHeight / HEX_INCREMENTAL_HEIGHT) - 1,
      width: Math.floor(window.innerWidth / HEX_WIDTH),
    });
  }

  shiftMap = (event) => {
    const coordinates = {
      x: this.props.map.center.x,
      y: this.props.map.center.y,
      z: this.props.map.center.z,
    };

    switch (event.code) {
      case 'KeyA':
        coordinates.x--;
        coordinates.y++;
        break;

      case 'KeyC':
        coordinates.y--;
        coordinates.z++;
        break;

      case 'KeyD':
        coordinates.x++;
        coordinates.y--;
        break;

      case 'KeyE':
        coordinates.x++;
        coordinates.z--;
        break;

      case 'KeyH':
        coordinates.x = 0;
        coordinates.y = 0;
        coordinates.z = 0;
        break;

      case 'KeyQ':
        coordinates.y++;
        coordinates.z--;
        break;

      case 'KeyZ':
        coordinates.x--;
        coordinates.z++;
        break;

      default:
    }

    this.props.setCenterTile(coordinates);
  }

  render() {
    return (
      <div className="app">
        <HexGrid
          center={this.props.map.center}
          height={this.state.height}
          width={this.state.width}
        />
      </div>
    );
  }
}
