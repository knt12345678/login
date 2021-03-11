<template>
  <div id="login">
    <form>
      
      <div class="container">
        <div class="mb-3"><img src="https://cdn.onlinewebfonts.com/svg/img_411076.png" alt="">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <label class="form-label">Email :</label>
              <input type="text" class="form-control" placeholder="Email" v-model="User" />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <label class="form-label">Password :</label>
              <input type="password" class="form-control" placeholder="Password" v-model="password" />
            </div>
          </div>
        </div>

        <b-button variant="primary" @click="login">Login</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      User: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.User, this.password)
        .then(
          (user) => {
            console.log(user.data)
            this.$router.replace("/home");
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style>
form {
  margin-top: 7%;
}
img{
  width: 15%;
  margin-bottom:40px ;
}
</style>
