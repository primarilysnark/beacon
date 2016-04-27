import { setActiveTileType } from '../actions/action-types';

const DEFAULT_MAP = {
  active: {
    x: 0,
    y: 0,
    z: 0,
  },
  center: {
    x: 0,
    y: 0,
    z: 0,
  },
};

export function map(state = DEFAULT_MAP, action) {
  const { type } = action;

  switch (type) {
    case setActiveTileType:
      return {
        ...state,
        active: {
          x: action.x,
          y: action.y,
          z: action.z,
        },
      };

    default:
      return state;
  }
}
