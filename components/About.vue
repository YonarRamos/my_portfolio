<template >
  <div class="box">

    <div class="about__img">
      <img class="img" src="about-us.png" alt="about-banner" />
    </div>
    
    <div class="about__details" >
      <h2 class="about__h2">Let me Introduce Myself</h2>
      <p class="about__description">My name is Yonar Ramos, I am a computer engineer dedicated to web development. I've had the opportunity to participate in several projects that have allowed me to gain experience in the use of various tools and methodologies for the design, development and deployment of high-level websites. </p>
      <br>
      <p class="about__description"></p>
      <div class="about__options buttons">
        <v-btn color="primary" class="greeting__options__buttons">Get CV</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .box{
  margin-top: 100px;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow-x: hidden;
    .about__details{
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
  }
@media only screen and (max-width: 600px) {
.img {
	display: none !important;
 }
 .box{
    justify-content: center !important;
  }
 }
}
</style>