<template>
  <div>
    <app-menu></app-menu>
    <app-match></app-match>
    <app-games></app-games>
    <app-help-section></app-help-section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import menu from './menu.vue';
import match from './match.vue';
import games from './games.vue';
import helpSection from './helpSection.vue';
import footer from './footer.vue';

export default {
  data() {
    return {
      elements: this.$store.state.tourData
    }
  },
  components: {
    'app-menu': menu,
    'app-match': match,
    'app-games': games,
    'app-help-section': helpSection,
    'app-footer': footer,
  }
};
</script>