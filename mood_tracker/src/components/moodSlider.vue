<template>
    <div class="mood-slider-container">
      <!-- Slider for the mood value -->
      <input type="range" min="1" max="5" v-model="moodValue" @input="emitMoodValue" />
      <button @click="saveMood()">Soumettre</button>
    </div>
  </template>
  
  <script>
  import { db } from '@/firebase';
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


  export default {
    name: 'moodSlider',
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
        try {
            const moodEntry = {
                mood: this.moodValue,
                timestamp: serverTimestamp() // Correct usage of serverTimestamp
            };
        await addDoc(collection(db, 'moods'), moodEntry);
        console.log("added successfully");
        } catch(error) {
            console.error(error);
        }
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
  