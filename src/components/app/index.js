/* eslint react/no-did-mount-set-state: 0 */
import { Component, PropTypes } from 'react';
import HexGrid from '../hex-grid';
import './index.less';

const HEX_WIDTH = 56;
const HEX_INCREMENTAL_HEIGHT = 45;

export default class App extends Component {
  static propTypes = {
    map: PropTypes.shape({
      center: PropTypes.object.isRequired,
    }).isRequired,
  };

  state = {
    height: 1,
    width: 1,
  }

  componentDidMount() {
    this.setState({
      height: Math.floor(window.innerHeight / HEX_INCREMENTAL_HEIGHT) - 1,
      width: Math.floor(window.innerWidth / HEX_WIDTH),
    });
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
