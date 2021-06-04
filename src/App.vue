<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list rounded>
        <v-list-item-group
            v-model="selectedItem"
            color="primary"
        >
          <v-list-item
              v-for="(item, i) in items"
              :to="item.to"
              :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>SHIKKHANGON BD</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <PublicExamResult></PublicExamResult>
        <router-view></router-view>
        <Footer></Footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import PublicExamResult from "./components/PublicExamResult";




export default {
  data: () => ({
    drawer: null,
    items: [
      { text: 'Smart PDF', icon: 'mdi-file-document', to:'/' },
      { text: 'Study', icon: 'mdi-school', to:'/study' },
      { text: 'Skill Development', icon: 'mdi-align-vertical-bottom', to:'/skillDevelopment' },
      { text: 'Code With Redoy', icon: 'mdi-abacus', to:'/codeWithRedoy' },
      { text: 'About US', icon: 'mdi-account-group', to:'/about' },
      { text: 'SignOut', icon: 'mdi-logout', to:'/register-signIn' },
    ],

  }),
  components:{
    Footer,
    PublicExamResult
  }

}
</script>
