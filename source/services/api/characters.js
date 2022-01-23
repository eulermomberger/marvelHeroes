export default (api, defaultParams) => ({

  fetch: params => api.get('/characters', { params: { ...params, ...defaultParams } })

});
