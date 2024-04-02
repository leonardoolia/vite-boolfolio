<!--? SCRIPT -->
<script>
import axios from 'axios';
import AppLoader from '../AppLoader.vue';
import ProjectCard from '../projects/ProjectCard.vue';
export default{
  name: 'ProjectDetailPage',
  components: {ProjectCard, AppLoader},
  data: () => ({
    isLoading: false,
  })
}
</script>

<!--? TEMPLATE -->
<template>
    <AppLoader v-if="isLoading"/>
    <ProjectCard v-else/>
</template>

<!--? STYLE -->
<style>

</style>