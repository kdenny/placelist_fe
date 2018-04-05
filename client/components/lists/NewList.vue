<template>
  <div class="counter-wrapper">
    <b-form>
      <b-form-group id="exampleInputGroup1"
                    label="List title:"
                    label-for="exampleInput1"
                    description="Add a title for your list">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Enter title">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="List Type:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.type"
                      required
                      placeholder="Enter list type">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Description:"
                    label-for="exampleInput3">
        <b-form-textarea id="exampleInputGroup3"
                     v-model="text"
                     placeholder="Enter an optional description of your list"
                     :rows="2"
                     :max-rows="6">
        </b-form-textarea>
      </b-form-group>
    </b-form>
    <b-button :size="lg" :variant="primary" v-on:click="submitList()">
        Add List
    </b-button>
  </div>
</template>

<script>
  require('bootstrap-vue')
//  import AddPlace from './AddPlace'
export default {
//  components: {
//    add_place: AddPlace
//  },
  data() {
    return {
      form: {
        title: '',
        type: '',
        author: 'kdenny',
        description: ''
      }
    }
  },
  mounted() {
    console.log(this.$route.params)
//    this.$store.dispatch('getList', this.$route.params)
  },
  methods: {
    submitList() {
      this.$store.dispatch('createList', this.form)
    }
  }
}
</script>

<style>
  @import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
  @import "../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
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