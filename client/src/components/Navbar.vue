<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark  justify-content-end">
      <div class="row">
        <div class="col-md-6">
          <button type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModal">Register</button>
        </div>
        <div class="col-md-2">
          <router-link :to="{ name: 'Login'}">
            <button type="button" class="btn btn-light">Login</button>
          </router-link>
        </div>
      </div>
    </nav>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="inputname">Username</label>
              <input type="text" class="form-control" id="inputname" v-model="username" placeholder="Enter your username">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="register">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    register () {
      axios.post('http://localhost:3000/users/signup',{
        username: this.username,
        password: this.password
      }).then(response => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.id)
        this.$router.push('/')
      })
    }
  },
  computed: mapState([
    'token'])
}
</script>

<style lang="css">
label,::-webkit-input-placeholder {
  font-size:12px;
  color:rgba(0,0,0,0.5)
}
</style>
