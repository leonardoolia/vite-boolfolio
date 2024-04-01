<!--? SCRIPT -->
<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

  export default{
    name: 'MyPortfolio',
    components:{AppHeader, ProjectsList},
    data: () => ({projects: [], isLoading: false}),
    methods:{      
      fetchProjects(){
        this.isLoading = true;
        axios.get(endpoint)
        .then(res => {
          this.projects = res.data
        })
        .catch(err =>{
          console.error(err)
        })
        .then(() =>{
          this.isLoading = false;
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
    <h1 class="mb-4">MyPortfolio</h1>

    <AppLoader v-if="isLoading"/>
    <ProjectsList v-else :projects="projects"/>
  </main>

</template>

<!--? STYLE -->
<style>

</style>
