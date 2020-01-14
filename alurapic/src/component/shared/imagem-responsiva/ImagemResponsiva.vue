<template>
  <img :alt="titulo" :src="url" class="imagem-responsiva">
</template>

<script>

  export default {
    props: ['url', 'titulo']
  }

</script>

<style scoped>
  .imagem-responsiva {
    width: 100%;
  }
</style>
