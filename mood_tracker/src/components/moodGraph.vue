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
  import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [],
          datasets: [{ 
            data: [] 
          }]
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
        const moods = collection(db, "moods");
        const q = query(moods, orderBy("timestamp", 'asc'), limit(7));

        const querySnapshot = await getDocs(q);

        console.log(querySnapshot.docs)
        
        const labels = [];
        var data = [];
        querySnapshot.forEach(doc => {
          const timestamp = doc.data().timestamp;
          const date = timestamp.toDate();
          const day = date.getDate();

          labels.push(day);
          data.push(doc.data().mood);
        });

        this.chartData = { labels, datasets: [{ 
          label: "Last week data",
          data
         }]};
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your CSS here */
  </style>
  