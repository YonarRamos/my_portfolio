<template>
  <v-container>
    <greeting id="greeting"/>
    <about id="about"/> 
    <services id="services"/>
    <works id="works" style="z-index:2"/>
    <contact-me id="contact-me" style="z-index:1"/>
  </v-container>
</template>

<script>
import Greeting from "~/components/Greeting.vue";
import About from "~/components/About.vue";
import Services from "~/components/Services.vue";
import Works from "~/components/Works.vue";
import ContactMe from "~/components/ContactMe.vue";

export default {
  data(){
    return{
    }
  },
  components: {
    Greeting,
    About,
    Services,
    Works,
    ContactMe
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>