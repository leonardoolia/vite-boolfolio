<!--? SCRIPT -->
<script>
import axios from 'axios';
import AppLoader from '../AppLoader.vue';
import ProjectCard from '../projects/ProjectCard.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'ProjectDetailPage',
  components: {ProjectCard, AppLoader},
  data: () => ({
    project: null,
    isLoading: false,
  }),
  methods:{
    getProject(){
        this.isLoading = true;        
        // Chiamiamo l'endopoint a cui aggiungiamo la query del singolo progetto
        axios.get(defaultEndpoint + this.$route.params.slug)
        .then(res =>{this.project = res.data})
        .catch(err =>{console.error(err.message)})
        .then(() => {this.isLoading = false})
    },
  },
  created(){
        this.getProject();
    }
};
</script>

<!--? TEMPLATE -->
<template>
    <AppLoader v-if="isLoading && !project"/>
    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true"/>
</template>

<!--? STYLE -->
<style>

</style>