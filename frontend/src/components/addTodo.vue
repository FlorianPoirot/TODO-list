<template lang="html">
  <div class="col-lg-offset-3 col-lg-6">

    <!-- <form class="" action="" method="post">
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" placeholder="">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" placeholder="">
      </div>

      <button type="button" name="button">Envoyer</button>
    </form>
     -->

     <label class="col-lg-12" for="nom" >Nom</label>
     <input type="text" id="nom" v-model="nom" class="col-lg-12"/>
     <label for="description" class="col-lg-12">Description</label>
     <input type="text" id="description" v-model="description" class="col-lg-12"/>

     <button type="button" @click="submitForm">Soumettre</button>


  </div>
</template>

<script>
import axios from 'axios'

var config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
}
var params = new URLSearchParams()

export default {
  name: 'AddTodo',
  data () {
    return {
      nom: '',
      description: ''
    }
  },
  methods: {
    submitForm () {
      // axios.post('http://localhost:3000/add', {
      //   name: this.nom,
      //   content: this.description
      // })
      // .then(function (response) {
      //   console.log(response)
      // })
      // .catch(function (error) {
      //   console.log(error)
      // })
      // // this.$router.push('/')

      // axios.post('http://localhost:3000/add', {
      //   'name': this.nom,
      //   'content': this.description
      // })
      params.append('name', this.nom)
      params.append('content', this.description)
      axios.post(
        'http://localhost:3000/add',
        params,
        config,
        { withCredentials: true }
      )
      // .then(function (response) {
      //   console.log(response)
      //   this.$router.push('/')
      //   // this.todos = response.data
      // })
      .then((response) => {
        console.log(response)
        this.todos = response.data
        // this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="css">
</style>
