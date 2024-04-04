<!--? SCRIPT -->
<script>
  import { store } from '../../data/store';
  import axios from 'axios';
  const endpoint = 'http://localhost:8000/api/contact-message';
  const defaultForm = {email: '', subject: '', message: ''};


  export default{
    name: 'ContactUsPage',
    data: () => ({
      form: defaultForm
    }),
    methods:{
      sendForm(){
        store.isLoading = true;
        axios.post(endpoint, this.form)
        .then(() => {
          this.form = {...defaultForm};
        })
        .catch(err => {console.error(err)})    
        .then(() =>{
          store.isLoading = false;
        })        
      }     
    }     
  }
</script>

<!--? TEMPLATE -->
<template>
  <h1 class="my-4">Contattaci</h1>

  <!-- FORM -->
  <form @submit.prevent="sendForm">

    <!-- Email -->
    <div class="mb-3">
      <label for="email" class="form-label">Indirizzo email</label>
      <input type="email" class="form-control" id="email" placeholder="nome@esempio.com" v-model.trim="form.email">
    </div>

    <!-- Oggetto -->
    <div class="mb-3">
      <label for="subject" class="form-label">Oggetto dell'email</label>
      <input type="text" class="form-control" id="subject" v-model.trim="form.subject">
    </div>

    <!-- Messaggio -->
    <div class="mb-3">
      <label for="message" class="form-label">Testo dell'email</label>
      <textarea class="form-control" id="message" rows="3" v-model.trim="form.message"></textarea>
    </div>

    <button type="submit" class="btn btn-primary mt-4">Invia</button>
  </form>



</template>

<!--? STYLE -->
<style>

</style>