<template>
<div id="result">
<p> Reaction Time: {{score}} ms</p>
   <p class="rank">{{rank}}</p>
</div>
   
</template>

<script>
export default {
props:['score'],
data(){
    return{
        rank:null
    }
    
},
mounted() {
        if(this.score < 300){
            this.rank = 'Tesla fingers' + '  ' + ' keep it up'
            }else if (this.score < 400) {
            this.rank ='BMW Fingers' + '  ' + ' keep clicking until you reach Tesla Fingers'
        }else{
            this.rank = 'Trekker Fingers' + ' ' + ' losser'
        }
    }
}
</script>

<style>
.rank {
color:green;
font-size: 20px;
border: none;
}
#result {
padding: 19px 19px;
border-radius: 7pc;
border-style:none;

margin: 80px;
}
</style>