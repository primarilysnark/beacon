export function title(state = { title: 'Beacon' }, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
