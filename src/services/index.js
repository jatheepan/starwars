import Vue from 'vue'

export default ({
  get (type, id) {
    return Vue.http.get(`http://swapi.co/api/${type}/${id}/`)
      .then(payload => {
        return new Promise((resolve, reject) => {
          if (payload.ok !== true) {
            reject(payload.responseText)
          }
          resolve(payload.data)
        })
      })
  },
  search (query) {
    return Vue.http.get(`http://swapi.co/api/search=${query}`)
      .then(payload => {
        return new Promise((resolve, reject) => {
          if (payload.ok !== true) {
            reject(payload.responseText)
          }
          resolve(payload.data)
        })
      })
  }
})
