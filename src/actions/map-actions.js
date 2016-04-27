import { setActiveTileType } from './action-types';

export function setActiveTile(x, y, z) {
  return {
    type: setActiveTileType,
    x,
    y,
    z,
  };
}
