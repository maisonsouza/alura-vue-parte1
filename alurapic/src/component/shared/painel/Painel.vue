<template>
  <div class="painel">

    <h2 @dblclick="visivel = !visivel" class="painel-titulo">{{ titulo }}</h2>
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">

        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    data() {

      return {

        visivel: true
      }

    },

    props: ['titulo']

  }
</script>

<style scoped>
  /* estilo do painel */

  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  * {
    box-shadow: 5px 5px 10px grey;
  }

  .painel-enter, .painel-leave-active {
    opacity: 0
  }

  .painel-enter-active, .painel-leave-active {
    transition: opacity .4s
  }

</style>
