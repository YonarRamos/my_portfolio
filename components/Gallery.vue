<template>
    <v-overlay v-model="hide" :opacity="0.8" :z-index="3">
        <v-card-title class="pb-0">
            <v-spacer></v-spacer>
            <v-icon large @click="hideEvent" style="cursor:pointer;">mdi-eye-off</v-icon>
        </v-card-title>
        <v-carousel height="auto">
            <v-carousel-item
            v-for="(img,i) in imgs"
            :key="i"
            >
                <img class="img" :src="img.src" />
            </v-carousel-item>
        </v-carousel>           
    </v-overlay>            
</template>

<script>
import { mapMutations, mapState } from "vuex";
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
            works: data.works,
        }
    },
    computed:{
        ...mapState(['hide'])
    },
    methods:{
        ...mapMutations(['changeHide']),
        show(){
            this.changeHide(true);
        },
        hideEvent(){
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