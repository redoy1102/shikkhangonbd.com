<template>
<div>
  <v-alert
      icon="mdi-facebook"
      prominent
      type="success"
      dismissible
  >
    <v-row align="center">
      <v-col class="grow">
        <h2>Join <strong>Code With Redoy</strong> Facebook Group for Downloading all source code.</h2>
      </v-col>
      <v-col class="shrink">
        <v-btn href="https://cutt.ly/code-with-redoy" target="_blank">Join</v-btn>
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
    <h1>Programming Languages</h1>
  </v-alert>



  <v-container>

    <v-layout row>
      <v-flex xs12 md4 v-for="language in languages" :key="language.title">
        <v-card
            class="mx-auto mb-8"
            max-width="344"
            elevation="8"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
              <h2>{{ language.title }}</h2>
          </v-card-title>

          <v-card-actions>

            <v-btn
                color="success"
                text
                :to='language.to'
            >
              <v-icon left class="red--text">
                mdi-youtube
              </v-icon>
              Classes
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="language.show = !language.show"
            >
              <v-icon>{{ language.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="language.show">
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
  name: "CodeWithRedoy",
  data(){
    return{
      languages: [
        {
          title: "C Programming",
          text: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time\n" +
              "                  for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!\n" +
              "                  Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find\n" +
              "                  a way to escape.",
          show: false,
          to: '/codeWithRedoy/cprogramming'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
