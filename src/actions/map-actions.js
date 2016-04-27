import { setActiveTileType } from './action-types';

export function setActiveTile(coordinates) {
  return {
    type: setActiveTileType,
    coordinates,
  };
}
