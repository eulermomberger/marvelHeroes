export default (api, params) => ({

  fetch: () => api.get('/characters', { params })

});
