<template>
  <div>
    <nav>
      <div class="container">
        <ul class="nav__left">

          <!-- Navigation Links -->
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>

        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>