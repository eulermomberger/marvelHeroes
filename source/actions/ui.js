export const setSpinner = payload => {
  return {
    type: 'SET_SPINNER',
    payload
  };
}

export const setVisibleModalFilter = visible => {
  return {
    type: 'SET_VISIBLE_MODAL_FILTER',
    payload: visible
  };
}
