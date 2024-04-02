<!--? SCRIPT -->
<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
import ContactUsPage from './components/pages/ContactUsPage.vue';

export default{
  name: 'MyPortfolio',
  components:{AppHeader, HomePage, ContactUsPage}
}
</script>

<!--? TEMPLATE -->
<template>
  <AppHeader />
  <main class="container mt-4">
      <!-- Contenuto pagina -->
      <RouterView />
  </main>
</template>

<!--? STYLE -->
<style>

</style>
