<!--? SCRIPT -->
<script>
import { store } from '../../data/store';
import ProjectsList from '../projects/ProjectsList.vue';
import AppAlert from '../AppAlert.vue';
import BasePagination from '../BasePagination.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

  export default{
    name: 'HomePage',
    components:{ProjectsList, AppAlert, BasePagination},
    data: () => ({
      store,
      projects: {
        data: [],
        links: []
      },
      isAlertOpen: false}),
    methods:{      
      fetchProjects(endpoint){
        store.isLoading = true;
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
          store.isLoading = false;
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
    <h1 class="mb-4">MyPortfolio</h1>
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects"/>
    <AppLoader v-if="isLoading"/>

    
    <div v-if="!store.isLoading">    
      <ProjectsList :projects="projects.data"/>
      <BasePagination :links="projects.links" @change-page="fetchProjects"/>
    </div>
</template>

<!--? STYLE -->
<style>

</style>
