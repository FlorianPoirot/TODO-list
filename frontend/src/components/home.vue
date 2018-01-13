<template lang="html">
  <div class="">
    <!-- <table class="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
        </tr>
        <tr>
          <td>test de la mort</td>
          <td>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
        </tr>
      </tbody>
    </table> -->
    <myTodos></myTodos>

    <router-link to="/add">
      <button type="button" name="button">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>
    </router-link>

  </div>
</template>

<script>
import myTodos from '@/components/myTodos'

export default {
  name: 'home',
  components: {
    myTodos
  }
}
</script>

<style lang="css">
</style>
