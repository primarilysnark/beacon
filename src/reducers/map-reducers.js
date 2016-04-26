const DEFAULT_MAP = {
  center: {
    x: 0,
    y: 0,
    z: 0,
  },
};

export function map(state = DEFAULT_MAP, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
