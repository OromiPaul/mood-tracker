<template>
  <div id="app">
    <h1>Mood Tracker</h1>
    <LoadingSpinner v-if="loaderDisplay" />
    <moodSlider @moodSelected="handleMoodSelected" v-if="inputToday"/>
    <moodDisplay :moodValue="selectedMood" v-if="inputToday"/>
    <moodGraph v-if="!loaderDisplay && !inputToday"/>
  </div>
</template>

<script>
import moodSlider from './components/moodSlider.vue'
import moodDisplay from './components/moodDisplay.vue'
import moodGraph from './components/moodGraph.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

import { db } from '@/firebase';
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";


export default {
  name: 'App',
  components: {
    moodSlider,
    moodDisplay,
    moodGraph,
    LoadingSpinner
  },
  data(){
    return {
      selectedMood: 3,
      inputToday: false,
      loaderDisplay: true
    }
  },
  mounted(){
    setTimeout(() => {
      this.fetchLastData();
    }, "2500");
    
  },
  methods:{
    handleMoodSelected(moodValue){
      this.selectedMood = moodValue;
    },
    async fetchLastData(){
      
      const moods = collection(db, "moods");
      const q = query(moods, orderBy("timestamp", 'desc'), limit(1));

      const querySnapshot = await getDocs(q);
        
      const lastUpdated = querySnapshot.docs[0].data().timestamp.toDate().getDate();
      const now = new Date();

      if(now.getDate() === lastUpdated){
        this.inputToday = false; 
      } else {
        this.inputToday = true;
      }
      this.loaderDisplay = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
