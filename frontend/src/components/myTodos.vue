<template lang="html">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      <todo v-for="(todo, key) in todos" :name="todo.name" :content="todo.content" :key="key"></todo>
    </tbody>
  </table>
</template>

<script>
import Todo from '@/components/todo'
import axios from 'axios'

export default {
  name: 'myTodos',
  components: {
    Todo
  },

  data () {
    return {
      todos: []
    }
  },
  created () {
    axios({
      method: 'get',
      url: 'http://localhost:3000'
    })
    .then((response) => {
      console.log(response)
      this.todos = response.data.todoList
    })
    .catch(function (error) {
      // console.log('nnnnnnnnn')
      console.error(error)
    })
  }
}
</script>

<style lang="css">
</style>
