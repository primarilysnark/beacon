import { connect } from 'react-redux';
import App from '../components/app';

function mapStateToProps({ title }) {
  return {
    title: title.title,
  };
}

export default connect(mapStateToProps)(App);
