<template>
  <h1>Click reaction timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
 <Result v-if="showResults" :score="score"/>
  
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'


export default {
  name: 'App',
  components: {Block, Result},
  data(){
    return{
isPlaying:false,
delay:null,
score:null,
showResults:false
    }

  },
  methods:{
    start(){
      this.delay= 2000 + Math.random() * 5000
      this.isPlaying=true
      this.showResults= false
    },
    endGame(reactionTimer){
      this.score = reactionTimer
      this.isPlaying= false
      this.showResults= true

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
  color: #444;
  margin-top: 60px;
}
button {
background: green;
color:whitesmoke;
border: none;
font-size: 14px;
padding: 8px 16px;
border-radius: 7pc;
cursor: pointer;
margin: 10px;
}
button[disabled]{
opacity: 0.2;
cursor:not-allowed;
}
</style>
