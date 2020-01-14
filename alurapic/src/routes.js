import Home from './component/home/Home.vue';
import Cadastro from './component/cadastro/Cadastro.vue';

export const routes = [

  {path: '', component: Home, titulo: 'Home'},
  {path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}

];
