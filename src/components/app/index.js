import { Component, PropTypes } from 'react';
import './index.less';

export default class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}
