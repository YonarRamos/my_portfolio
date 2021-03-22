<template >
  <v-card style="margin-top: 30px" color="#6b83f2">
    <v-carousel
      id="carrusel"
      :show-arrows="false" 
      style="border-radius: 10px"
      height="auto"
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
              <v-container>
                <v-row>
                  <v-col>
                    <v-carousel hide-delimiters height="auto" style="border-radius: 10px">
                      <v-carousel-item v-for="(item, i) in work.imgs" :key="i">
                        <v-sheet tile>
                          <v-row>
                            <v-col>
                              <v-img
                                :src="item.src"
                                :alt="item.alt"
                                :aspect-ratio="4/3"
                                min-height="400"
                                style="border-radius: 7px;"
                              ></v-img>
                            </v-col>
                          </v-row>
                        </v-sheet>
                      </v-carousel-item>
                    </v-carousel>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import data from "@/DB/data.json";
export default {
  data() {
    return {
      works: data.works,
      colors: ["#6b83f2", "#6b83f2", "#6b83f2", "#6b83f2"],
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