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

      <div class="alert alert-danger" v-if="errorMessage">{{errorMessage}}</div>

      <label class="col-lg-12 col-sm-12" for="nom" >Nom</label>
      <input type="text" id="nom" v-model="nom" class="col-lg-12 col-sm-12"/>
      <label for="description" class="col-lg-12 col-sm-12">Description</label>
      <input type="text" id="description" v-model="description" class="col-lg-12 col-sm-12"/>

      <button type="button" @click="submitFormModify" v-if="ancienNom">Modifier</button>
      <button type="button" @click="submitFormAdd" v-else>Ajouter</button>

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
      description: '',
      ancienNom: '',
      errorMessage: ''
    }
  },
  methods: {
    submitFormAdd () {
      params.append('name', this.nom)
      params.append('content', this.description)
      axios.post(
        'http://localhost:3000/add',
        params,
        config,
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response)
        this.errorMessage = response.data.error
        if (this.errorMessage) {
          console.log(this.errorMessage)
        } else {
          this.$router.push('/')
        }
      })
    },
    submitFormModify () {
      params.append('oldName', this.ancienNom)
      params.append('name', this.nom)
      params.append('content', this.description)
      axios.post(
        'http://localhost:3000/modify',
        params,
        config,
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response)
        this.errorMessage = response.data.error
        if (this.errorMessage) {
          console.log(this.errorMessage)
        } else {
          this.$router.push('/')
        }
      })
    }
  },
  created () {
    if (this.$route.query.name && this.$route.query.content) {
      this.nom = this.$route.query.name
      this.ancienNom = this.$route.query.name
      this.description = this.$route.query.content
    }
  }
}
</script>

<style lang="css">
</style>
