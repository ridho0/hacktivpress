export default {
  getHouses({commit}) {
    axios.get('http://localhost:3000/article')
      .then((res)=> {
        commit('GET_ARTICLES', res.data)
      })
      .catch((err)=> {
        commit('SET_ERROR', true)
        setTimeout(()=> {commit('SET_ERROR', false)}, 3500)
      })
  }
}
