<template>
  <div class="box">
    <v-form 
    class="contact"
    ref="form"
    v-model="valid"
    lazy-validation
    >

            <v-text-field 
            v-model="data.name" 
            outlined type="text" 
            placeholder="Name"
            :rules="generalRules"
            />

            <v-text-field
              outlined
              v-model="data.email"
              type="email"
              placeholder="Email"
              :rules="emailRules"
            />

            <v-textarea 
            v-model="data.msg" 
            outlined 
            placeholder="Message"
            :rules="generalRules"
            />

            <v-btn :loading="loading" :color="btn_color" @click="enviar" :disabled="btn_disable" class="button is-link"> <v-img v-if="btn_success" max-width="30" src="check_circle-white-18dp.svg" class="mr-2" /> <v-img v-if="btn_error" max-width="30" src="cancel-white-18dp.svg" class="mr-2" /> Submit</v-btn>


    </v-form>

    <section class="mis-datos">
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center">
            <div class="call-me">
              <h1 class="call-me__h3">Let's build something</h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <div>
              <h2>Eng. Yonar Ramos</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <div class="location">
              <v-btn large fab class="mr-2" target="_blank" href="https://www.linkedin.com/in/yonar-ramos-598253184/"><v-img src="linkedin.svg" width="40"/></v-btn>
              <v-btn large fab target="_blank" href="https://github.com/YonarRamos" ><v-img src="github.svg" width="40"/></v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>

    </section>
  </div>
</template>

<script>
import axios from "../plugins/axios";

export default {
  data() {
    return {
      btn_success: false,
      btn_error:false,
      loading:false,
      btn_disable:false,
      valid: true,
      btn_color:"primary",
      generalRules: [
        v => !!v || 'Required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      data:{
        name:'',
        msg:'',
        email:''
        }
    };
  },
  methods:{
    async enviar(){
      try {
        this.btn_disable=true;
        this.loading = true;
        if(this.$refs.form.validate()){
          await axios
          .post("/api/contact",this.data)
          .then((res) => {
            console.log(res.data);
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
            this.loading=false;
            this.btn_color="success";
            this.btn_success=true;
            this.btn_disable=false;

            setTimeout(()=>{
              this.btn_color="primary";
              this.btn_success=false;
            },3000);
          });
        }
      } catch (error) {
        console.log(error)
        this.loading=false;
        this.btn_error=true;
        this.btn_disable=false;
        this.btn_color="error";
        setTimeout(()=>{
            this.btn_color="primary";
            this.btn_error=false;
          },3000);
      }
     
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  margin-bottom: 100px;
  margin-top: 100px;
  .contact{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    padding: 0px 20px;
  }

  .mis-datos{
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-grow: 1;
    flex-basis: 0;
    padding: 0px 20px;
    margin-bottom: 20px;
    .call-me{
      .call-me__h3{
      font-size: 30px;
      font-weight: 500px;
      margin: 0px 5px;
      }
    }
    .emails{
      .emails__h3{
      font-size: 30px;
      font-weight: 500px;
      margin: 0px 5px;
      }
    }
    .location{
      .location__h3{
      font-size: 30px;
      font-weight: 500px;
      margin: 0px 5px;
      }
    }
  }
  
}
</style>