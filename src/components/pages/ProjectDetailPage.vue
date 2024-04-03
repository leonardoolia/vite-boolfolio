<!--? SCRIPT -->
<script>
import { store } from '../../data/store';
import axios from 'axios';
import AppLoader from '../AppLoader.vue';
import ProjectCard from '../projects/ProjectCard.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'ProjectDetailPage',
  components: {ProjectCard, AppLoader},
  data: () => ({
    store,
    project: null,
  }),
  methods:{
    getProject(){
        store.isLoading = true;        
        // Chiamiamo l'endopoint a cui aggiungiamo la query del singolo progetto
        axios.get(defaultEndpoint + this.$route.params.slug)
        .then(res =>{this.project = res.data})
        .catch(err =>{
          console.error(err.message);
          // Reindirizziamo l'utente alla pagina 404
          this.$router.push({name: 'not-found'})
        })
        .then(() => {store.isLoading = false})
    },
  },
  created(){
        this.getProject();
    }
};
</script>

<!--? TEMPLATE -->
<template>
    <AppLoader v-if="store.isLoading && !project"/>
    <ProjectCard v-if="!store.isLoading && project" :project="project" :isDetail="true"/>
</template>

<!--? STYLE -->
<style>

</style>