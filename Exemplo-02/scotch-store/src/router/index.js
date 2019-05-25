import Vue from 'vue';
import Router from 'vue-router';

// Moved to pages from components
import Home from '@/components/HelloWorld';
import TodoList from '@/components/ToDoList';
import Counter from '@/components/Counter';
import Conditional from '@/components/Conditional';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
  ],
});