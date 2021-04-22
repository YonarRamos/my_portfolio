<template>
    <v-container>
        <v-carousel
        hide-delimiters 
        height="auto" 
        style="border-radius: 10px"
        >
            <v-carousel-item
            v-for="(img,i) in imgs"
            :src="img.src"
            :key="i"
            min-height="400"
            style="border-radius: 10px;display:block;width:100%"
            class="img"
            @click="showGallery()"
            />
        </v-carousel>     
    </v-container>               
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
        },
        showGallery(){
        this.changeHide(true);
        }
    }
}
</script>

<style>
    @media (max-width: 600px) {
      .img {
        width: 100%;
      }
    }
</style>