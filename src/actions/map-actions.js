import { setActiveTileType, setCenterTileType } from './action-types';

export function setActiveTile(coordinates) {
  return {
    type: setActiveTileType,
    coordinates,
  };
}

export function setCenterTile(coordinates) {
  return {
    type: setCenterTileType,
    coordinates,
  };
}
