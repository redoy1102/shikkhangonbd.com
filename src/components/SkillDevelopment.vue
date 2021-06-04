<template>
  <div>

    <v-alert
        icon="mdi-school"

        prominent
        type="success"
    >
      <v-row align="center">
        <v-col class="grow">
          <h1>Click to see all videos of our Skill Development Section.</h1>
        </v-col>
        <v-col class="shrink">
          <v-btn href="https://cutt.ly/shikkhangonBD-Skill-Development-Section" target="_blank">Click Me</v-btn>
        </v-col>
      </v-row>
    </v-alert>


    <v-alert
        border="left"
        colored-border
        color="deep-purple accent-4"
        elevation="2"
        class="text-center"
    >
      <h1>Microsoft Office</h1>
    </v-alert>

    <v-container>
      <v-layout row>
        <v-flex xs12 md4 v-for="msOffice in msOffices" :key="msOffice.embed">
          <v-card
              class="mx-auto mb-8"
              max-width="370"
              elevation="8"
          >
            <p v-html="msOffice.embed" class="pt-1"></p>

            <v-card-title>
              {{ msOffice.title }}
            </v-card-title>

            <v-card-actions>


              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="msOffice.show = !msOffice.show"
              >
                <v-icon>{{ msOffice.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="msOffice.show">
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


    <!--    Educational Website Review-->

    <v-alert
        border="left"
        colored-border
        color="deep-purple accent-4"
        elevation="2"
        class="text-center"
    >
      <h1>Educational Website Review</h1>
    </v-alert>

    <v-container>
      <v-layout row>
        <v-flex xs12 md4 v-for="website in websites" :key="website.embed">
          <v-card
              class="mx-auto mb-8"
              max-width="370"
              elevation="8"
          >
            <p v-html="website.embed" class="pt-1"></p>

            <v-card-title>
              {{ website.title }}
            </v-card-title>

            <v-card-actions>


              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="website.show = !website.show"
              >
                <v-icon>{{ website.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="website.show">
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

    <!--    Essential Software for Computers-->

    <v-alert
        border="left"
        colored-border
        color="deep-purple accent-4"
        elevation="2"
        class="text-center"
    >
      <h1>Essential Software for Computers</h1>
    </v-alert>

    <v-container>
      <v-layout row>
        <v-flex xs12 md4 v-for="computerSoftware in computerSoftwares" :key="computerSoftware.embed">
          <v-card
              class="mx-auto mb-8"
              max-width="370"
              elevation="8"
          >
            <p v-html="computerSoftware.embed" class="pt-1"></p>

            <v-card-title>
              {{ computerSoftware.title }}
            </v-card-title>

            <v-card-actions>


              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="computerSoftware.show = !computerSoftware.show"
              >
                <v-icon>{{ computerSoftware.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="computerSoftware.show">
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


    <!--    Educational Apps Review-->
    <v-alert
        border="left"
        colored-border
        color="deep-purple accent-4"
        elevation="2"
        class="text-center"
    >
      <h1>Educational Apps Review</h1>
    </v-alert>

    <v-container>
      <v-layout row>
        <v-flex xs12 md4 v-for="educationalApp in educationalApps" :key="educationalApp.embed">
          <v-card
              class="mx-auto mb-8"
              max-width="370"
              elevation="8"
          >
            <p v-html="educationalApp.embed" class="pt-1"></p>

            <v-card-title>
              {{ educationalApp.title }}
            </v-card-title>

            <v-card-actions>


              <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="educationalApp.show = !educationalApp.show"
              >
                <v-icon>{{ educationalApp.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="educationalApp.show">
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
  name: "SkillDevelopment",
  data() {
    return {
      msOffices: [
        {
          title: "Microsoft Word",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyXFFVU34lycooQ6eL_CsFKy\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },

        {
          title: "Microsoft PowerPoint",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyUQLhM_cfiCtW2zy4e36n0O\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },

      ],

      websites: [
        {
          title: "I Love PDF Website",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyXz_kmsxW4G8AXr6UOjHzxf\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },

        // {
        //   title: "Google Meet [Coming Soon...]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   embed: ""
        // },

        // {
        //   title: "Google Classroom [Coming Soon...]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   embed: ""
        // },

        {
          title: "Google Forms",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyXkvm24iBVbCyp2fEVwIIbE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
      ],

      computerSoftwares: [
        {
          title: "OBS Screen Recorder",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyUV5NLdMjIuYMnLzKseJdPz\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },
      ],

      educationalApps: [
        {
          title: "CamScanner",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          embed: "<iframe width=\"370\" height=\"200\" src=\"https://www.youtube.com/embed/videoseries?list=PLeqnvPK4PpyWFzJlcHQD4Bb2T13Eefmym\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        },

        // {
        //   title: "Zoom",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   embed: ""
        // },

        // {
        //   title: "I Love PDF [Coming Soon...]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   embed: ""
        // },

        // {
        //   title: "Google Classroom [Coming Soon...]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   embed: ""
        // },

        // {
        //   title: "Google Meet [Coming Soon...]",
        //   text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
        //       "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
        //       "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
        //       "                  a way to escape.",
        //   show: false,
        //   embed: ""
        // },
      ]
    }
  }
}
</script>

<style scoped>

</style>
