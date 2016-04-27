import { connect } from 'react-redux';
import { setActiveTile } from '../actions';
import HexCell from '../components/hex-cell';

function mapStateToProps({ map }) {
  return {
    active: map.active,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveTile: (coordinates) => dispatch(setActiveTile(coordinates)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HexCell);
