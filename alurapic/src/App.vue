<template>
  <div class="corpo">
    <meu-menu :rotas="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Painel from './component/shared/painel/Painel.vue';
  import Menu from './component/shared/menu/Menu.vue';
  import {routes} from './routes';
  import ImagemResponsiva from './component/shared/imagem-responsiva/ImagemResponsiva.vue'

  export default {
    components: {
      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva,
      'meu-menu': Menu
    },
    name: 'app',
    data() {
      return {
        routes
      }
    }
  }
</script>

<style>


  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }

  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }


</style>
