<template>
  <div id="app">
    <myHeader></myHeader>
    <div class="container">
      <router-view/>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
import myFooter from '@/components/myFooter'

export default {
  name: 'app',
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
