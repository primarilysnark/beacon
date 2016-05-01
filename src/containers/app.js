import { connect } from 'react-redux';
import { setCenterTile } from '../actions';
import App from '../components/app';

function mapStateToProps({ map }) {
  return { map };
}

function mapDispatchToProps(dispatch) {
  return {
    setCenterTile: (coordinates) => dispatch(setCenterTile(coordinates)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
