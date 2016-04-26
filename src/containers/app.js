import { connect } from 'react-redux';
import App from '../components/app';

function mapStateToProps({ map }) {
  return { map };
}

export default connect(mapStateToProps)(App);
