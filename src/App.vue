<!--? SCRIPT -->
<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import {store} from './data/store';

export default{
  name: 'MyPortfolio',
  components:{AppHeader, AppLoader},
  data: () => ({
    store
  })
}
</script>

<!--? TEMPLATE -->
<template>
  <AppHeader />
  <main class="container mt-4">
      <!-- Contenuto pagina -->
      <AppLoader v-if="store.isLoading"/>
      <RouterView />
  </main>
</template>

<!--? STYLE -->
<style>

</style>
