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

export const resetCharactersShow = () => {
  return {
    type: 'RESET_CHARACTERS_SHOW'
  };
};

export const setCharactersShow = character => {
  return {
    type: 'SET_CHARACTERS_SHOW',
    payload: character
  };
};
