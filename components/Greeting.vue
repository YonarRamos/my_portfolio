<template >
    <v-row align="center" class="pt-8">
        <v-col cols="12" sm="6">
            <v-col class="d-flex justify-center py-0">
                <h1>Hey!!</h1>             
            </v-col>
            <v-col class="d-flex justify-center py-0">
                <h1 style="font-size:40px;">I am Yonar</h1>
            </v-col>
            <v-col class="d-flex justify-center py-0">
                <h1>Web Developer</h1>
            </v-col>           
            <v-col class="d-flex justify-center">
                <v-btn color="primary" href="ING_YONAR_RAMOS.pdf" download="ING_YONAR_RAMOS" class="button is-info">Get CV</v-btn>
                <v-btn color="primary" href="#contact-me" class="ml-2">
                    Contact me
                </v-btn>
            </v-col>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex justify-center">
            <v-container>
                <v-img max-width="400" src="banner-image.png" alt="banner" /> 
            </v-container>           
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  components:{
  },
  methods:{
    ...mapMutations(['generatePDF'])
  }
};
</script>
