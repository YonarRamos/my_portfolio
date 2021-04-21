<template >
  <v-card style="margin-top: 90px" color="#6b83f2">
    <v-carousel
      id="carrusel"
      :show-arrows="false" 
      style="border-radius: 10px"
      height="auto"
      :hide-delimiters="hide"
    >
      <v-carousel-item v-for="(work, i) in works" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row>
            <v-col cols="12" md="6">
              <v-card-title class="pl-9 white--text">
                <h3 class="bajorrelieve">Recent Works</h3>
              </v-card-title>
              <div class="px-10">
                <h4 class="mb-1">{{ work.name }}</h4>
                <p>
                  {{work.description}}
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
                <v-row>
                  <v-col>
                    <v-carousel hide-delimiters height="auto" style="border-radius: 10px">
                      <v-carousel-item v-for="(item, i) in work.imgs" :key="i" @click="showGallery(i)"
                        :src="item.src"
                        :alt="item.alt"
                        min-height="400"
                        style="border-radius: 7px;display:block;width:100%">
                      </v-carousel-item>
                    </v-carousel>
                  </v-col>
                </v-row>
            </v-col>
          </v-row>
        </v-sheet>
          <gallery style="z-index:3" :imgs="work.imgs" ref="gallery"/>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import data from "@/DB/data.json";
import Gallery from "~/components/Gallery"
import { mapState } from "vuex";
export default {
  components:{
    Gallery
  },
  data() {
    return {
      works: data.works,
      colors: ["#6b83f2", "#6b83f2", "#6b83f2", "#6b83f2"],
     }
  },
  computed:{
    ...mapState(['hide'])
  },
  methods:{
    showGallery(index){
      this.$refs.gallery[index].show();
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) and (max-width: 400px) {
  #carrusel { 
    width: 1000px !important;
}  
    
}
.bajorrelieve {
  background: #20227a;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0px 3px 3px rgba(130, 138, 206, 0.342),
    0px -1px 1px rgba(0, 0, 0, 0.3);
}
</style>