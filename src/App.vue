<!--? SCRIPT -->
<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import AppAlert from './components/AppAlert.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

  export default{
    name: 'MyPortfolio',
    components:{AppHeader, ProjectsList, AppAlert},
    data: () => ({
      projects: {
        data: [],
        links: []
      }, 
      isLoading: false, 
      isAlertOpen: false}),
    methods:{      
      fetchProjects(endpoint){
        this.isLoading = true;
        axios.get(endpoint ?? defaultEndpoint)
        .then(res => {
          const {data, links} = res.data;
          this.projects = {data, links};

          this.isAlertOpen = false;
        })
        .catch(err =>{
          console.error(err);
          this.isAlertOpen = true;
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
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects"/>
    <AppLoader v-if="isLoading"/>
    <ProjectsList v-else :projects="projects.data"/>

    <nav>
      <ul class="pagination">
        <li v-for="link in projects.links" :key="link.label" class="page-item" :class="{'active': link.active, 'disabled': !link.url}">
          <button class="page-link" v-html="link.label" :disabled="!link.url" @click="fetchProjects(link.url)"></button>
        </li>
      </ul>
    </nav>
  </main>

</template>

<!--? STYLE -->
<style>

</style>
