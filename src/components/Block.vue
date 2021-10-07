<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
  <p class="click">Click Me Now</p>
  </div>
</template>

<script>

export default {
    
props:['delay'],
data(){
    return{
        showBlock: false,
        timer:null,
        reactionTime:0

    }

},
mounted() {
    setTimeout(()=>{
        this.showBlock = true
        this.startTimer()
    }, this.delay)
},
methods:{
    startTimer(){
        this.timer = setInterval(() =>{
            this.reactionTime += 10
        }, 10)

    },
    stopTimer(){
        clearInterval(this.timer)
this.$emit('end', this.reactionTime)
    }
}
}
</script>

<style>
.block{
width:30%;
border-radius:7em;
background:skyblue;
text-align: center;
padding:80px 0;
margin: 30px auto;
}
.click{
font-size: 16px;
color:blueviolet;
}
</style>