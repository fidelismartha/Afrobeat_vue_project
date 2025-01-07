<template>
  <div> 
    <!-- <p  v-for="user in users" :key="user.id">
      {{ user.name }}
    </p> -->
<!-- <p v-if="data">
    {{ data.name  }} 

</p>
<p v-else>loadinggggg</p> -->
<div  v-if="about" class="container">
  <div class="row  bg- songs   rounded-3 mt-2">
    <div class="col-lg-5 d-flex align-items-center">
      <div>
        <img :src="about.img" alt="" class="logoimage">
      </div>
       <div class="mx-3">
        <h3>{{about.name}}</h3>
        
       </div>
    
    </div>
  </div>
  <div class="row mt-1 p-3 rounded-3 ">
    <div class="card mx-auto p-3 songs col-md-8 col-lg-6 col-12  b text-warning text-center" >
      <!-- <img src="../assets//images/bournaboy.jpg" class="card-img-top " alt="..."> -->
      <img :src=" about.img" class="card-img-top" alt="Artist Image"/>
      <div class="card-body">
        <h3 class="card-title">{{ about.name }}</h3>
        <h6 class="card-subtitle mb-2  ">{{ about.genre }}</h6>
        <p class="card-text"></p>
        
      </div>
    </div>
  </div>

 <div class="row p-  ">
  <div class="col-lg-12  mx-auto col-md-8 col-sm-12">
    <div class="card mt-2 songs " >
      <div class="card-body ">
        <h5  class="card-title" >Some of {{ about.name }} popular songs</h5>
      </div>
    </div>
  </div>
 </div>
<div class="row mb-3 ">

  <div v-for="song in about.popular_songs " :key="song" class="col-lg-3 col-md-6 col-sm-12 ">

    <router-link :to="{name: 'videos', path: '/videoplayer', params: {id: song}}" style="text-decoration: none;">
    <div class="card mt-2 bg- songs" >
      <div class="card-body ">
        <h6  class="card-title" >{{ song }} <i class="fa fa-music" aria-hidden="true"></i></h6>
      </div>
    </div>

    </router-link>
  </div>
  
  


</div>




  
</div>
    <p v-else>loading..........</p>



  </div>
</template>

<script>


export default {
  

props: {
  id: String,
},  
data(){
    return {
      songs: [],
      // users: "",
      // user: {},
      about: [],
    }
  },

    mounted(){
    // console.log(id);
    
    fetch('/data.json')
    .then((response) => response.json())
    .then((data) => {
   const id = this.$route.params.id;
   console.log('Route:', this.$route);
  // console.log(data[this.$props.id]);
  
    this.about = data[this.$props.id];
    // console.log(data[this.props.id]);
    
  });



   
  },
 
 


}



</script>

<style  scoped>
.logoimage{
  width:  70px;
  height: 65px;
  border-radius: 100%;
}
.rounded_img{
  border-radius: 100%;
  /* height: 309px;
  width: 340px; */
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

