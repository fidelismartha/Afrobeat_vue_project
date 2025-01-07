<template>
  <div>
    <div v-if="video" class="container ">
        <div class="row mt-2">
            <div class="col-lg-6 p-3 col-md-8 mx-auto col-sm-12 text-white songs">
              <h2 class="  text-warning text-center mb-3"> {{ video.name  }}</h2>
               <div  class="card border-0">
                
             
                <!-- <video controls autoplay :src="video.video.url">
                 
                </video> -->
                <img :src="video.img" alt="">
                
                 <div class="card-body songs ">
                   <h6   class="card-title moving-text "> {{ video.content }}</h6>
                   <!-- <h6 v-for="song in video.popular_songs" :key="song" class="card-subtitle mb-2 text-warning ">{{ song }}</h6> -->
                   <p  class="card-text text-warning"> <i class="fa  fa-music" aria-hidden="true"></i> {{ video.popular_songs }}</p>
                   
                 </div>
               </div>
            </div>
        </div>
    </div>
    <p v-else class="text-dark text-center">Loading... Your Data</p>
  </div>
</template>

<script>
export default {   
    props: {
  id: String,
},  
data(){
    return{
   video: "",
   song:[],
    }
},

mounted(){
  
  
  fetch('/data.json')
  .then((response)=>response.json())
  .then((data)=>{

    this.song = data;
    console.log("fetched data:", this.song);

      const id = this.$route.params.id;
      console.log('routesing', this.$route);
      console.log(id);
      // console.log(this.video);
      
        this.video = data[id];
        console.log("this is the videos", this.video);
    })
   
    
    
}
}
</script>

<style  scoped>


body{
    background-color: black;
    
}
.songs{
    background-color: black;
     /* background-color:rgb(6, 6, 61); */
     color:goldenrod;
  }
  .songs:hover{
    background-color: rgb(5, 5, 29);
    color: white;
    cursor: pointer;
    transition: .9s linear;
  }

 
  
</style>