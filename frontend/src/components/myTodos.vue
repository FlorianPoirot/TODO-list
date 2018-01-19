<template lang="html">
  <div class="col-lg-1-12">
    <table class="table table-striped" v-if="">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Action {{todos.length}}</th>
        </tr>
      </thead>

      <tbody>
        <todo v-for="(todo, key) in todos" :name="todo.name" :content="todo.content" :key="key"></todo>
      </tbody>
    </table>
  </div>

</template>

<script>
import Todo from '@/components/todo'
import axios from 'axios'

export default {
  name: 'myTodos',
  components: {
    Todo,
    lengthTodo: true
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
      console.error(error)
    })
  }
}
</script>

<style lang="css">
</style>
