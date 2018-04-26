<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <ul class="list-group">
          <li class="list-group-item active">category</li>
          <li class="list-group-item" data-toggle="modal" data-target="#addartikel">Add artikel</li>
        </ul>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6" v-for="artikel in listartikel">
            <div class="card">
              <img class="card-img-top" :src="artikel.thumbnail" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{artikel.title}}</h5>
                <small class="card-title"> <i> author : {{artikel.author.username}}</i></small> <br>
                <router-link :to="{ name: 'Detailartikel', params: {id:artikel._id} }">
                  <a href="#" class="btn btn-primary">Read more</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="addartikel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">add artikel</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input type="text" class="form-control" v-model="title" placeholder="title">
            </div>
            <div class="form-group">
              <textarea name="name" rows="8" style="width:100%;" v-model="content" placeholder="isi artikel"></textarea>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="categori" placeholder="kategori">
            </div>
              <input type="file" id="picture">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addartikel">add artikel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '',
      content: '',
      categori: '',
      listartikel: []
    }
  },
  created: function () {
    this.showall()
  },
  methods:{
    showall () {
      axios.get('http://localhost:3000/artikel').then(response =>{
        this.listartikel = response.data.data
      })
    },
    addartikel () {
      const fileInput = document.querySelector('#picture')
        const formData = new FormData()
        formData.append('picture', fileInput.files[0])
        formData.append('title', this.title)
        formData.append('content', this.content)
        formData.append('categori', this.categori)
      axios.post('http://localhost:3000/artikel/', formData, {headers:{token: localStorage.getItem('token')}}).then(response=>{
        console.log(response)
        this.showall()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding-top:20px;
}
</style>
