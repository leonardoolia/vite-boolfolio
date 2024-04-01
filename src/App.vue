<!--? SCRIPT -->
<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

  export default{
    name: 'MyPortfolio',
    components:{AppHeader},
    data: () => ({projects: []}),
    methods:{
      fetchProjects(){
        axios.get(endpoint).then(res => {
          this.projects = res.data
        })
      }
    },
    created(){
      this.fetchProjects();
    }
  };
</script>

<!--? TEMPLATE -->
<template>
  <AppHeader />
  <main class="container mt-4">
    <h1>MyPortfolio</h1>

    <section id="projects">
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h4 v-text="project.title"></h4>
        </li>
      </ul>
    </section>
  </main>
</template>

<!--? STYLE -->
<style>

</style>
