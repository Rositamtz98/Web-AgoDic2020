<template>
  <div class="container-fluid mt-4">
  <div id = H> </div>
  <br><br>
  <div id = EP> </div>

    <h1 class="h1" style="text-align:center;" id="topSection" >Rosamaria Martinez Gonzalez</h1>
    <h6 style="text-align:center;"> <a  href="mailto:rositamtz.98@gmail.com">rositamtz.98@gmail.com</a></h6>
    <h6 style="text-align:center;"> <a href= "https://github.com/Rositamtz98"> https://github.com/Rositamtz98</a></h6>

    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
      <div class="container" style="padding-top:2%;" >
        <div class="row">
            <div class="col-md-12">
              <h5 style ="padding-bottom:1%;"> Experiencia Profesional </h5>
            </div>
          </div>
        <ul v-for="post in posts" :key="post.id">
        <ul v-if="post.type == 'Profesional'">
          <div class="row">
            <div class="col-md-8">
              <h6>{{post.title}}</h6>
            </div>

            <div class="col-md-4" style="text-align: right">
              <h6>{{post.date}}</h6>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12" style="white-space: pre-wrap;">
              <p>{{post.body}}</p>

            </div>
          </div>
          <div id = PP> </div>

          </ul>
          </ul>
        </div>


        <div class="container" style="padding-top:2%;" >
          <div class="row">
              <div class="col-md-12">
                <h5> Projectos Personales </h5>
              </div>
            </div>
          <ul v-for="post in posts" :key="post.id">
          <ul v-if="post.type == 'Proyecto'">
            <div class="row">
              <div class="col-md-8">
                <h6>{{post.title}}</h6>
              </div>

              <div class="col-md-4" style="text-align: right">
                <h6>{{post.date}}</h6>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12" style="white-space: pre-wrap;">
                <p>{{post.body}}</p>
              </div>
            </div>
            <div id = L> </div>
            </ul>
            </ul>
          </div>


          <div class="container" style="padding-top:2%;" >
            <div class="row">
                <div class="col-md-12">
                  <h5> Liderazgo </h5>
                </div>
              </div>
            <ul v-for="post in posts" :key="post.id">
            <ul v-if="post.type == 'Liderazgo'">
              <div class="row">
                <div class="col-md-8">
                  <h6>{{post.title}}</h6>
                </div>

                <div class="col-md-4" style="text-align: right">
                  <h6>{{post.date}}</h6>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12" style="white-space: pre-wrap;">
                  <p>{{post.body}}</p>
                </div>
              </div>
              <div id = TS> </div>
              </ul>
              </ul>
            </div>


          <div class="container" style="padding-top:2%;" >
            <div class="row">
                <div class="col-md-12">
                  <h5> Technical Skills </h5>
                </div>
              </div>
            <ul v-for="post in posts" :key="post.id">
            <ul v-if="post.type == 'Skill'">
              <div class="row">
                <li class="col-md-8">
                  {{post.title}}
                </li>

              </div>
              </ul>
              </ul>
            </div>
            <mdb-container class="mt-5" id="contact">
                  <mdb-card-title class="mt-4 h2">Contact me</mdb-card-title>
                  <mdb-card-body>
                    <form class="needs-validation" novalidate @submit.prevent="submitForm">

                      <mdb-row>
                      <mdb-col md="2">
                      </mdb-col md="2">
                        <mdb-col md="8" >

                          <mdb-row>
                            <mdb-col>
                              <mdb-input label="Your name" v-model="fields.name" required />
                            </mdb-col>
                            <mdb-col>
                              <mdb-input type="email" label="Your email" v-model="fields.email" required />
                            </mdb-col>
                          </mdb-row>

                          <mdb-row>
                            <mdb-col>
                              <mdb-input label="Subject" v-model="fields.subject" required />
                            </mdb-col>
                          </mdb-row>

                          <mdb-row>
                            <mdb-col>
                              <mdb-input
                                type="textarea"
                                label="Your message"
                                v-model="fields.message"
                                required
                              />
                            </mdb-col>
                          </mdb-row>

                          <mdb-row>
                            <mdb-col>
                            <mdb-btn color="primary" type="submit" class="float-right">Send</mdb-btn>
                            </mdb-col>
                          </mdb-row>
                        </mdb-col>

                        <mdb-col md="2">
                        </mdb-col md="2">

                      </mdb-row>

                    </form>
                  </mdb-card-body>
              </mdb-container>


            <go-top style="top: 80%; left: 90%; width: 5%; height: 10%; background-color: rgba(0, 0, 0, 0.5);"></go-top>
          <div style="padding:70px"></div>

      </b-col>
    </b-row>
    </div>


    </template>

    <script>

    import {
      mdbContainer,
      mdbInput,
      mdbCard,
      mdbCardHeader,
      mdbCardTitle,
      mdbCardText,
      mdbCardBody,
      mdbIcon,
      mdbBtn,
      mdbRow,
      mdbCol
    } from 'mdbvue'
    import api from '@/api'
    import GoTop from '@inotom/vue-go-top';

    export default {
    data () {
    return {
      loading: false,
      posts: [],
      model: {},
      fields: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }
    },
    components: {
      GoTop,
      mdbContainer,
      mdbInput,
      mdbCard,
      mdbCardHeader,
      mdbCardTitle,
      mdbCardBody,
      mdbCardText,
      mdbIcon,
      mdbBtn,
      mdbRow,
      mdbCol
    },
    async created () {
    this.refreshPosts()
    },
    methods: {
    async refreshPosts () {
      this.loading = true
      this.posts = await api.getPosts()
      this.loading = false
    },
    async populatePostToEdit (post) {
      this.model = Object.assign({}, post)
    },
    async savePost () {
      if (this.model.id) {
        await api.updatePost(this.model.id, this.model)
      } else {
        await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()
    },
    async deletePost (id) {
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        await api.deletePost(id)
        await this.refreshPosts()
      }
    },
    submitForm(event) {
        event.target.classList.add("was-validated");
      }
    }
    };

    </script>

    <style scoped>
      #contact {
        text-align: center;
      }
    </style>
