<!--? SCRIPT -->
<script>
export default{    
  name: 'NotFoundPage'  
}
</script>

<!--? TEMPLATE -->
<template>
    <div class="vh-100 d-flex flex-column align-items-center justify-content-center gap-4">
        <h3 class="text-white text-center">404 | Page not found</h3>
        <button class="btn btn-secondary" @click="$router.back()">Torna indietro</button>
    </div>
</template>

<!--? STYLE -->
<style>

</style>