<template>
    <div class="mood-slider-container">
      <!-- Slider for the mood value -->
      <input type="range" min="1" max="5" v-model="moodValue" @input="emitMoodValue" />
      <button @click="saveMood()">Soumettre</button>
    </div>
  </template>
  
  <script>
  import { useMoodStore } from '/stores/moodStore'

  export default {
    name: 'moodSlider',
    setup(){
      const moods = useMoodStore()
      return {
        insertMood: moods.insertMood
      }
    },
    data() {
      return {
        moodValue: 3, // Default mood value, you can set it to any default value you like
      };
    },
    methods: {
      // Emit the current mood value to the parent component
      emitMoodValue() {
        this.$emit('moodSelected', this.moodValue);
      },
      async saveMood() {
        this.insertMood(this.moodValue)
    }
  }
}
  </script>
  
  <style>
  /* Add styles for your slider here */
  .mood-slider-container {
    /* Example style */
    padding: 20px;
  }
  </style>
  