<template>
  <div>
    <h1 class="white--text header text-center my-5 pa-1">SSC General Math</h1>
    <v-container>

      <v-layout row>

        <v-flex xs12 md4 v-for="pdf in sscPdfs" :key="pdf.videoLink">
          <v-card
              class="mx-auto mb-4"
              max-width="344"
              elevation="8"
          >
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
            ></v-img>

            <v-card-title>
              {{ pdf.title }}
            </v-card-title>

            <v-card-subtitle>
              Price: {{ pdf.price }} taka
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                  color="orange lighten-2"
                  text
                  :to='pdf.route'
              >
                Enroll Now
              </v-btn>

              <v-btn
                  color="orange lighten-2"
                  text
                  :href='pdf.videoLink'
                  target="_blank"
              >
                <v-icon left class="red--text">
                  mdi-youtube
                </v-icon>
                Live Preview
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="pdf.show = !pdf.show"
              >
                <v-icon>{{ pdf.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="pdf.show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find
                  a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

    <h1 class="white--text header text-center my-5 pa-1">HSC Higher Math 1st Part</h1>

    <v-container>
      <v-layout row>

        <v-flex xs12 md4 v-for="pdf in hscPdfs" :key="pdf.videoLink">
          <v-card
              class="mx-auto mb-4"
              max-width="344"
              elevation="8"
          >
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
            ></v-img>

            <v-card-title>
              {{ pdf.title }}
            </v-card-title>

            <v-card-subtitle>
              Price: {{ pdf.price }} taka
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                  color="orange lighten-2"
                  text
                  :to='pdf.route'
              >
                Enroll Now
              </v-btn>

              <v-btn
                  color="orange lighten-2"
                  text
                  :href='pdf.videoLink'
                  target="_blank"
              >
                <v-icon left class="red--text">
                  mdi-youtube
                </v-icon>
                Live Preview
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="pdf.show = !pdf.show"
              >
                <v-icon>{{ pdf.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="pdf.show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find
                  a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "smartpdf",
  data() {
    return {

      sscPdfs: [
        {
          title: "Chapter-4 [Logarithm]",
          price: 30,
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          route: '/payment',
          videoLink: "https://youtu.be/2-4Ac6DPs1c"

        },

        {
          title: "Chapter-9 [Trigonometry]",
          price: 30,
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          route: '/payment',
          videoLink: "https://youtu.be/y9nm29aPwcU"
        },
        {
          title: "Chapter-10 [Trigonometry]",
          price: 30,
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          route: '/payment',
          videoLink: "https://youtu.be/piw_LzPrWhE"
        }
      ],

      hscPdfs: [
        {
          title: "Matrix & Determinants",
          price: 30,
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          route: '/payment',
          videoLink: "https://youtu.be/piw_LzPrWhE"

        },

        {
          title: "Trigonometry [Chapter-7]",
          price: 30,
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          route: '/payment',
          videoLink: "https://cutt.ly/hsc-chapter-7-pdf-review"
        },
        {
          title: "Differentiate [Pre-Order]",
          price: 30,
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          route: '/payment',
          videoLink: "https://youtu.be/piw_LzPrWhE"
        }
      ]
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #3498db;
}


</style>
