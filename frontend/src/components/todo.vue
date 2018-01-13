<template lang="html">
  <tr>
    <td> {{ name }} </td>
    <td> {{ content }} </td>
    <td>
      <button class="btn btn-danger" type="submit">
        <i class="fa fa-eraser" aria-hidden="true"></i>
        Supprimer
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'Todo',
  props: [
    'name',
    'content'
  ]
}
</script>
