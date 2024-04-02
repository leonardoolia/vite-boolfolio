<!--? SCRIPT -->
<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';

export default{
  name: 'MyPortfolio',
  components:{AppHeader, HomePage}
}
</script>

<!--? TEMPLATE -->
<template>
  <AppHeader />
  <main class="container mt-4">
    <HomePage />
  </main>
</template>

<!--? STYLE -->
<style>

</style>
