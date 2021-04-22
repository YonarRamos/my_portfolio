<template >
  <v-row align="center" class="pt-10">
    <v-col cols="12" md="7">
      <div class="about__img">
        <v-img max-width="500" class="img" src="about-us.png" alt="about-banner" />
      </div>
    </v-col>
    <v-col cols="12" md="5">
      <v-container>
        <h2 class="about__h2">Let me Introduce Myself</h2>
        <p class="about__description">My name is Yonar Ramos, I am a computer engineer dedicated to web development. I've had the opportunity to participate in several projects that have allowed me to gain experience in the use of various tools and methodologies for design, development and deployment of high-level websites. </p>
        <br>
        <v-col class="d-flex justify-center">
          <v-btn href="ING_YONAR_RAMOS.pdf" download="ING_YONAR_RAMOS" color="primary" class="greeting__options__buttons">Get CV</v-btn>
        </v-col>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .about__description{
    font-size: 15px;
    font-weight: 300px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .about__h2{
    font-size: 40px;
    font-weight:500px;
    text-align: center;
  }
/*     .about__details{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
      .about__h2{
        font-size: 40px;
        font-weight:500px;
        text-align: center;
      }
      .about__description{
        font-size: 15px;
        font-weight: 300px;
        text-align: center;
        align-items: center;
        justify-content: center;
      }
      .about__options{
        margin-top: 20px;
      }
    }

  .about__img{
  display: flex;
  align-items: center;
  justify-content: center;
    img{
    max-width: 500px;
    }
  } */
@media only screen and (max-width: 960px) {
.img {
	display: none !important;
 }
 .box{
    justify-content: center !important;
  }
 }

</style>