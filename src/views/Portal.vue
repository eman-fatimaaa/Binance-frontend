<template>
  <div>
    <nav class="navbar navbar-expand-lg color">
      <img class="navbar-img" v-bind:src="image" />
    </nav>
    <div>
      <div class="hero">
        <div class="container-fluid">
          <h1 class="pt-12 text-center white--text">Convert and OTC Portal</h1>
        </div>
      </div>

      <div class="d-flex">
        <v-chip
          class="ma-2"
          color="rgb(255,217,0)"
          :input-value="active"
          filter
        >
          Market
        </v-chip>
        <v-chip class="ma-2 bg-transparent" :input-value="active" filter>
          Limit</v-chip
        >
      </div>
      <div class="container main">
        <form class="mt-5">
          <!-- content container-->
          <div class="container">
            <div class="form-group">
              <label for="exampleInputEmail1">From</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="please enter 20 to 2500000"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">To</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="PLease enter 0.0003 - 50"
              />
            </div>

            <button type="submit" class="btn bg-color btn-block border">
              Enter an Amount
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      //data properties for image binding
      image: require("@/assets/images/binance.png"),
    };
  },
};
</script>
<style scoped>
.navbar-img {
  width: 170px;
}
.hero {
  background: url("../assets/images/crypto.jpeg");
  background-size: cover;
  height: 37vh;
  opacity: 0.8;
}
.main {
  width: 500px;
}
</style>