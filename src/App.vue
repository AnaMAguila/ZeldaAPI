<script setup>
  import {categoryArray} from '@/composables/getData.js';
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/"><img src="@/assets/icon.png" width="50" alt="Go Home"></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul v-for="categ in categoryArray" :key="categ.id" class="navbar-nav">
            <li class="nav-item">
              <RouterLink :to="`/selection/${categ.name}`" class="nav-link active">{{categ.cat}}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- :key="$route.fullPath" nos actualiza el componente cada vez que hacemos click en el menú -->
    <RouterView :key="$route.fullPath"/>
  </header>
</template>
