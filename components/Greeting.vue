<template >
    <v-container>
        <div class="wraper">
            <div class="greeting__box">
                <h2 class="greeting__h2">Hey!!</h2>
                <h1 class="greeting__h1">I am Yonar</h1>
                <h3 class="greeting__h3">Web Developer</h3>
                <div class="greeting__options buttons">
                    <v-btn color="primary" href="ING_YONAR_RAMOS.pdf" download="ING_YONAR_RAMOS" class="button is-info">Get CV</v-btn>
                    <v-btn color="primary" href="#contact-me" class="greeting__options__buttons button is-info">
                        Contact me
                    </v-btn>
                </div>
            </div>
            <div class="greeting__img">
                <img class="img" src="banner-image.png" alt="banner" />
            </div>
        </div>

    </v-container>
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

<style lang="scss" scoped>
.wraper{
    margin-top:60px;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    .greeting__box{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
        .greeting__h1 {
        text-transform: uppercase;
        font-size: 50px;
        font-weight: 600px;
        }
        .greeting__h2 {
        font-size: 30px;
        font-weight: 500px;
        }
        .greeting__h3 {
        font-size: 20px;
        font-weight: 400px;
        }
        .greeting__options {
        margin-top: 20px;
        }
    }

    .greeting__img {
        display: flex;
        align-items: center;
        margin-top: 20px;
        .img{
        max-width: 400px;
        }
    }
}
</style>