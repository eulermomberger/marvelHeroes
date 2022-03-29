const INITIAL_STATE = {
  spinner: false,
  visibleModalFilter: false,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'SET_SPINNER': {
      return {
        ...state,
        spinner: action.payload,
      };
    }

    case 'SET_VISIBLE_MODAL_FILTER': {
      return {
        ...state,
        visibleModalFilter: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
