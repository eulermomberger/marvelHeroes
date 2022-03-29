const INITIAL_STATE = {
  board: {
    characters: [],
    params: {
      offset: 0,
      nameStartsWith: null,
    },
    refresh: false,
    total: 0,
  },
  show: {},
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'REFRESH_CHARACTERS_BOARD': {
      return {
        ...state,
        board: {
          ...state.board,
          refresh: true,
        },
      };
    }

    case 'SET_CHARACTERS_BOARD': {
      const { params } = action.payload;
      let { characters, total } = action.payload;

      if (characters.length === 0) {
        total = state.board.characters.length;
      }

      if (params?.offset > 0) {
        characters = state.board.characters.concat(characters);
      }

      return {
        ...state,
        board: {
          characters,
          params,
          total,
          refresh: false,
        },
      };
    }

    case 'RESET_CHARACTERS_SHOW': {
      return {
        ...state,
        show: {},
      };
    }

    case 'SET_CHARACTERS_SHOW': {
      return {
        ...state,
        show: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
