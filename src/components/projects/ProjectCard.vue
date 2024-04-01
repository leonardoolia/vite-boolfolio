<!--? SCRIPT -->
<script>
  export default{
    name: 'ProjectCard',
    props: {project: Object}    
  };
</script>

<!--? TEMPLATE -->
<template>
    <section id="projects-card">
        <div class="card mb-5">
            <div class="card-header">
                <h2>{{ project.title }}</h2>
            </div>
            <div class="card-body">
                <p>{{ project.description }}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <small><strong>Status:</strong> {{ project.status }}</small>
                <small><strong>Creato il:</strong> {{ project.created_at }}</small>
            </div>
        </div>
    </section>
</template>

<!--? STYLE -->
<style>

</style>