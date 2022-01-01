<template>
  <div>
    <div class="container">
      <div class="container-fluid mt-5">
        <h1 class="mb-5 textColor">Account Verification</h1>
      </div>
      <v-stepper dense>
        <v-stepper-header>
          <v-stepper-step step="3" complete> Applicant Data </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="4" complete> Tax Residency</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="5"> Identity documents </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="6"> Investibilty </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="6"> Review </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
      <div class="mt-5">
        <h6 class="text-center grey--text">2/2</h6>
      </div>
      <div class="container">
        <h3 class="text-center textColor"><b>SELFIE WITH THE PROOF</b></h3>
        <h6 class="text-center headingColor">
          <b
            >Please take a selfie with your document so that it's clearly
            visible and does not cover your face</b
          >
        </h6>
        <p class="text-center headingColor">
          Our alogrithm will compare your face in the selfie to the document
          photo.Make sure to upload a bright photo where all text is clearly
          visible
        </p>
      </div>
      <div class="container d-flex justify-content-around">
        <v-card width="400">
          <v-card-text>
            <div class="container">
              <v-icon class="margin" size="120">mdi-cloud-upload</v-icon>
              <h5 class="text-center">Upload the document</h5>
              <p class="text-center">
                .jpg or .pdf should be more than 500KB or 300DPI
              </p>
            </div>
          </v-card-text>
        </v-card>
        <v-card width="400">
          <v-card outlined>
            <v-img :src="image" />
          </v-card>
        </v-card>
      </div>
      <div class="container d-flex justify-content-center">
        <v-chip class="ma-1 mr-5 pa-8" large> Previous </v-chip>
        <v-chip class="ma-1 pa-8 ml-5" large> Next Step</v-chip>
      </div>
      <div class="d-flex justify-content-center width container">
        <v-img :src="imageBottom" />
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
      image: require("@/assets/images/mobile-image.jpeg"),
      imageBottom: require("@/assets/images/ss.png"),
    };
  },
};
</script>
<style scoped>
.margin {
  margin-left: 28%;
}
.width {
  width: 200px;
}
.textColor {
  color: rgb(63, 67, 148);
}
.headingColor {
  color: rgba(63, 67, 148, 0.7);
}
</style>