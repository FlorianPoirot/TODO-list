<template lang="html">
  <div class="col-lg-offset-3 col-lg-6">

    <form class="" action="" method="post">
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" placeholder="">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" placeholder="">
      </div>

      <!-- <input type="" name="" value="Envoyer"> -->
      <button type="button" name="button">Envoyer</button>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'addTodo'
}
</script>

<style lang="css">
</style>
