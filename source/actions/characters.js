export const refreshCharactersBoard = () => ({
  type: 'REFRESH_CHARACTERS_BOARD',
});

export const setCharactersBoard = (payload) => ({
  type: 'SET_CHARACTERS_BOARD',
  payload,
});

export const resetCharactersShow = () => ({
  type: 'RESET_CHARACTERS_SHOW',
});

export const setCharactersShow = (character) => ({
  type: 'SET_CHARACTERS_SHOW',
  payload: character,
});
