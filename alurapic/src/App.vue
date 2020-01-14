<template>
  <div class="corpo">
    <h1 class="centralizado"> {{titulo }} </h1>
    <input class="filtro" placeholder="Filtre pelo título" type="search" v-on:input="filtro = $event.target.value">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :titulo="foto.titulo" :url="foto.url"/>
        </meu-painel>

      </li>
    </ul>


  </div>
</template>

<script>
  import Painel from './component/shared/painel/Painel.vue';
  import ImagemResponsiva from './component/shared/imagem-responsiva/ImagemResponsiva.vue'

  export default {
    components: {
      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva
    },
    name: 'app',
    data() {
      return {
        titulo: 'Alurapic',
        fotos: [],
        filtro: '',
      }
    },
    computed: {

      fotosComFiltro() {

        if (this.filtro) {
          // criando uma expressão com o valor do filtro, insensitivo
          let exp = new RegExp(this.filtro.trim(), 'i');
          // retorna apenas as fotos que condizem com a expressão
          return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {
          return this.fotos;
        }

      }
    },
    created() {
      this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => {
          res.json()
            .then(fotos => this.fotos = fotos, error => console.log(error));
        });
    }
  }
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }


  .imagem-responsiva {
    width: 100%;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
