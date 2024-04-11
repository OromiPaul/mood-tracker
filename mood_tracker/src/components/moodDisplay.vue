<template>
    <div class="mood-display"></div>
    <p>{{ moodEmoji }}</p>
</template>

<script>
export default {
  name: 'MoodDisplay',
  props: {
    moodValue: {
      type: Number,
      required: true
    }
  }, 
  computed: {
    // Compute the emoji based on the moodValue prop
    moodEmoji() {
        console.log("changement ! " + this.moodValue);
      switch (this.moodValue) {
        case '1': return '😢'; // Sad
        case '2': return '😟'; // Unhappy
        case '3': return '😐'; // Neutral
        case '4': return '😊'; // Happy
        case '5': return '😁'; // Very Happy
        default: return '😐'; // Default to neutral if out of range
      }
    }
  }
};
</script>

<style>

</style>