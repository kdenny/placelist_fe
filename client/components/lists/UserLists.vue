<template>
  <div class="counter-wrapper">
    <div v-if="userLists">

      <div class="card" v-for="list in userLists" v-on:click="goToList(list)">
        <h1>{{ list.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userLists() {
      return this.$store.state.userLists
    }
  },
  mounted() {
    console.log(this.$route.params)
    this.$store.dispatch('getUserLists', this.$route.params)
  },
  methods: {
    goToList(list) {
      this.$router.push({ name: 'ListDetail', params: { username: list.author.username, listSlug: list.slug }})
    }
  }
}
</script>

<style>
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>