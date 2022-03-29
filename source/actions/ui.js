export const setSpinner = (payload) => ({
  type: 'SET_SPINNER',
  payload,
});

export const setVisibleModalFilter = (visible) => ({
  type: 'SET_VISIBLE_MODAL_FILTER',
  payload: visible,
});
