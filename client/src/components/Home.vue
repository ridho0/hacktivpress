<template>
  <div class="home">
    <h1>hai</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'allArticles',
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
