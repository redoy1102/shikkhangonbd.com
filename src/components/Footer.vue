<template>
  <v-footer
      dark
      padless
  >
    <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
            v-for="social in socialMedia"
            :key="social.icon"
            class="mx-4 white--text"
            icon
            :href="social.link"
            target="_blank"
        >
          <v-icon size="24px">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        All Rights Reserved By <strong><a class="white--text" href="https://cutt.ly/md-fuadul-islam-redoy" target="_blank">Md Fuadul Islam Redoy</a></strong> © - {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      socialMedia: [
        {
          icon: 'mdi-facebook',
          link: 'https://cutt.ly/page_md-fuadul-islam-redoy'
        },
        {
          icon: 'mdi-twitter',
          link: ''
        },
        {
          icon: 'mdi-linkedin',
          link: 'https://cutt.ly/md-fuadul-islam-redoy'
        },
        {
          icon: 'mdi-instagram',
          link: 'https://cutt.ly/insta_md-fuadul-islam-redoy'
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>
