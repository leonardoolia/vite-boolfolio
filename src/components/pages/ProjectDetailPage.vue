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
        // axios.get(`${defaultEndpoint}/1`)
        axios.get(defaultEndpoint + this.$route.params.id)
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
    <ProjectCard v-if="!isLoading && project" :project="project"/>
</template>

<!--? STYLE -->
<style>

</style>