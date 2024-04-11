<template>
  <div id="app">
    <h1>Mood Tracker</h1>
    <moodSlider @moodSelected="handleMoodSelected"/>
    <moodDisplay :moodValue="selectedMood"/>
    <moodGraph/>
  </div>
</template>

<script>
import moodSlider from './components/moodSlider.vue'
import moodDisplay from './components/moodDisplay.vue'
import moodGraph from './components/moodGraph.vue'

export default {
  name: 'App',
  components: {
    moodSlider,
    moodDisplay,
    moodGraph
  },
  data(){
    return {
      selectedMood: 3
    }
  },
  methods:{
    handleMoodSelected(moodValue){
      this.selectedMood = moodValue;
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
