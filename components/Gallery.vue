<template>
    <v-overlay :value="overlay" :opacity="1" :z-index="3">
        <v-card-title class="pb-0">
            <v-spacer></v-spacer>
            <v-icon large @click="hide" style="cursor:pointer;">mdi-eye-off</v-icon>
        </v-card-title>
        <v-carousel height="auto">
            <v-carousel-item
            v-for="(img,i) in imgs"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
            >
                <img class="img" :src="img.src" />
            </v-carousel-item>
        </v-carousel>           
    </v-overlay>            
</template>

<script>
import { mapMutations } from "vuex";
import data from "@/DB/data.json";
export default {
    props:{
        imgs:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
            overlay:false,
            works: data.works,
        }
    },
    methods:{
        ...mapMutations(['changeHide']),
        show(){
            this.overlay = true;
            this.changeHide(true);
        },
        hide(){
            this.overlay = false;
            this.changeHide(false);
        }
    }
}
</script>

<style>
    .img{
        display: block;
        width: 800px;
        height: auto;
        max-height: 500px;
    }
    @media (max-width: 600px) {
      .img {
        width: 100%;
      }
    }
</style>