const openMenuReducer = (state = false, { type }) => {
  switch (type) {
    case 'TOGGLE_MENU':
      return !state;

    default:
      return state;
  }
};

export default openMenuReducer;
