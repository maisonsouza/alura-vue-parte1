<template>
  <div>
    <h1> {{titulo }} </h1>
    <ul v-for="foto of fotos">
      <li><img :src="foto.url" :alt="foto.titulo"/></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        titulo: 'Alurapic',
        fotos: [
          {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhdQZRK-C5eq6fd1zzOZqan3hMCE0prhSwpk6C1-UGKdDrVZQ5g&s',
            titulo: 'Cachorro'
          },
          {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jO3pvYgzwalKY8Dc4vq3_e-IdKHJ6wmYtdrW_PGzzQH5rPAJ&s',
            titulo: 'Cachorrinho'
          }
        ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
