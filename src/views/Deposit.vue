<template>
  <div>
    <!-- Just an image -->
    <nav class="navbar navbar-expand-lg color bg-dark">
      <img class="navbar-img" v-bind:src="image" />
    </nav>
    <div class="navColor d-flex pa-5">
      <h2 class="ml-10">Deposit Fiat</h2>
      <v-btn depressed class="color ml-5 rgb(0,12,9)--text">
        Order History <i class="fas fa-arrow-right"></i>
      </v-btn>
      <v-btn depressed class="color ml-5 rgb(0,12,9)--text button">
        Deposit Crypto<i class="fas fa-arrow-right"></i>
      </v-btn>
    </div>
    <div class="container d-flex align-items-center">
      <div class="main mt-5">
        <form class="mt-5">
          <!-- content container-->
          <div class="container">
            <h2>1.Select Currency</h2>

            <div class="input-group mb-3 mt-5">
              <div class="input-group-prepend">
                <button
                  class="btn border dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  EUR EURO
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Pay with</label><br />
              <button type="submit" class="btn border navColor">
                Recommended
              </button>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                <v-avatar size="35">
                  <img :src="avatar" alt="John" />
                </v-avatar>

                Bank Card(Visa/MC)<br />
                <p class="mt-3">1.8% Free</p></label
              >
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                <v-avatar size="35">
                  <img :src="avatar2" alt="John" />
                </v-avatar>
                ADvcash ACcount Balance<br />
                <p class="mt-3">
                  0 Free <strong>Supports SEPA transfer(1 depoist free)</strong>
                </p></label
              >
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                <v-avatar size="35">
                  <img :src="avatar3" alt="John" />
                </v-avatar>
                P2P Express<br />
                <p class="mt-3">
                  0 Free <strong>Supports SEPA transfer(1 depoist free)</strong>
                </p></label
              >
            </div>

            <button type="submit" class="btn bg-color btn-block">
              Continue
            </button>
          </div>
        </form>
      </div>
      <div>
        <!-- Image Container -->
        <div class="secondDiv">
          <h6 class="text-center textColor">Didn't receive depoist?</h6>
          <div class="container d-flex textColor text-center">
            <h6 class="mt-2 ml-16">FAQ</h6>
            <v-btn depressed class="textColor ml-16">
              View More FAQ <i class="fas fa-arrow-right"></i>
            </v-btn>
          </div>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="item in itemArray" :key="item">
              <v-expansion-panel-header>{{
                item.title
              }}</v-expansion-panel-header>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
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
      qr: require("@/assets/images/QRcode.webp"),
      avatar: require("@/assets/images/credit-card.png"),
      avatar2: require("@/assets/images/cash.png"),
      avatar3: require("@/assets/images/business-to-consumer.png"),
      itemArray: [
        { title: "HOw to deposit fiat with Credit/Debit Card?" },
        { title: "How long does the deposit take?" },
      ],
    };
  },
};
</script>
<style scoped>
.button {
  float: left;
}
.navbar-img {
  width: 170px;
}
.main {
  width: 550px;
  padding: 0px 20px;
}
.secondDiv {
  margin-left: 17%;
}
.qrImg {
  width: 280px;
}
.color {
  color: rgb(255, 217, 0);
}
.bg-color {
  background-color: rgb(250, 191, 0);
}
.icolor {
  color: green;
}
.navColor {
  background-color: rgb(250, 250, 250);
  padding-top: 4px;
}
.hColor {
  color: rgb(208, 150, 0);
}
input {
  height: 47px;
}
button {
  height: 47px;
}
.textColor {
  color: rgb(208, 150, 0);
}
</style>