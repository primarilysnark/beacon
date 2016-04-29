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

const DEFAULT_TILES = {
  '0,0,0': {
    label: 'Lothal',
  },
};

export function map(state = DEFAULT_MAP, action) {
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

export function tiles(state = DEFAULT_TILES, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
