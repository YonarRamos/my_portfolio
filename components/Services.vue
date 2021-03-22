<template >
  <div class="services">
    <div class="services__title">
      <h1 class="services__title__h1">Services</h1>
      <p class="services__title__description">
          My name is Yonar Ramos, I am a computer engineer dedicated to web development. I've had the opportunity to participate in several projects that have allowed me to gain experience in the use of various tools and methodologies for the design, development and deployment of high-level websites.
      </p>
    </div>

    <div class="services__container">
      <div class="card services__card" v-for="(item, i) of services" :key="i">
        <div class="card-image services__container__img">
          <img :src="item.img" alt="Placeholder image" class="services__img" />
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 services__container__title">{{ item.title }}</p>
            </div>
          </div>

          <div class="content">
            <p class="services__container__description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/DB/data.json";
export default {
  data() {
    return {
      services: data.services
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  .services__title {
    .services__title__h1 {
      font-size: 40px;
      font-weight:500px;
      text-align: center;
    }
    .services__title__description {
      text-align: center
    }
  }

  .services__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
    .services__card {
      margin: 10px;
      border: 3px solid #6b83f2;
      border-radius: 10px;
      max-width: 250px;
      .services__container__title{
        text-align: center;
      }
      
      .services__container__description{
        text-align: center;
      }
      .services__container__img{
        width: 80px;
        height: 80px;
        margin: auto;
        .services__img{
          display: block;
          margin: 50px auto;
        }
      }
    }
    .services__card:hover{
      background-color: #6b83f2;
      color: white;
      cursor: pointer;
      p{
        color: white;
      }
    }
  }
}
</style>