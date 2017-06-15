export default {
  GET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_ERROR(state, value) {
    state.error = value
  }
}
