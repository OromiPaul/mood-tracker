<template>
  <div>
    <VueSpinner size="50" />
    <p>Chargement des données en cours...</p>
  </div>
</template>

<script>
import { VueSpinner } from 'vue3-spinners'

export default {
  name: 'LoadingSpinner',
  components: {
    VueSpinner
  }
};
</script>