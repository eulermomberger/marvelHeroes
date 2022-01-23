export const refreshCharactersBoard = () => {
  return {
    type: 'REFRESH_CHARACTERS_BOARD'
  };
};

export const setCharactersBoard = payload => {
  return {
    type: 'SET_CHARACTERS_BOARD',
    payload
  };
};
