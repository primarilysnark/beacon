import { setActiveTileType, setCenterTileType } from '../actions/action-types';

export function map(state = {}, action) {
  const { type } = action;

  switch (type) {
    case setActiveTileType:
      return {
        ...state,
        active: action.coordinates,
      };

    case setCenterTileType:
      return {
        ...state,
        center: action.coordinates,
      };

    default:
      return state;
  }
}

export function tiles(state = {}, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
