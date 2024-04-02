<!--? SCRIPT -->
<script>
  export default{
    name: 'ProjectCard',
    props: {project: Object, isDetail: Boolean},    
    computed: {
        abstract(){
            const abstract = this.project.description.slice(0, 250);
            return abstract + '...';
        },
        pubblicationDate(){
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();

            if(day <10) day = '0' + day;
            if(month <10) month = '0' + month;
            return `${day}/${month}/${year}`;
        }
    }
  };
</script>

<!--? TEMPLATE -->
<template>
    <section id="projects-card">
        <div class="card mb-5">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h2>{{ project.title }}</h2>
                <RouterLink v-if="!isDetail" class="btn btn-primary" :to="{name: 'project-detail', params:{id: project.id}}">Vedi</RouterLink>
            </div>
            <div class="card-body clearfix">
                <img v-if="project.image" :src="project.image" :alt="project.title" class="img-fluid float-start">

                <!-- Se siamo nel dettaglio mi mostra l'intera descrizione del progetto, altrimenti mi mostra l'abstract -->
                <p>{{isDetail ? project.description : abstract}}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <small><strong>Status:</strong> {{ project.status }}</small>
                <small><strong>Creato il:</strong> {{ pubblicationDate }}</small>
            </div>
        </div>
    </section>
</template>

<!--? STYLE -->
<style>

</style>