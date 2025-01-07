<template>
  <div class="container ">
    <div class="row">
        <div class="col-12">
            <h2 class="text-warning text-center">Afrobeat Showcase</h2>
        </div>
    </div>
    <div v-if="users"  class="row">
      <!-- :to="{ name: 'ItemDetail', params: { id: item.id } } -->
        <div  v-for="user in users" :key="user.id" class="col-lg-3 col-md-6 col-sm-12 mb-sm-3">
            <router-link :to="{ name: 'About' ,params: {id: user.id} }" style="text-decoration: none;">
                <div class="card bg-dark text-warning">
                  <img :src="user.img" alt="Item Image" />
              <!-- <img src="../assets/images/asake.jpg" class="card-img-top" alt="..."> -->
              <div class="card-body">
                <h5 class="card-title">{{ user.name }} </h5>
                <h6 class="card-subtitle mb-2 text-muted ">{{ user.genre }}</h6>
                <!-- <p class="card-text">popular song: joha</p> -->
                
              </div>              
            </div>
            </router-link>
        </div>
</div>
<p v-else class="text-white">loadinggggg</p>
  </div>
</template>

<script>

export default {
data(){
  return {
    users: []
  }
},


mounted(){
   fetch('/data.json')
.then((response) => response.json())
 .then((data) => {
    this.users = data;
    console.log(data);
    
  });
},

}


</script>

<style>
body{
  /* background-color: rgb(10, 2, 2); */
    background-color: rgb(6, 6, 19);
}
</style>