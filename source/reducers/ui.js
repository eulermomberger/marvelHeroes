const INITIAL_STATE = {
  spinner: false
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {

    case 'SET_SPINNER': {
      return {
        ...state,
        spinner: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
