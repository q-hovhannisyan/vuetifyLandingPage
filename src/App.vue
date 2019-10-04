<template>
  <v-app>
    <v-content>
      <AllContent/>
    </v-content>
  </v-app>
</template>

<script>
  import AllContent from './components/AllContent';

  export default {
    name: 'App',
    components: {
      AllContent,
    }
  };
</script>
