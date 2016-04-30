import { setActiveTileType } from '../actions/action-types';

export function map(state = {}, action) {
  const { type } = action;

  switch (type) {
    case setActiveTileType:
      return {
        ...state,
        active: action.coordinates,
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
