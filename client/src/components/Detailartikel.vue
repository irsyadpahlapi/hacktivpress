<template>
  <div class="container">
    <center>
    <div class="col-md-10">
        <div class="card">
          <img class="card-img-top" :src="listartikeldetail.thumbnail" alt="Card image cap" style="height:400px; width:300px">
          <div class="card-body">
            <h5 class="card-title">{{listartikeldetail.title}}</h5>
            <p style="float:left; text-indent:20px;">{{listartikeldetail.content}}</p>
          </div>
        </div>

    </div>
  </center>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Detailartikel',
  data () {
    return {
      listartikeldetail: {}
    }
  },
   created: function () {
     axios.get(`http://localhost:3000/artikel/showdetail/${this.$route.params.id}`).then(response => {
       this.listartikeldetail = response.data.data
     })
   }
}
</script>

<style lang="css">
</style>
