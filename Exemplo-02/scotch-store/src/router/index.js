import Vue from 'vue';
import Router from 'vue-router';

// Moved to pages from components
import HelloWorld from '@/components/HelloWorld';
import TodoList from '@/components/ToDoList';
import Counter from '@/components/Counter';
import Conditional from '@/components/Conditional';
import ListRendering from '@/components/ListRendering';

import Home from '@/pages/Home';
import Cart from '@/pages/Cart';

import Admin from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
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
