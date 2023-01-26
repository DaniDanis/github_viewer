<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/DaniDanis/github_viewer"
        target="_blank"
        text
      >
        <span class="mr-2">Repositorio</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <GitHubViewer/>
    </v-main>
  </v-app>
</template>

<script>
import GitHubViewer from './components/GitHubViewer.vue';
export default {
  name: 'App',

  components: {
    GitHubViewer
  },

  data: () => ({
    //
  }),
};
</script>
