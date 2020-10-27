<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" fixed="top" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">My Resume</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#EP">Experiencia Profesional</b-nav-item>
          <b-nav-item href="#PP">Proyectos Personales</b-nav-item>
          <b-nav-item href="#L">Liderazgo</b-nav-item>
          <b-nav-item href="#TS">Technical Skills</b-nav-item>
          <b-nav-item-dropdown id="my-nav-dropdown" text="" toggle-class="nav-link-custom">
          <b-dropdown-item to="/posts-manager">Admin</b-dropdown-item>
          <b-dropdown-item href="#" @click.prevent="login" v-if="!activeUser">Login</b-dropdown-item>
          <b-dropdown-item href="#" @click.prevent="logout" v-else>Logout</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- routes will be rendered here -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      activeUser: null
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    login () {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    },
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
    }
  }
}
</script>
