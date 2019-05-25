import Vue from 'vue';
import Router from 'vue-router';

// Moved to pages from components
import HelloWorld from '@/components/HelloWorld';
import TodoList from '@/components/ToDoList';
import Counter from '@/components/Counter';
import Conditional from '@/components/Conditional';
import ListRendering from '@/components/ListRendering';

import Home from '@/pages/Home';
import Admin from '@/pages/Admin';
import Cart from '@/pages/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/conditional',
      name: 'Conditional',
      component: Conditional,
    },
    {
      path: '/listrendering',
      name: 'ListRendering',
      component: ListRendering,
    },
  ],
});