export default (api, defaultParams) => ({

  fetch: params => api.get('/characters', { params: { ...params, ...defaultParams } }),

  fetchOne: id => api.get(`/characters/${id}`, { params: defaultParams })

});
