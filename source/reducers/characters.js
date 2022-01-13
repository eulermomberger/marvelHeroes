const INITIAL_STATE = {
  board: {
    characters: [],
    page: 1,
    refresh: false,
    total: 0
  }
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {

    case 'REFRESH_CHARACTERS_BOARD': {
      return {
        ...state,
        board: {
          ...state.board,
          refresh: true
        }
      };
    }

    case 'SET_CHARACTERS_BOARD': {
      const { page } = action.payload;
      let { characters, total } = action.payload;

      if (characters.length == 0) {
        total = state.board.characters.length;
      }

      if (page > 0) {
        characters = state.board.characters.concat(characters);
      }

      return {
        ...state,
        board: {
          characters,
          page,
          total,
          refresh: false
        }
      };
    }

    default: {
      return state;
    }
  }
}
