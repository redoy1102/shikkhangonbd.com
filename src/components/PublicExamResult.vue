<template>
  <div>

    <v-alert
        icon="mdi-school"
        prominent
        type="error"
        dismissible
    >
      <v-row align="center">
        <v-col class="grow">
          <h2>Find your PUBLIC EXAMINATION Result.</h2>
        </v-col>
        <v-col class="shrink">
          <v-btn href="https://cutt.ly/all-board-exam-result" target="_blank">Find Result</v-btn>
        </v-col>
      </v-row>
    </v-alert>

  </div>
</template>

<script>
export default {
  name: "PublicExamResult"
}
</script>

<style scoped>

</style>
