<template>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
            <GitHubRepo/>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import GitHubRepo from './GitHubRepo.vue'
    export default { 
        components: {
            GitHubRepo
        },
        data: () => ({}),
    }
  </script>
  