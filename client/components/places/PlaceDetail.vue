<template>
  <div class="counter-wrapper">
    <div v-if="place">
      <div class="card">
        {{ place.name }}
      </div>
      <!--<li>-->
        <!--<ul v-for="place in list.places">{{ place.name }}</ul>-->
      <!--</li>-->
      <!--<add_place></add_place>-->
    </div>
  </div>
</template>

<script>
//  import AddPlace from './AddPlace'
export default {
//  components: {
//    add_place: AddPlace
//  },
  computed: {
    place() {
      return this.$store.state.currentPlace
    }
  },
  mounted() {
    console.log(this.$route.params)
    this.$store.dispatch('getPlace', this.$route.params)
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