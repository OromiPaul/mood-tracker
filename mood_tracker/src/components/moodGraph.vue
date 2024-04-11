<template>
    <div>
      <Bar
          :options= "chartOptions"
          :data= "chartData"
      />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  import { db } from '@/firebase';
  import { collection, getDocs } from "firebase/firestore";
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [],
          datasets: [ { data: [] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    },
    mounted(){
      this.fetchData();
    },
    methods: {
      async fetchData(){
        const querySnapshot = await getDocs(collection(db, "moods"));
        
        const labels = [];
        const data = [];
        querySnapshot.forEach(doc => {
          const timestamp = doc.data().timestamp;
          console.log(timestamp);
          const date = timestamp.toDate();
          console.log(date);
          const day = date.getDate();

          labels.push(day);
          data.push(doc.data().mood);
        })
        this.chartData = { labels, datasets: [{ data }]};
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your CSS here */
  </style>
  