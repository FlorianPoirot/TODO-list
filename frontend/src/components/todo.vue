<template lang="html">
  <tr>
    <td> {{ name }} </td>
    <td> {{ content }} </td>
    <td>
      <button class="btn btn-danger" type="button" @click="supprimer(name)">
        <i class="fa fa-eraser" aria-hidden="true"></i>
        Supprimer
      </button>
    </td>
  </tr>
</template>

<script>
import axios from 'axios'
import MyTodos from '@/components/myTodos'

var config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
}
var params = new URLSearchParams()

export default {
  name: 'Todo',
  props: [
    'name',
    'content'
  ],
  components: {
    MyTodos
  },
  methods: {
    supprimer (nomTodo) {
      params.append('task', nomTodo)
      axios.post(
        'http://localhost:3000/delete',
        params,
        config,
        { withCredentials: true }
      )
      .then((response) => {
        // console.log(response)
        this.todos = response.data.todoList
        console.log(this.todos)
      })
    }
  }
}
</script>
