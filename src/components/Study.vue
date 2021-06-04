<template>
  <div>
    <h1 class="white--text header text-center my-5 pa-1">SSC General Math</h1>
    <v-container>

      <v-layout row>
        <v-flex xs12 md4 v-for="sscVideo in sscVideos" :key="sscVideo.videoLink">
          <v-card
              class="mx-auto mb-8"
              max-width="370"
              elevation="8"
          >
            <p v-html="sscVideo.embed" class="pt-1"></p>

            <v-card-title>
              {{ sscVideo.title }}
            </v-card-title>

            <v-card-actions>

              <v-btn
                  color="success"
                  text
                  :to='sscVideo.to'
              >
                <v-icon left class="red--text headline">
                  mdi-file-download
                </v-icon>
                Download Smart PDF
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="sscVideo.show = !sscVideo.show"
              >
                <v-icon>{{ sscVideo.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="sscVideo.show">
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

        <v-flex xs12 md4 v-for="hscVideo in hscVideos" :key="hscVideo.videoLink">
          <v-card
              class="mx-auto mb-4"
              max-width="370"
              elevation="8"
          >
            <p v-html="hscVideo.embed"></p>

            <v-card-title>
              {{ hscVideo.title }}
            </v-card-title>

            <v-card-actions>
              <v-btn
                  color="success"
                  text
                  :to='hscVideo.to'
              >
                <v-icon left class="red--text headline">
                  mdi-file-download
                </v-icon>
                Download Smart PDF
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="hscVideo.show = !hscVideo.show"
              >
                <v-icon>{{ hscVideo.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="hscVideo.show">
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


    <h1 class="white--text header text-center my-5 pa-1">HSC ICT</h1>

    <v-container>
      <v-layout row>

        <v-flex xs12 md4 v-for="hscICtVideo in hscICtVideos" :key="hscICtVideo.videoLink">
          <v-card
              class="mx-auto mb-4"
              max-width="370"
              elevation="8"
          >
            <p v-html="hscICtVideo.embed"></p>

            <v-card-title>
              {{ hscICtVideo.title }}
            </v-card-title>

            <v-card-actions>
              <v-btn
                  color="success"
                  text
                  :to='hscICtVideo.to'
              >
                <v-icon left class="red--text headline">
                  mdi-file-download
                </v-icon>
                Download Smart PDF
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="hscICtVideo.show = !hscICtVideo.show"
              >
                <v-icon>{{ hscICtVideo.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="hscICtVideo.show">
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
  name: "Study",
  data() {
    return {

      sscVideos: [
        {
          title: "Chapter-3",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyWD3XeiJozLU0lP1R131QSR\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
        },
        {
          title: "Chapter-4 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyUQao_OtOualMrLaCfUTWLM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
        },

        {
          title: "Chapter-7 [Logarithm]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyW79yFroGhQzBARMMoD0J7j\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'

        },

        {
          title: "Chapter-9 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyUBTsVpAizD2gjuOx31NHX5\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
        },

        {
          title: "Chapter-10 [Trigonometry]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyU2f3AgZiYPHU22EsIeHD79\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
        },

        {
          title: "Chapter-17",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyXOS4pKS44YVhKiZXK6Tmgr\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
        },
      ],

      hscVideos: [
        {
          title: "Matrix & Determinants",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyWTSN1LtF1W0LHyGSPnNU4w\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'

        },

        {
          title: "Trigonometry [Chapter-7]",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyUfY8lPU94Wx7nnFAn6B-NZ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
        },

        {
          title: "Differentiate",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyV-c_nVz-PbWNC-ANSR8cbw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
        }
      ],

      hscICtVideos: [
        {
          title: "C Programming",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyVtcGdP8ULz5cSUrLZZwVqY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
        },

        {
          title: "Number System and Digital Device",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyVYfyScSL4SuzxG7mDvm4Ee\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          to: '/'
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
