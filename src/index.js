import { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { render } from 'react-dom';
import { rootReducer } from './reducers';
import AppContainer from './containers/app';
import mapData from '../data/map.json';
import tilesData from '../data/tiles.json';
import thunkMiddleware from 'redux-thunk';

class Beacon extends Component {
  store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer, {
    map: mapData,
    tiles: tilesData,
  });

  render() {
    return (
      <Provider store={this.store}>
        <AppContainer />
      </Provider>
    );
  }
}

render(
  <Beacon />,
  document.getElementById('app')
);
