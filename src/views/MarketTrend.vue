<template>
  <div>
    <div class="navColor text-center">
      <p>
        Intoducing Highstreet on LaunchPool! Farm HIGH Stalking BNB and BUSD
        Tokens More
      </p>
    </div>

    <nav class="navbar bg-dark color navPadding">
      <img class="navbar-img" v-bind:src="image" />
    </nav>
    <div>
      <div class="bgColor">
        <div class="margin">
          <div class="container-fluid">
            <h1 class="pt-5">Verify Your Account</h1>
            <p class="mt-2">Get verified to achieve higher trading capacity.</p>
            <button type="submit" class="btn bg-color">Submit</button>
          </div>
        </div>

        <div class="container d-flex justify-content-around mt-5 mb-4">
          <div class="item" v-for="item in itemArray" :key="item">
            <h3>
              {{ item.currency }}
              <span class="percentage">{{ item.percentage }}</span>
            </h3>
            <strong>{{ item.rating }}</strong>
            <h6>{{ item.price }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-10 mb-16">
      <div class="container mt-2">
        <i class="fas fa-volume-down"></i>
        Special Notice about Binance.com in Singapore | <a> More</a>
      </div>
      <div class="container mt-2">
        <i class="fas fa-file-image"></i> Special Notice about Binance.com in
        Singapore | <a> More</a>
      </div>
      <div class="container mt-2">
        <i class="fas fa-file-image"></i> Special Notice About Binance Markets
        Limited | <a> More</a>
      </div>
    </div>
    <div class="container mt-10">
      <h1 class="mb-5">Market Trend</h1>
      <div class="container">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Last Price</th>
              <th scope="col">24h Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <v-avatar size="35"> <img :src="avatar" alt="John" /> </v-avatar
                >BNB
                <i class="currency">BNB</i>
              </th>
              <td>BNB</td>
              <td>$518.30</td>
            </tr>
            <tr>
              <th scope="row">
                <v-avatar size="35">
                  <img :src="avatar2" alt="John" /> </v-avatar
                >BTC
                <i class="currency">BTC</i>
              </th>
              <td>$46,830.91</td>
              <td>+1.31%</td>
            </tr>
            <tr>
              <th scope="row">
                <v-avatar size="35">
                  <img :src="avatar3" alt="John" /> </v-avatar
                >ETH
                <i class="currency">BNB</i>
              </th>
              <td>$3,732.52</td>
              <td>-0.35%</td>
            </tr>
            <tr>
              <th scope="row">
                <v-avatar size="35"> <img :src="avatar" alt="John" /> </v-avatar
                >LUNA
                <i class="currency">Terra</i>
              </th>
              <td>$87.68</td>
              <td>+1.20%</td>
            </tr>
            <tr>
              <th scope="row">
                <v-avatar size="35">
                  <img :src="avatar2" alt="John" /> </v-avatar
                >MATIC
                <i class="currency">Polygon</i>
              </th>
              <td>$2.58</td>
              <td>-0.82%</td>
            </tr>
            <tr>
              <th scope="row">
                <v-avatar size="35">
                  <img :src="avatar3" alt="John" /> </v-avatar
                >SHIB
                <i class="currency">SHIBA INU</i>
              </th>
              <td>$0.000034</td>
              <td>+0.83%</td>
            </tr>
          </tbody>
          <div class="container arrowHead mt-5">
            <a>View more markets <i class="fas fa-arrow-right"></i></a>
          </div>
        </table>
      </div>
    </div>
    <div class="container mt-5">
      <h1 class="mb-4">Trade.Anywhere.</h1>

      <div class="container width d-flex justify-space-between mt-5">
        <v-img :src="phoneImage" class="mt-5"> </v-img>
        <div class="secondDiv">
          <img class="img-fluid ml-5 qrImg mt-5" v-bind:src="qr" />
          <h5 class="text-center">Log in with QR code</h5>
          <p class="text-center">
            Scan this code with the <i class="color">Binance mobile app</i>
            to log in instantly
          </p>
        </div>
      </div>
    </div>

    <div class="container mt-5 divMargins">
      <h1 class="mt-6 divMargins">Get in touch.Stay in touch.</h1>
      <div class="list d-flex justify-space-around mt-6">
        <div class="divWidth">
          <h5>24/7 Support</h5>
          <br />
          <p>Got a problem just get in touch</p>
        </div>
        <div class="divWidth">
          <h5>Binance Blog</h5>
          <br />
          <p>
            News and updates from the worlds leading crypto currency exchange
          </p>
        </div>
        <div class="divWidth">
          <h5>Community</h5>
          <br />
          <p>
            Binance is a global.Join the disscussion in our world wide
            communities
          </p>
        </div>
        <div class="divWidth">
          <h5>Careers</h5>
          <br />
          <p>
            Help build the future of technology. Start help your new career at
            binance
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 bgColor pa-6">
      <h1 class="text-center">Start Trading Now</h1>

      <button type="submit" class="btn bg-color btnMargin">Trade</button>
    </div>
    <div class="d-flex flex-column h-100 mt-5">
      <!-- FOOTER -->
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-2 col-md-6">
              <h5 class="text-black">Support</h5>
              <ul class="list-unstyled text-muted">
                <li v-for="item in footerList" :key="item">
                  <a href="#">{{ item.list }}</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-black mb-3">Learn</h5>
              <ul class="list-unstyled text-muted">
                <li v-for="item in footerList" :key="item">
                  <a href="#">{{ item.list }}</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Products</h5>
              <ul class="list-unstyled text-muted">
                <li v-for="item2 in footerArray" :key="item2">
                  <a href="#">{{ item2.list }}</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Products</h5>
              <ul class="list-unstyled text-muted">
                <li v-for="item2 in footerArray" :key="item2">
                  <a href="#">{{ item2.list }}</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Products</h5>
              <ul class="list-unstyled text-muted">
                <li v-for="item2 in footerArray" :key="item2">
                  <a href="#">{{ item2.list }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      // data properties for image binding
      image: require("@/assets/images/binance.png"),
      qr: require("@/assets/images/QRcode.webp"),
      phoneImage: require("@/assets/images/crypto_dribble.png"),
      avatar: require("@/assets/images/credit-card.png"),
      avatar2: require("@/assets/images/cash.png"),
      avatar3: require("@/assets/images/business-to-consumer.png"),
      companyInfo:
        "Company Registration number: 556070-1715 VAT registration number: SE556070171501 Registered in Sweden.",
      footerList: [
        { list: "Store Locator" },
        { list: "Press" },
        { list: "responsibility" },
        { list: "FAQ" },
      ],
      footerArray: [
        { list: "Holiday Shopping" },
        { list: "Payment" },
        { list: "Garment Care" },
        { list: "Delivery methods" },
      ],
      itemArray: [
        {
          currency: "BNB/BUSD",
          rating: 2.604,
          price: "$30.00",
          percentage: "-0.78%",
        },
        {
          currency: "BNB/BUSD",
          rating: 2.604,
          percentage: "-0.78%",

          price: "$60.00",
        },
        {
          currency: "BNB/BUSD",
          rating: 2.604,
          percentage: "-0.78%",

          price: "$12.00",
        },
        {
          currency: "BNB/BUSD",

          price: "$7.00",
          percentage: "-0.78%",

          rating: 2.604,
        },
      ],
    };
  },
};
</script>
<style scoped>
* {
  color: black;
}
.navbar-img {
  width: 170px;
}

.navColor {
  background-color: rgb(253, 248, 215);
  padding-top: 5px;
}

input {
  height: 47px;
}
.bgColor {
  background-color: rgb(247, 247, 247);
}
.bg-color {
  background-color: rgb(250, 191, 0);
  padding: 5px 50px;
}
.margin {
  margin-left: 16%;
  margin-bottom: 8%;
}
.list-group {
  text-decoration: none;
}

.navPadding {
  margin-top: -16px;
}
.link {
  color: rgb(255, 217, 0);
}
.percentage {
  color: green;
}
.arrowHead {
  margin-left: 100%;
}
.currency {
  color: grey;
}
.btnMargin {
  margin-left: 45%;
}
.width {
  width: 700px;
  margin-top: 15%;
}
.divMargins {
  margin-top: 10%;
}
.divWidth {
  width: 300px;
}
</style>