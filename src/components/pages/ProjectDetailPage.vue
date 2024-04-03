<!--? SCRIPT -->
<script>
import { store } from '../../data/store';
import axios from 'axios';
import ProjectCard from '../projects/ProjectCard.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'ProjectDetailPage',
  components: {ProjectCard},
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
    <ProjectCard v-if="!store.isLoading && project" :project="project" :isDetail="true"/>
</template>

<!--? STYLE -->
<style>

</style>